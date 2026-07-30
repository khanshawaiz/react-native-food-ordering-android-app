SELECT u.id, u.email, p.group 
FROM auth.users u 
JOIN public.profiles p ON u.id = p.id 
WHERE u.email = 'shawaiz@gmail.com';