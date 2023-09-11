CREATE TABLE IF NOT EXISTS public.class
(
    class_id int NOT NULL GENERATED ALWAYS AS IDENTITY,
    class_name text,
    is_verified boolean DEFAULT false,
    created_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT class_pk PRIMARY KEY (class_id)
);