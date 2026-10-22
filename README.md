# 育華國小 四年忠班 教學網站

溫暖貓咪奶油風的班級教學網站，純 HTML + CSS + 原生 JavaScript，可直接開啟 `index.html` 瀏覽。

## 檔案結構

```
預設專案/
├── index.html      主頁面（所有內容）
├── style.css       樣式表（配色、版面、動畫、RWD、列印樣式）
├── script.js       互動腳本（選單、捲動動畫、數字動畫、scroll spy）
├── logo.png        班級 Logo（布偶貓插畫，1278 × 634）
├── qrcode.png      班級 QR Code（450 × 450）
└── images/         班級相簿照片放置處
```

## 功能特色

- **Logo**：頁首圓形縮圖 + 首頁大圖 + 頁尾縮圖，全部使用 `logo.png`
- **QR Code**：`qrcode.png` 以 **450 × 450 px** 顯示於「班級 QR Code」區塊，另有 200px 縮圖於聯絡區
- **免費小圖示**：Font Awesome 6 Free（CDN 載入）
- **免費字型**：Noto Sans TC + Fredoka（Google Fonts）
- 響應式設計（桌機／平板／手機）、捲動進場動畫、數字跑馬燈、手機選單、回到頂端鈕、列印最佳化

## 需要您填寫的內容

頁面中所有標示 <kbd>【請填入】</kbd> 的地方都可以直接修改文字：

| 位置 | 內容 |
| --- | --- |
| 班級基本資料 | 導師姓名、教室位置、男女比、辦公時間、電話 |
| 課表 | 節次時間、各節科目（目前為預設示例） |
| 回家作業 | 各科作業內容與截止日期 |
| 校園活動 | 活動日期 |
| 聯絡我們 | 導師姓名、分機、電子郵件、學校地址 |
| 相簿 | 照片放入 `images/` 後替換 `index.html` 中的佔位圖 |

## 更換 QR Code 內容

目前 `qrcode.png` 編碼的內容為 `index.html`。若網站上架到正式網址：

1. 到 <https://www.qr-code-generator.com> 產生 **450 × 450 px** 的 QR Code
2. 覆蓋本資料夾中的 `qrcode.png`
3. 重新整理頁面即可

## 開啟方式

直接雙擊 `index.html` 即可預覽；若要測試手機版面，可用瀏覽器的「行動裝置模擬」模式。
