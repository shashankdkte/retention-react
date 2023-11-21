import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dvicuasxllysfucgagsr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2aWN1YXN4bGx5c2Z1Y2dhZ3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1ODM5NTAsImV4cCI6MjAxNjE1OTk1MH0.-hnt3W7wdOcnQqPadN3RLK04MiZD_6mUAYAUtuAdQsk'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;