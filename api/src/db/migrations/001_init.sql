CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);

INSERT INTO admin_users (name, email, password_hash, role) 
VALUES (
  'Admin User',
  'admin@hopefamilyclinic.org',
  '$2b$10$rKvVJZ8YqZ8YqZ8YqZ8YqOqZ8YqZ8YqZ8YqZ8YqZ8YqZ8YqZ8YqZ8',
  'super_admin'
) ON CONFLICT (email) DO NOTHING;
