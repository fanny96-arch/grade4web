# 班級相簿照片放置說明

請將班級照片放入此資料夾，並在 `index.html` 的「班級相簿」區段中替換對應的 `<div class="g-ph">`：

| 檔名 | 說明 | 建議尺寸 |
| --- | --- | --- |
| photo-1.jpg | 班級合體照 | 1600 × 1200（4:3） |
| photo-2.jpg | 運動會加油 | 1200 × 900（4:3） |
| photo-3.jpg | 校外教學 | 1200 × 900（4:3） |
| photo-4.jpg | 生日會 | 1200 × 900（4:3） |
| photo-5.jpg | 班級共同創作 | 1600 × 1200（4:3） |

替換方式（把 `g-ph` 換成 `g-ph` 底圖＋`img` 元素）：

```html
<figure class="g-item g-wide reveal">
  <div class="g-ph g-1">
    <img src="images/photo-1.jpg" alt="班級合體照">
  </div>
  <figcaption>班級合體照</figcaption>
</figure>
```

並在 `style.css` 補上：

```css
.g-ph img{ width:100%; height:100%; object-fit:cover; }
```
