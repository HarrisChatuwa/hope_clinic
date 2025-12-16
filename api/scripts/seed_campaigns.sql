-- Insert sample campaigns
INSERT INTO campaigns (title, description, goal, raised, currency, start_date, end_date, category, impact_story, image_url, status)
VALUES 
(
  'Solar Power Expansion',
  'Install additional solar panels to ensure 24/7 reliable electricity for medical equipment and vaccine refrigeration',
  15000.00,
  8750.00,
  'USD',
  '2024-01-01',
  '2024-12-31',
  'infrastructure',
  'Reliable power means we can operate medical equipment around the clock and refrigerate vaccines safely, serving more patients without interruption.',
  '/images/solar.jpg',
  'active'
),
(
  'Essential Medicine Stock',
  'Secure a 3-month supply of critical medications including antibiotics, antimalarials, and chronic disease treatments',
  10000.00,
  7800.00,
  'USD',
  '2024-01-01',
  '2024-03-31',
  'medical',
  'This ensures we never have to turn away a patient due to lack of medication. Every dollar provides life-saving treatment.',
  '/images/medicine.jpg',
  'active'
),
(
  'Childhood Vaccination Program',
  'Expand our vaccination program to reach 2,000 children with essential immunizations',
  8000.00,
  7100.00,
  'USD',
  '2024-01-01',
  '2024-06-30',
  'program',
  'Vaccines prevent deadly diseases. Your contribution protects children and builds healthier communities for generations.',
  '/images/vaccine.jpg',
  'active'
);
