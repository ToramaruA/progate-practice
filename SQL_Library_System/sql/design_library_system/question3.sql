/*
抽出するデータ
 本のタイトル
 著者の名前
 貸し出し可否
 返却期限日（貸し出し中の場合）
並び順
 本のタイトルの昇順
補足
 上位 3 件を取得すること
*/

SELECT
  books.title,
  authors.name AS author_name,
  CASE
    WHEN active_loans.book_id IS NULL THEN '可'   -- 貸出レコードが無ければ可
    ELSE '不可'                                   -- あれば貸出中
  END AS availability,
  CASE
    WHEN active_loans.book_id IS NULL THEN NULL
    ELSE TIMESTAMP(
           DATE_ADD(DATE(active_loans.loaned_at), INTERVAL 30 DAY), -- 貸出日の“日付”に+30日
           '23:59:00'                                               -- 時刻は23:59固定
         )
  END AS due_at
FROM books
JOIN authors ON authors.id = books.author_id
LEFT JOIN (
  SELECT
    book_id,
    MAX(loaned_at) AS loaned_at      -- 返却前(未返却)の中で一番新しい貸出
  FROM loans
  WHERE returned_at IS NULL
  GROUP BY book_id
) AS active_loans
  ON active_loans.book_id = books.id
ORDER BY books.title ASC
LIMIT 3;