// Daftar Khodam Tersedia
const Khodamlist = [
    "Khodam macan putih",
    "Khodam rice cooker",
    "Khodam DJ",
    "Khodam ular sungai",
    "Khodam mobile legend",
    "Khodam layang-layang",
    "Khodam Jin qorin",
    "Khodam Kunti Bogel",
    "Khodam tidak ada",
    "Khodam kipas angin",
    "Khodam tidur",
    "Khodam makan",
    "Khodam watu",
    "Khodam Setan Gundul",
    "Khodam Gunduruwo",
    "Khodam Air mata sungai",
    "Khodam Badut",
    "Khodam Balon",
    "Khodam kera berkaki tujuh",
    "khodam nenek moyang jin",
    "Khodam jin silver",
];

// Fungsi untuk memilih Khodam secara acak
function pilihKhodam(event) {
    event.preventDefault(); // Mencegah formulir untuk melakukan submit
    
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");

    // Kosongkan hasil sebelum menampilkan hasil baru
    resultDiv.textContent = "";

    if (nama) {
        const randomIndex = Math.floor(Math.random() * Khodamlist.length);
        const Khodamterpilih = Khodamlist[randomIndex];
        resultDiv.textContent = `Nama Anda adalah ${nama} dan khodam Anda adalah ${Khodamterpilih}.`;

        // Hapus hasil setelah 5 detik (5000 milidetik)
        setTimeout(() => {
            resultDiv.textContent = "";
        }, 5000);
        
    } else {
        resultDiv.textContent = "Nama Anda tidak boleh kosong.";
    }
}

// Menambahkan event listener ke form saat dokumen sudah dimuat
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("KhodamForm").addEventListener("submit", pilihKhodam); 
});
