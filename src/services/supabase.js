import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://akgelbgjizjiqlthjjof.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZ2VsYmdqaXpqaXFsdGhqam9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2MTE3MjgsImV4cCI6MjAwNTE4NzcyOH0.Sd2UBT3hle6UnmPH91zxNsF-IEQJE_f37qfHBXI1maw`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
