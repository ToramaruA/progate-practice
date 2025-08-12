-- 以下にクエリを書いてください
SELECT users.username, ranked.content AS latest_post_content
FROM users
LEFT JOIN (
    SELECT content, user_id, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY posted_at DESC) AS rn
    FROM posts
) AS ranked
ON users.id = ranked.user_id AND ranked.rn = 1
ORDER BY users.username ASC;
