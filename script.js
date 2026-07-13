document.addEventListener('DOMContentLoaded', function() {
    const bookElement = document.getElementById('book');
    const totalHalaman = 149; // Lo cukup ganti angka ini kalau halamannya nambah
    
    // 1. GENERATE HALAMAN OTOMATIS
    // JavaScript bakal bikin elemen div dan masukin gambar hal1.jpg sampai hal149.jpg
    for (let i = 1; i <= totalHalaman; i++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'my-page'; // Ngikutin style CSS kita
        
        const img = document.createElement('img');
        img.src = `gambar/hal${i}.jpg`; // Pastiin nama filenya bener dan ada di folder 'gambar'
        
        pageDiv.appendChild(img);
        bookElement.appendChild(pageDiv);
    }

    // 2. AKTIFIN EFEK BUKU MELENGKUNG (StPageFlip)
    const pageFlip = new St.PageFlip(bookElement, {
        width: 420, 
        height: 600, 
        size: "stretch", // <--- GANTI "fixed" JADI "stretch"
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5, 
        showCover: true, 
        usePortrait: true // <--- Ini yang bikin di HP otomatis jadi 1 halaman doang
    });

    // Perintah buat me-load 149 halaman yang udah kita generate di atas
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

    // 3. FUNGSI TOMBOL NAVIGASI
    document.getElementById('nextBtn').addEventListener('click', () => {
        pageFlip.flipNext(); // Perintah otomatis dari library buat buka halaman selanjutnya
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        pageFlip.flipPrev(); // Perintah otomatis buat balik halaman
    });
});