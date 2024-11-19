import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).json({ message: 'Method not allowed' });

  const { id, name } = req.body;

  const { error } = await supabase.from('users').update({ name }).eq('id', id);

  if (error) return res.status(400).json({ message: error.message });

  res.status(200).json({ message: 'Profile updated successfully' });
}
