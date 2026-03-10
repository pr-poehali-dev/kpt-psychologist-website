CREATE TABLE t_p48614310_kpt_psychologist_web.leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  telegram VARCHAR(100),
  request TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);