## Asenkron Veri Çekme ve İşleme

 Bu proje, JSONPlaceholder API'sinden kullanıcı bilgilerini ve ilgili gönderileri asenkron olarak çeken ve işleyen bir Node.js uygulamasıdır.

## Kullanılan Teknolojiler

 Node.js
 Axios
 ES Modules (import/export)
 Async/Await

## Kurulum ve Çalıştırma

1. Projeyi Klonlayın

2. Bağımlılıkları Yükleyin(npm install)

3. Uygulamayı Çalıştırın(node app.js)

## Açıklama

service.js: getData(userId) fonksiyonu, verilen userId ile kullanıcı bilgilerini ve ilgili gönderileri API'den çeker.

app.js: getData(1) çağrısı ile kullanıcı ve post verilerini getirip ekrana yazdırır.

Not: JSONPlaceholder sahte API'si kullanıldığı için gerçek veri içermez. Daha fazla bilgi için JSONPlaceholder sitesini ziyaret edebilirsiniz.
