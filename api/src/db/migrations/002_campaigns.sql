CREATE TABLE IF NOT EXISTS campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  goal DECIMAL(10, 2) NOT NULL,
  raised DECIMAL(10, 2) DEFAULT 0,
  currency VARCHAR(10) DEFAULT 'USD',
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  donors INTEGER DEFAULT 0,
  category VARCHAR(50) NOT NULL CHECK (category IN ('medical', 'infrastructure', 'program', 'emergency')),
  impact_story TEXT,
  image_url TEXT,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_campaigns_status ON campaigns(status);
CREATE INDEX IF NOT EXISTS idx_campaigns_category ON campaigns(category);

CREATE TABLE IF NOT EXISTS donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE SET NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'USD',
  donor_name VARCHAR(255),
  donor_email VARCHAR(255),
  payment_method VARCHAR(50),
  payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  transaction_id VARCHAR(255),
  receipt_sent BOOLEAN DEFAULT false,
  is_recurring BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_donations_campaign ON donations(campaign_id);
CREATE INDEX IF NOT EXISTS idx_donations_status ON donations(payment_status);
CREATE INDEX IF NOT EXISTS idx_donations_created ON donations(created_at);
