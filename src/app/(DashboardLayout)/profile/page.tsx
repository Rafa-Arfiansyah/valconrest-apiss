'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import user1 from '../../../../public/images/profile/user-1.gif'
import banner from '../../../../public/images/backgrounds/banner.gif'
import LoadingSpinner from '../../components/LoadingAnimation'
import { motion, AnimatePresence } from 'framer-motion'
import { toast, Toaster } from 'react-hot-toast'

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => toast.success('Copied to clipboard'))
    .catch(err => toast.error('Failed to copy'))
}

interface UserProfile {
  username: string
  email: string
  isPremium: boolean
  premiumExpiresAt: string | null
  profilePicture: string
  role: 'user' | 'admin'
  createdAt?: Date
  updatedAt?: Date
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [isUploading, setIsUploading] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('accessToken')
      
      if (!token) {
        router.push('/auth/login')
        return
      }

      try {
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setProfile(response.data)
      } catch (error) {
        console.error('Failed to fetch profile:', error)
        handleAuthError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [router])

  const handleAuthError = (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.clear()
      router.push('/auth/login')
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validasi ukuran file
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size should be less than 5MB')
      return
    }

    // Validasi tipe file
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      toast.error('Only JPG, PNG and GIF files are allowed')
      return
    }

    setSelectedFile(file)
    
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const uploadProfilePicture = async () => {
    if (!selectedFile) {
      toast.error('Please select a file first')
      return
    }

    setIsUploading(true)
    const formData = new FormData()
    formData.append('profilePicture', selectedFile)

    try {
      const token = localStorage.getItem('accessToken')
      if (!token) {
        toast.error('Authentication required')
        router.push('/auth/login')
        return
      }

      const response = await axios.post('/api/users/uploads-profile-picture', formData, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      setProfile(prev => prev 
        ? { ...prev, profilePicture: response.data.profilePictureUrl } 
        : null
      )
      
      setSelectedFile(null)
      setPreviewImage(null)
      setIsEditingProfile(false)
      
      toast.success('Profile picture updated successfully!')
    } catch (error) {
      console.error('Failed to upload profile picture:', error)
      
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error('Session expired. Please login again')
          handleAuthError(error)
        } else if (error.response?.status === 413) {
          toast.error('File too large')
        } else {
          toast.error(error.response?.data?.message || 'Failed to upload profile picture')
        }
      } else {
        toast.error('An unexpected error occurred')
      }
    } finally {
      setIsUploading(false)
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    router.push('/auth/login')
    toast.success('Logged out successfully')
  }

  if (loading) return <LoadingSpinner />
  if (!profile) return <div className='flex justify-center items-center min-h-screen'>Error loading profile</div>

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto space-y-8'>
        <Toaster />
        
        {/* Main Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden'
        >
          {/* Banner Section */}
          <div className='h-40 sm:h-48 md:h-56 relative group'>
            <Image
              src={banner}
              alt='Profile Banner'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30'></div>
            <button 
              className='absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
              onClick={() => toast.info('Banner change coming soon!')}
            >
              <Icon icon='material-symbols:edit' className='text-gray-700 dark:text-gray-200 text-xl' />
            </button>
          </div>

          {/* Profile Info Section */}
          <div className='relative px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-6 -mt-16 sm:-mt-20'>
              {/* Profile Picture */}
              <div 
                className='relative group'
                onMouseEnter={() => setIsEditingProfile(true)}
                onMouseLeave={() => setIsEditingProfile(false)}
              >
                <div className='w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-700 overflow-hidden shadow-lg bg-white relative'>
                  <Image
                    src={
                      profile.profilePicture && !profile.profilePicture.includes('user-1.gif')
                        ? profile.profilePicture
                        : user1
                    }
                    alt={`${profile.username}'s profile`}
                    fill
                    className='object-cover'
                    priority
                  />
                  <AnimatePresence>
                    {isEditingProfile && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer'
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Icon 
                          icon='material-symbols:photo-camera' 
                          className='text-white text-3xl'
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Profile Details */}
              <div className='text-center sm:text-left pb-4'>
                <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>
                  {profile.username}
                </h1>
                <div className='mt-2 flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4'>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    profile.isPremium 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {profile.isPremium ? 'Premium User' : 'Free User'}
                  </span>
                  <span className='text-gray-500 dark:text-gray-400'>{profile.email}</span>
                  <span className='text-gray-500 dark:text-gray-400 capitalize'>{profile.role}</span>
                </div>
              </div>
            </div>

            {/* API Section */}
            <div className='mt-8 space-y-6'>
              <div className='bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0'>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>API Credentials</h2>
                  <div className='flex space-x-3'>
                    <button 
                      onClick={() => setShowApiKey(!showApiKey)}
                      className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2'
                    >
                      <Icon icon={showApiKey ? 'mdi:eye-off' : 'mdi:eye'} className='text-lg' />
                      <span>{showApiKey ? 'Hide Key' : 'Show Key'}</span>
                    </button>
                    <Link
                      href='/docs'
                      className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2'
                    >
                      <Icon icon='material-symbols:book-outline' className='text-lg' />
                      <span>Docs</span>
                    </Link>
                  </div>
                </div>

                {/* API Key Display */}
                <AnimatePresence>
                  {showApiKey && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className='mt-4'
                    >
                      <div className='flex items-center space-x-2'>
                        <input 
                          type='text' 
                          value={profile.username} 
                          readOnly 
                          className='flex-1 px-4 py-2 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500'
                        />
                        <button 
                          onClick={() => copyToClipboard(profile.username)}
                          className='p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200'
                          title='Copy to clipboard'
                        >
                          <Icon icon='material-symbols:content-copy' className='text-xl' />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Usage Stats */}
                <div className='mt-6 space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600 dark:text-gray-300'>Monthly API Usage</span>
                    <span className='font-medium text-gray-900 dark:text-white'>
                      {profile.isPremium ? '5,000' : '1,000'} requests/month
                    </span>
                  </div>
                  <div className='relative pt-1'>
                    <div className='overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-600'>
                      <div
                        className='transition-all duration-500 ease-out rounded-full'
                        style={{ 
                          width: profile.isPremium ? '100%' : '20%',
                          background: profile.isPremium 
                            ? 'linear-gradient(to right, #10B981, #059669)' 
                            : 'linear-gradient(to right, #3B82F6, #2563EB)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upgrade Card */}
        {!profile.isPremium && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl p-6 text-white text-center'
          >
            <h3 className='text-xl font-bold mb-2'>Upgrade to Premium</h3>
            <p className='mb-4 opacity-90'>Get unlimited API access and premium features!</p>
            <Link 
              href='/upgrade'
              className='inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200'
            >
              Upgrade Now
            </Link>
          </motion.div>
        )}

        {/* Logout Button */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={handleLogout}
          className='w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition-colors duration-200 font-medium'
        >
          Logout
        </motion.button>
      </div>

      {/* Profile Picture Upload Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full'
            >
              <div className='aspect-square relative rounded-xl overflow-hidden mb-6'>
                <Image 
                  src={previewImage} 
                  alt='Profile Preview' 
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex space-x-4'>
                <button 
                  onClick={uploadProfilePicture}
                  disabled={isUploading}
                  className={`flex-1 ${
                    isUploading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-green-500 hover:bg-green-600'
                  } text-white py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}
                >
                  {isUploading ? (
                    <>
                      <Icon icon="eos-icons:loading" className="animate-spin" />
                      <span>Uploading...</span>
                    </>
                  ) : (
                    'Upload'
                  )}
                </button>
                <button 
                  onClick={() => {
                    setSelectedFile(null)
                    setPreviewImage(null)
                  }}
                  disabled={isUploading}
                  className='flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden File Input */}
      <input 
        type='file' 
        ref={fileInputRef}
        className='hidden' 
        accept='image/jpeg,image/png,image/gif'
        onChange={handleFileChange}
      />
    </div>
  )
}

export default ProfilePage