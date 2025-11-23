# Vercel'e Deployment Rehberi

Bu proje Vercel'de kolayca deploy edilebilir.

## 🚀 Hızlı Deployment (Önerilen)

### Adım 1: GitHub'a Yükleyin

```bash
# Git repository başlat (eğer yoksa)
git init

# Dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Adil Bayraktar personal website"

# GitHub'da yeni bir repository oluşturun (adilbayraktar-website)
# Sonra bu komutları çalıştırın:
git remote add origin https://github.com/KULLANICI_ADINIZ/adilbayraktar-website.git
git branch -M main
git push -u origin main
```

### Adım 2: Vercel'e Deploy

1. **Vercel'e Gidin**: https://vercel.com
2. **Sign Up / Login**: GitHub hesabınızla giriş yapın
3. **New Project** butonuna tıklayın
4. **Import Git Repository**: GitHub'daki repository'nizi seçin
5. **Configure Project**:
   - Framework Preset: **Next.js** (otomatik seçilecek)
   - Root Directory: `./` (varsayılan)
   - Build Command: `npm run build` (varsayılan)
   - Output Directory: `.next` (varsayılan)
6. **Deploy** butonuna tıklayın

✅ **Bitti!** 2-3 dakika içinde siteniz yayında olacak.

---

## 🔧 Vercel CLI ile Deployment (Alternatif)

### Kurulum

```bash
# Vercel CLI'yi global olarak yükle
npm install -g vercel
```

### Deployment

```bash
# İlk defa deploy ediyorsanız
vercel

# Production'a deploy etmek için
vercel --prod
```

Komutları çalıştırdığınızda:
1. Vercel hesabınızı bağlayın
2. Proje ayarlarını onaylayın
3. Deploy otomatik başlayacak

---

## ⚙️ Özel Domain Ayarları

### Vercel Dashboard'dan:

1. Projenize gidin
2. **Settings** → **Domains** sekmesine tıklayın
3. `adilbayraktar.com` domain'ini ekleyin
4. DNS ayarlarını gösterildiği gibi yapın:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. DNS yayılması için 24-48 saat bekleyin

---

## 🔄 Otomatik Deployment

GitHub'a her push yaptığınızda Vercel otomatik olarak yeni versiyonu deploy eder:

```bash
# Değişiklikler yap
git add .
git commit -m "Update content"
git push

# Vercel otomatik deploy edecek! 🎉
```

---

## 📊 Build Komutları

```bash
# Development server
npm run dev

# Production build test
npm run build
npm start

# Lint kontrolü
npm run lint
```

---

## 🌍 Environment Variables (İsteğe Bağlı)

Eğer contact form API'si gibi şeyler eklerseniz:

1. Vercel Dashboard → Settings → Environment Variables
2. Değişkenlerinizi ekleyin
3. Redeploy yapın

---

## 📝 Deployment Sonrası Kontrol Listesi

- [ ] Site açılıyor mu? (vercel.app URL'inden kontrol)
- [ ] Tüm sayfalar çalışıyor mu? (/, /about, /contact, vb.)
- [ ] Animasyonlar düzgün çalışıyor mu?
- [ ] localStorage çalışıyor mu? (homepage'de path seçimi)
- [ ] Form gönderimi test edildi mi?
- [ ] Mobile responsive mı?
- [ ] Domain bağlandı mı? (adilbayraktar.com)

---

## 🆘 Sorun Giderme

### Build Hatası Alıyorsanız:

```bash
# Local'de build test edin
npm run build

# Eğer hata varsa düzeltin, sonra tekrar push
```

### Domain Bağlanmıyorsa:

- DNS ayarlarını kontrol edin
- 24-48 saat bekleyin (DNS propagation)
- Vercel dashboard'dan domain status kontrol edin

### Değişiklikler Görünmüyorsa:

- Browser cache'i temizleyin (Cmd+Shift+R / Ctrl+Shift+R)
- Vercel'de build loglarını kontrol edin
- Hard refresh yapın

---

## 🎉 Deployment Tamamlandı!

Site artık yayında! Paylaşabilirsiniz:

- **Vercel URL**: https://your-project.vercel.app
- **Custom Domain**: https://adilbayraktar.com

Her değişiklikte GitHub'a push yapmanız yeterli, Vercel otomatik güncelleyecek.

