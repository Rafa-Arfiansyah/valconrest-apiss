import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { error } = await supabase.auth.signOut();

  if (error) return res.status(400).json({ message: error.message });

  res.status(200).json({ message: 'Logout successful' });
}
