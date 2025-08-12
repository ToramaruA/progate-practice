-- 以下にクエリを書いてください
SELECT posts.id AS post_id, posts.content, COUNT(likes.id) AS likes_count 
FROM posts
LEFT JOIN likes ON posts.id = likes.post_id
GROUP BY posts.id, posts.posted_at, posts.content
ORDER BY likes_count DESC, posts.posted_at DESC;