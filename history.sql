PGDMP                  	    {            history    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    history    DATABASE     {   CREATE DATABASE history WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE history;
                postgres    false            �            1259    16405    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    user_id integer NOT NULL,
    action text NOT NULL,
    data json NOT NULL,
    "time" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16404    history_id_seq    SEQUENCE     �   CREATE SEQUENCE public.history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.history_id_seq;
       public          postgres    false    216            �           0    0    history_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.history_id_seq OWNED BY public.users.id;
          public          postgres    false    215                       2604    16431    users id    DEFAULT     f   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.history_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16405    users 
   TABLE DATA           B   COPY public.users (id, user_id, action, data, "time") FROM stdin;
    public          postgres    false    216   �
       �           0    0    history_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.history_id_seq', 28, true);
          public          postgres    false    215                       2606    16411    users history_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT history_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.users DROP CONSTRAINT history_pkey;
       public            postgres    false    216            �      x������ � �     