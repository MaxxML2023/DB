SELECT * FROM users;
SELECT * FROM followers;
SELECT * FROM posts;s
SELECT * FROM users WHERE role = 'admin';
SELECT * FROM posts WHERE user_id = 1;
SELECT * FROM posts WHERE status = 'published';
SELECT following_user_id FROM followers WHERE followed_user_id = 1;
SELECT followed_user_id FROM followers WHERE following_user_id = 2;

SELECT * FROM posts ORDER BY created_at DESC LIMIT 5;
SELECT COUNT(*) FROM users;
SELECT user_id, COUNT(*) AS post_count FROM posts GROUP BY user_id;
SELECT * FROM posts WHERE title LIKE '%My First Post%';
SELECT * FROM posts WHERE created_at > '2024-02-25';

SELECT * FROM users
WHERE id NOT IN (SELECT user_id FROM posts);

SELECT * FROM posts
WHERE body LIKE '%keyword%';

SELECT * FROM posts
WHERE body LIKE '%keyword%';


