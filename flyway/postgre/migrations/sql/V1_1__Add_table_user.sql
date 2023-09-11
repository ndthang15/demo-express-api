DROP TYPE IF EXISTS user_type;
CREATE TYPE user_type AS ENUM ('student', 'teacher', 'admin');

CREATE TABLE IF NOT EXISTS public."user"
(
    user_id bigint NOT NULL GENERATED ALWAYS AS identity,
    full_name text,
    region text,
    email text,
    phone_number text,
    image_preview_path text,
    user_type user_type not null default 'student',
    created_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT user_pk PRIMARY KEY (user_id)
);