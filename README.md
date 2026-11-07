# 神保町の地図

古書店を手がかりに、神保町の建物と歴史を知る街歩き用の地図。

古書店12店と、画材店・喫茶店・教会の3地点、計15か所を掲載しています。

公開先：https://builtbyko.github.io/jinbocho.book/

地図・現在地・場所一覧・解説に機能を絞っています。徒歩ナビや訪問記録はありません。

店の創業年と、現在の建物の竣工年は別々に掲載しています。資料で確かめられない年は未確認とし、移転年を建築年として扱いません。各カードに出典を掲載しています。山田書店の創業年は店公式の1936年を採用し、協会資料の1938年という異なる記載も注記しています。

## 編集と公開

`app.js` が店舗データと表示ロジック、`style.css` がスタイルです。`index.html` は両方を埋め込んだ公開用ファイルで、編集時は同期が必要です。`shops.geojson` はWGS84の地点データです。

GitHub Pages：main / (root)。ビルド・APIキー不要。ローカルでは `python -m http.server 8000` を実行し、localhost:8000 を開きます。

現在地にはHTTPSまたはlocalhostと位置情報の許可が必要です。現在地はこのサイトのサーバーへ送信・保存しません。地図の表示には通信が必要です。入口位置・GPS精度は現地未検証です。

Leaflet 1.9.4（BSD-2-Clause）https://leafletjs.com/

地図：© OpenStreetMap contributors（ODbL）https://www.openstreetmap.org/copyright
