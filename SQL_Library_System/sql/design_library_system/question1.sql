/*
抽出するデータ
 本のタイトル
 著者名
並び順
 本のタイトルの昇順
補足
 任意の 1 つのカテゴリに紐づいた本のみを抽出すること
*/

SELECT books.title, authors.name AS author_name
FROM books
JOIN authors ON authors.id = books.author_id
JOIN book_categories ON book_categories.book_id = books.id
JOIN categories ON categories.id = book_categories.category_id
WHERE categories.name = '歴史'
ORDER BY books.title ASC;