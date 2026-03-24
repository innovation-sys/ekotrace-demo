-- Schema for Supabase Database

CREATE TABLE source_sites (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE batches (
    id SERIAL PRIMARY KEY,
    source_site_id INT REFERENCES source_sites(id),
    batch_number VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE processing_logs (
    id SERIAL PRIMARY KEY,
    batch_id INT REFERENCES batches(id),
    processed_at TIMESTAMPTZ DEFAULT now(),
    status VARCHAR(50) NOT NULL,
    details TEXT
);

CREATE TABLE validation_records (
    id SERIAL PRIMARY KEY,
    batch_id INT REFERENCES batches(id),
    valid BOOLEAN NOT NULL,
    validated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE carbon_calcs (
    id SERIAL PRIMARY KEY,
    batch_id INT REFERENCES batches(id),
    carbon_value DECIMAL NOT NULL,
    calculation_date TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE user_roles (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    role VARCHAR(50) NOT NULL,
    assigned_at TIMESTAMPTZ DEFAULT now()
);