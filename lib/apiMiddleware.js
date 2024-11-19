import { supabase } from './supabase';

export const validateApiKey = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ message: 'API key is required' });
  }

  const { data: user, error } = await supabase
    .from('users')
    .select('id, api_key')
    .eq('api_key', apiKey)
    .single();

  if (error || !user) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  req.user = user;
  next();
};

export const logApiUsage = async (req, res, next) => {
  const { api_key } = req.user;
  const endpoint = req.url;

  const { data: usage } = await supabase
    .from('api_usage')
    .select('request_count')
    .eq('api_key', api_key)
    .eq('endpoint', endpoint)
    .order('created_at', { ascending: false })
    .limit(1);

  const requestCount = usage?.[0]?.request_count || 0;

  const { data: limit } = await supabase
    .from('api_limits')
    .select('request_limit')
    .eq('api_key', api_key)
    .single();

  if (requestCount >= limit?.request_limit) {
    return res.status(429).json({ message: 'Request limit reached' });
  }

  await supabase.from('api_usage').insert({
    api_key,
    endpoint,
    request_count: requestCount + 1,
  });

  next();
};
