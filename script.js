// Komentar 

// Aktivitas 1 : Setup Berkas & Integrasi Javascript (script.js)
// mencetak sebuah nilai = console.log("Teks")

console.log("=== Kalkukaltor Nilai Rapor Kelas ===");
console.log("Javascript Terhubung!");

// Variabel "const" = Konstanta sifatnya Tetap dan tidak bisa diubah

const NAMA_KAMPUS = "UPI PWK"; // Nama Kampus x tidak bisa diubah karena constanta
const MATA_KULIAH = ["Promnet", "Jarkom", "SCM"]; // sama tidak bisa diubah juga

// Variabel Let = "let" digunakan untuk nilai yang bisa berubah sewaktu-waktu
let NAMA_GURU = "Pak Zamzam"; // Nama Guru Berubah untuk guru yang mengajar 
let KELAS_PRAKTIKUM = "LAB B"; // Nama kelas yang kita pakai juga bisa berubah 

// Cetak nilai nilai dari variabel let dan variabel const 
// Operator + digunakan untuk menggabngkan teks string

console.log("Kampus : " + NAMA_KAMPUS); // Tampilkan Nama Kampus
console.log("Kelas : " + KELAS_PRAKTIKUM); // Tampilkan Nama Kelas
console.log("Guru : " + NAMA_GURU); // Tampilkan Nama Guru

// DEMO  Perbedaan variabel const dan let 

NAMA_GURU = "Pak Adelio"; // NAMA_GURU variabel let'
console.log("Guru Baru (Setelah diubah dengan variabel let): " + NAMA_GURU);

// Menggunakan Variabel Const
// NAMA_KAMPUS = "UPI BUMSIL"; // Akan Terjadi ERROR Uncaught Typeerror


// Input Interaktif 
// alert ini berfungsi sebagai penampil dialog pop up
alert("Selamat Datang di Aplikasi Kalkulator Nilai Rapor! ");

let NAMA_MAHASISWA = prompt("Halo! Masukan Nama Kamu Untuk Memulai : ");

// Conditional Statement IF, ELSE IF, ELSE
// Tulis "if (NAMA_MAHASISWA)"
// Maksud nya adalah "Jika NAMA_MAHASISWA ada isinya " jalankan blok diatas
// "else" : Jika tidak sesuai tidak memenuhi atau kosong jalankan blok bawah 

if (NAMA_MAHASISWA) {
    // Jika User Mengisi Nama :
    alert("Halo, " + NAMA_MAHASISWA + "! Yuk kita hitung nilai rapor kamu.");
    console.log("Siswa yang aktif: " + NAMA_MAHASISWA);
} else {
    // Jika User tidak mengisi nama (kosong) maka ia dipanggil anonim
    alert("Kamu tidak memasukkan nama. Kamu dipanggil Mahasiswa Anonymous");
    NAMA_MAHASISWA = "Siswa Anonim"; 
    console.log("Siswa yang aktif: " + NAMA_MAHASISWA);
}

// Operasi Aritmatika - Hitung Nilai Rata - Rata
// Bisa Diubah Sewaktu waktu untuk nilainya
let NILAI_PROMNET = 90;
let NILAI_JARKOM = 90;
let NILAI_SCM = 90;

// Jumlahkan Nilai 
let JUMLAH_NILAI = NILAI_PROMNET + NILAI_JARKOM + NILAI_SCM;

// Bagi hasil penjumlahan dibagi 3
let NILAI_RATARATA = JUMLAH_NILAI / 3;

// Cetak nilai nya / output 
console.log("NILAI " + NAMA_MAHASISWA + "CANTIK");
console.log("PROMNET  : " + NILAI_PROMNET);
console.log("JARKOM  : " + NILAI_JARKOM);
console.log("SCM  : " + NILAI_SCM);

// Tampilkan Jumlah Nilai
console.log("Jumlah Nilai kamu Adalah " + JUMLAH_NILAI);

// Tampilkan Nilai Rata - Rata
console.log("Nilai Rata Rata Adalah " + NILAI_RATARATA);

// Percabangan IF ELSEUntuk menentukan predikat = A, B, C, D

// Buat Variabel Kosong -> String kosong
let PREDIKAT = ""; // Akan diisi Grade / Predikat A, B, C, D
let KETERANGAN = ""; // Disii Keterangan A -> Sangat Baik


// Percabangan / Conditional Statement ELSE IF

if (NILAI_RATARATA >= 90) {
    // Kondisi yang pertama kal di cek : Apakah nilai nya memenuhi 
    PREDIKAT = "A";
    KETERANGAN = "SANGAT BAIK!!";
} else if (NILAI_RATARATA >= 80) {
    // Kondisi Kedua jika kondisi pertama itu tidak terpenuhi 
    PREDIKAT = "B";
    KETERANGAN = "BAIK";
} else if (NILAI_RATARATA >= 70) {
    // Kondisi Ke Tiga Jika kondisi kedua itu tidak terpenuhi
    PREDIKAT = "C";
    KETERANGAN = "CUKUP";
} else {
    // Jika semua kondisi diatas tidak terpenuhi (RATA RATA nya < 70)
    PREDIKAT = "D";
    KETERANGAN = "PERLU PERBAIKAN SEMANGAT!";
}


// Tampilkan Nilai Percabangan IF ELSE IF

console.log("Predikat  : " + PREDIKAT+"-" + KETERANGAN);

// Tampilkan pop up alert

alert(
    "HASIL RAPOR " + NAMA_MAHASISWA + ":\n" +
    "RATA-RATA "  + NILAI_RATARATA + ":\n" +
    "PREDIKAT " + PREDIKAT +" (" + KETERANGAN + ")"
);


// FUNCTION Cara membungkus  sekumpulan kode menjadi satu blok
// Yang bisa dipanggil kapan saja dengan nama FUNCTION NYA
// Struktur nya : fungction PENJUMLAHAN (nilai1 + nilai2 + nilai3)

function HITUNG_RATARATA(n1, n2, n3) {
    let JUMLAH = n1 + n2 + n3;
    return JUMLAH / 3;
}


function TENTUKAN_PREDIKAT(RATA) {
    //Setiap baris "if" untuk menentukan predikat 
    if (RATA >= 90) return "A - SANGAT BAIK";
    if (RATA >= 80) return "B - BAIK";
    if (RATA >= 70) return "C - CUKUP";
    return " D - PERLU PERBAIKAN";
}

// Buat Variabel dulu
// Rata-Rata
let MAHASISWA_A = HITUNG_RATARATA(88, 92, 85); 
// Predikat 
let MAHASISWA_A_PREDIKAT = TENTUKAN_PREDIKAT(MAHASISWA_A);

// Cetak Tampilkan Konsole 

console.log("Rata - Rata Nilai MAHASISWA A ADALAH " + MAHASISWA_A);
console.log("Predikatnya adalah" + MAHASISWA_A_PREDIKAT);

// ARRAY dan LOOPING RAJA TERAKHIR

// KOTAK PENYIMPANAN YANG DIISI NILAI
// DITULIS DENGAN [...]
// NOTES INDEX OF ARRAY DIMULAI DARI 0 

// Contoh Array Menampilakn Daftar Mahasiswa
let DAFTAR_MAHASISWA = [
    "ADELIO RAFA", // Posisi ke - 0 index ke 0
    "ZAM-ZAM", // Posisi ke - 1 index ke 1
    "ABEY", // Posisi ke - 2 index ke 2 
    "SAPTA", // Posisi ke - 3 index ke 3
    "ZAHRA" // Posisi Ke - 4 index ke 4
    // Total Panjang Array adalah 5
];

// Cetak ARRAY
console.log("=== Daftar Mahasiswa Kelas A " + KELAS_PRAKTIKUM + "===");

// Looping for 

for (let i = 0; i < DAFTAR_MAHASISWA.length; i++) {
    console.log((i + 1) + "." + DAFTAR_MAHASISWA[i]);
}

// .length 
console.log("TOTAL MAHASISWA : " + DAFTAR_MAHASISWA.length + "Orang");
console.log("Praktikum Selesai War is Over");