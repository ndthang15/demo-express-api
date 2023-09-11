-- users
INSERT INTO public.user (full_name,region,email,created_date)
	VALUES ('Hoc sinh lop 1 A','mien bac','1a@abc.com', CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email,created_date)
	VALUES ('Hoc sinh lop 1 B','mien bac','1b@abc.com',CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email,created_date)
	VALUES ('Hoc sinh lop 2 A','mien nam','2a@abc.com',CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email,created_date)
	VALUES ('Hoc sinh lop 2 B','mien nam','2b@abc.com',CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email,created_date)
	VALUES ('Hoc sinh lop 2 C','mien bac','2c@abc.com',CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email, user_type,created_date)
	VALUES ('Giao vien A','mien bac','teacherA@abc.com', 'teacher',CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email, user_type,created_date)
	VALUES ('Giao vien B','mien bac','teacherB@abc.com', 'teacher',CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email, user_type,created_date)
	VALUES ('Giao vien C','mien bac','teacherC@abc.com', 'teacher',CURRENT_TIMESTAMP);
INSERT INTO public.user (full_name,region,email, user_type, created_date)
	VALUES ('Admin A','mien bac','adminA@abc.com', 'admin',CURRENT_TIMESTAMP);

-- class
INSERT INTO public."class" (class_name,is_verified, created_date)
	VALUES ('lop 1',true, CURRENT_TIMESTAMP);
INSERT INTO public."class" (class_name,is_verified, created_date)
	VALUES ('lop 2',true, CURRENT_TIMESTAMP);
INSERT INTO public."class" (class_name,is_verified, created_date)
	VALUES ('lop 3',false, CURRENT_TIMESTAMP);