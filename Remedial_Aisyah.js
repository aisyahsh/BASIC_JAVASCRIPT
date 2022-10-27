//Nomor 9: For, While, Do... While

/* berikut adalah perulangan For 
yang termasuk ke dalam counted loop 
karena sudah jelas berapa kali dia akan mengulang */

for (var i = 0; i <= 12; i++) {
  console.log("Treasure");
}

// Saya ingin membuat 12 kalimat Treasure, untuk memudahkan, saya membuatnya dengan perulangan For

/* Berikut adalah perulangan while
yang tetap melakukan perulangan walaupun
belum diketahui jumlahnya */

console.log("Banyak penggemar yang datang");
var j = 1;
while (j <= 60) {
  console.log(j);
  j += 1;
}

/* Sebuah grup idola mengadakan konser tertutup untuk merayakan hari jadi mereka, 
mereka ingin menghitung jumlah penggemar yang datang dengan menggunakan perulangan while */

/* Berikut adalah perintah Do... While yang digunakan
untuk mengulang statement 1 kali lebih dulu, kemudian akan
mengecek statemnt while apakah bernilai benar. Jika benar 
maka akan diulang kembali */

var o = 1;
do {
  console.log("Kue ke-" + o);
  o++;
} while (o <= 15);

// Seorang penjual kue ingin menghitung berapa banyak jumlah kue yang ia buat, dengan menggunakan Do... While
