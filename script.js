sorular=[
    {
     "soru": "1) “Kuşlar”, “Bulutlar” ve “Eşek Arıları” adlı tiyatro eserleri, Antik Çağ'ın en önemli komedya yazarlarından olan hangi yazara aittir?",
     "a_sikki": "Euripides",
     "b_sikki": "Aristofanes",
     "c_sikki": "Sofokles",
     "d_sikki": "Demokritos",
     "cevap": "B"
    },
    {
     "soru": "2) “İnsan Ne ile Yaşar” ve “Kreutzer Sonat” kitaplarının yazarı kimdir?",
     "a_sikki": "Lev Tolstoy",
     "b_sikki": "Necib Mahfuz",
     "c_sikki": "Halit Hüseyni",
     "d_sikki": " Geothe",
     "cevap": "A"
    },
    {
     "soru": "3) “Ne kadınlar sevdim zaten yoktular” dizesi ile başlayan “Böyle Bir Sevmek” adlı şiir kime aittir?",
     "a_sikki": "Edip Cansever",
     "b_sikki": "Can Yücel",
     "c_sikki": "Atilla İlhan ",
     "d_sikki": "Ümit Yaşar Oğuzcan",
     "cevap": "C"
    },
    {
     "soru": "4) 2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden ve Yarışmada Birinci Gelen Sanatçımız Kimdir?",
     "a_sikki": " Grup Athena ",
     "b_sikki": " Sertap Erener ",
     "c_sikki": " Şebnem Paker ",
     "d_sikki": " Ajda Pekkan",
     "cevap": "B"
    },
    {
     "soru": "5) Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir?",
     "a_sikki": " Bursa ",
     "b_sikki": " Ankara ",
     "c_sikki": " İstanbul ",
     "d_sikki": " Gaziantep",
     "cevap": "D"
    },
    {
     "soru": "6)Ömer Seyfettin’in İran şahına gönderilen Muhsin Çelebi adlı elçinin maceralarını anlattığı öyküsü hangisidir?",
     "a_sikki": "Diyet",
     "b_sikki": "Yalnız Efe",
     "c_sikki": "Beyaz Lale",
     "d_sikki": "Pembe İncili Kaftan",
     "cevap": "D"
    },
    {
     "soru": "7)Romen Rakamında Hangi Sayı Yoktur?",
     "a_sikki": 0,
     "b_sikki": 50,
     "c_sikki": 100,
     "d_sikki": 1000,
     "cevap": "A"
    },
    {
     "soru": "8)Bir Gün Kaç Saniyedir?",
     "a_sikki": 86000,
     "b_sikki": 88600,
     "c_sikki": 86400,
     "d_sikki": 84800,
     "cevap": "C"
    },
    {
     "soru": "9)Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir?",
     "a_sikki": " Mekke ",
     "b_sikki": " Kudüs ",
     "c_sikki": " Roma ",
     "d_sikki": " İstanbul",
     "cevap": "B"
    },
    {
     "soru": "10)Hangi İlimizde Demiryolu Yoktur?",
     "a_sikki": " Batman ",
     "b_sikki": " Kütahya ",
     "c_sikki": " Aydın ",
     "d_sikki": " Muğla",
     "cevap": "D"
    },
    {
     "soru": "11)Hangi Ülkenin İki Tane Başkenti Vardır?",
     "a_sikki": "Güney Afrika ",
     "b_sikki": "Senegal ",
     "c_sikki": "El Salvador ",
     "d_sikki": "Venezuela ",
     "cevap": "A"
    },
    {
     "soru": "12)Cevdet Bey ve Oğulları Eseri Kime Aittir?",
     "a_sikki": "Orhan Pamuk ",
     "b_sikki": "Yahya Kemal Bayatlı ",
     "c_sikki": "Atilla İlhan ",
     "d_sikki": "Samipaşazade Sezai ",
     "cevap": "A"
    },
    {
     "soru": "13)Bir Sebepten Dolayı Tek Kulağına Küpe Takan Osmanlı Padişahı Kimdir?",
     "a_sikki": "Kanuni Sultan Süleyman ",
     "b_sikki": "Yavuz Sultan Selim ",
     "c_sikki": "Orhan Bey ",
     "d_sikki": "Fatih Sultan Selim ",
     "cevap": "B"
    },
    {
     "soru": "14)Aşağıdaki Ülkelerden Hangisinin Nüfusu Daha Fazladır?",
     "a_sikki": "İspanya ",
     "b_sikki": "Fransa ",
     "c_sikki": "İngiltere ",
     "d_sikki": "Almanya ",
     "cevap": "D"
    },
    {
     "soru": "15) Aspirinin Hammaddesi Nedir?",
     "a_sikki": "Söğüt ",
     "b_sikki": "Köknar ",
     "c_sikki": "Kavak ",
     "d_sikki": "Meşe",
     "cevap": "A"
    },
    {
     "soru": "16) Labirentin Gölgesinde ve Sembollerin Gölgesinde adlı fantastik romanların yazarı kimdir?",
     "a_sikki": "Haldun Taner  ",
     "b_sikki": "Mehmet Rauf  ",
     "c_sikki": "Yaşar Kemal  ",
     "d_sikki": "Yahya Karakurt",
     "cevap": "D"
    }
   ]

   
alert("selamm")


// document.addEventListener ("click", function soruGetir(){});
function soru_getir(s_no) {
document.getElementsByClassName("soru-bilgisi").innerHTML = sorular.soru;
 document.getElementsByClassName("a-sikki").innerHTML=sorular[s_no].a-sikki;
 document.etElementsByClassName("b-sikki").innerHTML=sorular[s_no].b-sikki;
 document.etElementsByClassName("c-sikki").innerHTML=sorular[s_no].c-sikki;
 document.etElementsByClassName("d-sikki").innerHTML=sorular[s_no].d-sikki;
}
// function soruGetir(s_no);