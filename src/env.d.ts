interface ProcessEnv {
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  DATABASE_URL: string;
  CALLRAIL_KEY: string;
  CALLRAIL_ACCOUNT: string;
  ZILLOW_API_KEY?: string;  // Optional: Get from Zillow devs; fallback to scrape if unset
  // Add more if needed, e.g., CALLRAIL_KEY
}