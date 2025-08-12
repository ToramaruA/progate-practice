-- 以下にクエリを書いてください
SELECT users.username, posts.content, posts.posted_at FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY posted_at DESC LIMIT 20;