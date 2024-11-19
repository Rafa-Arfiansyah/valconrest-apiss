import { supabase } from '../../../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { id } = req.body;
  const apiKey = `APIKEY-${uuidv4()}`;

  const { error } = await supabase.from('users').update({ api_key: apiKey }).eq('id', id);

  if (error) return res.status(400).json({ message: error.message });

  res.status(200).json({ message: 'API key generated successfully', apiKey });
}
