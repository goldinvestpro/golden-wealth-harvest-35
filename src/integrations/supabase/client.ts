// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ljwpembxwmixeusuxbsl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd3BlbWJ4d21peGV1c3V4YnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMzQxMzEsImV4cCI6MjA1MDYxMDEzMX0.7o2SQxB0LQ7aFlrPKIKW7lrUFeTnSxs4XfLTyluKp8U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);