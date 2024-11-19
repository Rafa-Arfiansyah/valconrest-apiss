import { supabase } from '../lib/supabase';

const resetLimits = async () => {
  const { error } = await supabase.from('api_usage').delete().gte('created_at', new Date(Date.now() - 86400000));

  if (error) console.error('Error resetting limits:', error.message);
  else console.log('Request limits reset successfully');
};

resetLimits();
