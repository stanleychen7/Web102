import { createClient } from "@supabase/supabase-js";

const URL = 'https://pmnxhczdihgvvphxrtcy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtbnhoY3pkaWhndnZwaHhydGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNjY2ODEsImV4cCI6MjAxNDY0MjY4MX0.VN_wEb3DgDbBAKFwHPRWLc85DH0aKs6EmMHZUsOygzw';

export const supabase = createClient(URL, API_KEY);