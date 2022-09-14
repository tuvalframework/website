---
slug: Using bindState
title: Using bindState
authors:
  name: Yusuf Ali Selek
  title: Developer
  url: https://github.com/yusufaliselek
  image_url: https://avatars.githubusercontent.com/u/60384021?v=4
tags: [tuvalframework, js, ts]
---


## Tuval’de öğe nasıl gösterilir veya gizlenir?
<p align="center">
  <img src="https://cdn-images-1.medium.com/max/2000/1*u31LkT9PON8uOKMwCR_qYg.png" alt="https://github.com/tuvalframework/"/>
</p>


Tuval Framework içerisinde öğeleri gizlemek için @tuval/forms kütüphanesini kullanacağız. Forms özelliklerini kullanabilmemiz için ilk olarak @tuval/forms kitaplığından bindState işlevini içe aktararak başlayacağız:

![](https://cdn-images-1.medium.com/max/2000/1*kXSo3tPpNehT0Hk92JBnmg.png)

Ardından, işlevsel bileşenin içine const değişkeni yazacağız ve köşeli parantezler ekleyeceğiz. Köşeli parantezler içerisinde, showView ve setShowView olarak iki isim adlandıracağız, burada showView bir metnin değeri olacak ve setShowView, değeri değiştirmek için kullanılan bir fonksiyon olacak.

**Not:** showView kelimesini istediğiniz şeyle değiştirebilirsiniz. Bu kelimeleri örnek olarak kullanmaktayım.

Sonrasında ise bindState yazacağız ve parantez içerisine true olarak ayarlayacağız ki varsayılan olarak görünür olsun.

![](https://cdn-images-1.medium.com/max/2188/1*guRyDHsHE6XjCN7KgvC0iA.png)

Ardından bir onClick işlevi tanımlamamız gerekmektedir. Bu işlev daha önce tanımladığımız setShowView fonksiyonunu kullanmamıza olanak sağlayacaktır. setShowView’in parantez içerisine showView’in değerinin tersini atamalıyız ki her seferinde istediğimiz görünümü bize iletsin.

![](https://cdn-images-1.medium.com/max/2000/1*TXJdnRrG1jHcy2xOGx4ThA.png)

Eğer sadece false atasaydık bir kereliğe mahsus bize görünümü gizlemiş olacaktı, tabii ki bu şekilde de kullanılabilir.

Bu onClick ile birlikte artık fonksiyonu kullanmaya hazırız.

İstediğimiz button görünümüne bu onClick’i atıyoruz:

![](https://cdn-images-1.medium.com/max/2000/1*wJXQD9mPRQQA2DBN9TKhdg.png)

Bu button’daki olayı bir görünüme bağlamamız gerekli. Bu görünümde de .visible() metotunu kullanarak showView değerini içerisine atamamız gerekmektedir.

Ardından gizlemek veya göstermek istediğimiz öğeyi yapımıza ekliyoruz:

![](https://cdn-images-1.medium.com/max/2116/1*___v1PjDvXUKbItZiAomwg.png)

Kod bloğumuzun en son hali ise şu şekildedir:

![](https://cdn-images-1.medium.com/max/2360/1*y854j-J8d4qo7vwVinmscw.png)

Ve yapmak istediğimize ulaştık! Kodumuzu test etmeye hazırız, button’a tıkladığınız anda görünür olan öğeyi gizliyoruz, tekrar tıkladığımızda ise öğeyi tekrar görebiliyoruz.

Tuval Framework Github Topluluğu için: [https://github.com/tuvalframework/](https://github.com/tuvalframework/)

