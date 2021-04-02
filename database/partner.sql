drop table if exists partner;
create table partner(
    partner_id serial primary key,
    partner_name text,
    partner_email text,
    partner_website text NULL,
    partner_contact integer,
    area_code integer
);