-- 以下にクエリを書いてください
SELECT id, LEFT(content, 20) AS content, posted_at 
FROM posts
WHERE user_id = 5 
ORDER BY posted_at DESC 
LIMIT 10;