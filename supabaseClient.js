import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ptkkeplgzbiicnfmjypj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0a2tlcGxnemJpaWNuZm1qeXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MDkxMTYsImV4cCI6MjA2MzE4NTExNn0.nyKBeOeuuwCWNF4-XoLfhcvtGGGdy7jVoZXz1wHlPsM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);