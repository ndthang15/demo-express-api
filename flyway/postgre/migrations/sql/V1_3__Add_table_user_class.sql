CREATE TABLE IF NOT EXISTS public.user_class
(
	user_class_id int NOT NULL GENERATED ALWAYS AS identity,
    user_id bigint NOT NULL,
    class_id int not null,
    created_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT user_class_pk PRIMARY KEY (user_class_id),
    CONSTRAINT user_class_user_fk FOREIGN KEY (user_id) REFERENCES public.user (user_id),
    CONSTRAINT user_class_class_fk FOREIGN KEY (class_id) REFERENCES public.class (class_id)
);