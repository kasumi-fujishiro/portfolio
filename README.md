# Kasumi Fujishiro Portfolio

藤代華寿仁（武蔵野大学 データサイエンス学部）のポートフォリオサイトです。

公開URL: https://kasumi-fujishiro.github.io/portfolio/

## ファイル

- `index.html` ページの中身（トップ、About、Contact）
- `main.js` 作品の一覧（`works` 配列）と、作品の詳しい説明・メールのコピーの動き
- `style.css` 見た目
- `images/` 作品の画面の画像

作品を足すときは、`main.js` の `works` 配列の末尾に1つ足します（古い順に No. がつきます）。

## 手元で見る

```bash
python3 -m http.server 8130
```

ブラウザで http://localhost:8130 を開きます。
