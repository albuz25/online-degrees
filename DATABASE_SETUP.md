# Database Setup (Supabase)

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project (choose a region close to your users)
3. Wait for the project to finish provisioning

## 2. Create the leads table

In Supabase Dashboard → **SQL Editor**, run:

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  course TEXT NOT NULL,
  state TEXT NOT NULL,
  university_slug TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Optional: index for searching by university or date
CREATE INDEX idx_leads_university ON leads(university_slug);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
```

## 3. Get your API keys

1. Supabase Dashboard → **Project Settings** → **API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** key (under "Project API keys") → `SUPABASE_SERVICE_ROLE_KEY`

## 4. Add env vars locally

1. Copy `.env.example` to `.env.local`
2. Paste your values:

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefgh.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 5. Install dependency and run

```bash
npm install
npm run dev
```

## 6. View leads

Supabase Dashboard → **Table Editor** → **leads**

---

**Security:** The `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security. Keep it secret and never expose it to the client. It is only used in your API route on the server.
