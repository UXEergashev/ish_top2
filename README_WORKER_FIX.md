# TrustID - Ishchi Dashboard Tuzatilgan

## ✅ Hal qilingan muammolar

### 1. **String escape xatoliklari tuzatildi**
- `To\\'lovlar` → `To'lovlar`
- `so\\'m` → `so'm`
- `Noma\\'lum` → `Noma'lum`

### 2. **Logo va Title tuzatildi**
- `FermerX` → `TrustID` (worker-dashboard.html)

### 3. **loadProfile() funksiyasi xavfsizroq qilindi**
```javascript
// Oldin:
document.getElementById('profileName').value = ...

// Hozir:
const nameEl = document.getElementById('profileName');
if (nameEl) nameEl.value = ...
```

## 🚀 Ilovani test qilish

### 1-qadam: Ilovani oching
`index.html` faylini brauzerda oching

### 2-qadam: Ro'yxatdan o'ting
1. "Ro'yxatdan o'tish" tugmasini bosing
2. **Ishchi** sifatida ro'yxatdan o'ting:
   - Ism: Test Ishchi
   - Telefon: +998901234567
   - Parol: 123456

3. Yoki **Ish beruvchi** sifatida:
   - Ism: Test Ish Beruvchi
   - Telefon: +998907654321
   - Parol: 123456

### 3-qadam: Test ma'lumotlar qo'shing (agar kerak bo'lsa)

Brauzer Console da (F12):
```javascript
// Test ishlarni qo'shish
addTestJobs();

// Yoki barcha ma'lumotlarni o'chirish
clearAllData();
```

Yoki `test-data.js` faylini index.html ga qo'shing:
```html
<script src="test-data.js"></script>
```

## 📋 Qanday ishlaydi

### Ishchi Dashboard:
1. **Bosh sahifa** - Statistika va tavsiya etilgan ishlar
2. **Profil** - Shaxsiy ma'lumotlarni tahrirlash
3. **Ish qidirish** - Barcha ishlarni ko'rish va qidirish
4. **Murojaatlarim** - Yuborilgan murojaatlar
5. **Shartnomalar** - Faol shartnomalar
6. **To'lovlar** - To'lovlar tarixi
7. **Tarix** - Tugallangan ishlar

### Ish Beruvchi Dashboard:
1. **Bosh sahifa** - Statistika va murojaatlar
2. **Ish e'lon qilish** - Yangi ish yaratish
3. **Mening ishlarim** - E'lon qilingan ishlar
4. **Murojaatlar** - Ishchillardan kelgan murojaatlar
5. **Shartnomalar** - Faol shartnomalar
6. **To'lovlar** - To'lovlar tarixi
7. **Tarix** - Tugallangan ishlar

## 🔧 LocalStorage kalitlari

```javascript
trustid_users          // Barcha foydalanuvchilar
trustid_current_user   // Joriy foydalanuvchi
trustid_jobs           // Ishlar
trustid_applications   // Murojaatlar
trustid_contracts      // Shartnomalar
trustid_transactions   // To'lovlar
```

## ❗ Muhim

- Barcha ma'lumotlar brauzer localStorage da saqlanadi
- Ma'lumotlarni o'chirish uchun: `localStorage.clear()`
- Agar xatolik ko'rsangiz: F12 bosib Console da xatoliklarni ko'ring

## ✅ Hozirgi holat

- ✅ Index.html ishlaydi
- ✅ Ro'yxatdan o'tish ishlaydi
- ✅ Ish beruvchi dashboard ishlaydi
- ✅ Ishchi dashboard ishlaydi (tuzatilgan)
- ✅ LocalStorage bir xil kalitlar
- ✅ String xatoliklari tuzatilgan

## 📞 Yordam

Agar muammo bo'lsa:
1. F12 bosing (Developer Tools)
2. Console tab ni oching
3. Qizil xatoliklarni ko'ring
4. Screenshot oling va yuboring
