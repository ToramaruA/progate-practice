/*
抽出するデータ
 本のタイトル
 著者の名前
 貸し出し回数
並び順
 貸し出し回数の降順
補足
 貸し出し回数はクエリの実行時の年始から計測すること
 上位 3 件を取得すること
*/
SELECT
  books.title,
  authors.name AS author_name,
  COUNT(loans.id) AS loan_count
FROM loans
JOIN books   ON books.id   = loans.book_id
JOIN authors ON authors.id = books.author_id
WHERE YEAR(loans.loaned_at) = YEAR(CURDATE())
GROUP BY loans.book_id, books.title, authors.name
ORDER BY loan_count DESC, books.title ASC
LIMIT 3;