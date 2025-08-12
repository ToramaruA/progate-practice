-- 以下にクエリを書いてください
SELECT tags.name, COUNT(post_tags.id) AS posts_count
FROM tags
JOIN post_tags ON tags.id = post_tags.tag_id
GROUP BY post_tags.tag_id
HAVING posts_count >= 12
ORDER BY posts_count DESC, tags.name ASC;