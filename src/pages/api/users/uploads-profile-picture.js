// api/users/upload-profile-picture.js

import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import User from '../../../models/user';  // Import User model

// Fungsi untuk decode token
const decodeToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = './public/uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Hanya file gambar yang diperbolehkan!'));
    }
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method tidak diizinkan' });
  }

  try {
    // Handle file upload
    const multerHandler = upload.single('profilePicture');
    await new Promise((resolve, reject) => {
      multerHandler(req, res, (err) => {
        if (err) reject(err);
        resolve();
      });
    });

    // Check file
    if (!req.file) {
      return res.status(400).json({ error: 'Tidak ada file yang diupload' });
    }

    // Decode token
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      fs.unlinkSync(req.file.path);
      return res.status(401).json({ error: 'Token tidak ditemukan' });
    }

    const decodedToken = decodeToken(token);
    if (!decodedToken) {
      fs.unlinkSync(req.file.path);
      return res.status(401).json({ error: 'Token tidak valid' });
    }

    // Generate URL path untuk file
    const fileUrl = `/uploads/${req.file.filename}`;

    // Cari user dan update profile picture menggunakan Mongoose
    const user = await User.findById(decodedToken.userId);
    
    if (!user) {
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }

    // Hapus foto profil lama jika bukan foto default
    if (user.profilePicture && 
        user.profilePicture !== '/public/images/profile/user-1.gif' &&
        fs.existsSync(path.join('./public', user.profilePicture))) {
      fs.unlinkSync(path.join('./public', user.profilePicture));
    }

    // Update profile picture path
    user.profilePicture = fileUrl;
    await user.save();

    // Return success response
    return res.status(200).json({
      message: 'Foto profil berhasil diupdate',
      profilePictureUrl: fileUrl
    });

  } catch (error) {
    // Cleanup uploaded file if error occurs
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    
    console.error('Error upload foto profil:', error);
    return res.status(500).json({
      error: 'Gagal mengupload foto profil',
      message: error.message
    });
  }
}