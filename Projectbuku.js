class Perpustakaan {
  constructor() {
    this.buku = [];
  }

  tambah(judul, penulis, tahunTerbit, genre) {
    const bukuBaru = {
      id: this.buku.length + 1,
      judul,
      penulis,
      tahunTerbit,
      genre,
    };
    this.buku.push(bukuBaru);
    console.log(`Buku "${judul}" berhasil ditambahkan.`);
  }

  edit(id, judul, penulis, tahunTerbit, genre) {
    const buku = this.buku.find((b) => b.id === id);
    if (buku) {
      buku.judul = judul || buku.judul;
      buku.penulis = penulis || buku.penulis;
      buku.tahunTerbit = tahunTerbit || buku.tahunTerbit;
      buku.genre = genre || buku.genre;
      console.log(`Buku dengan ID ${id} berhasil diedit.`);
    } else {
      console.log(`Buku dengan ID ${id} tidak ditemukan.`);
    }
  }

  hapus(id) {
    const index = this.buku.findIndex((b) => b.id === id);
    if (index !== -1) {
      const [bukuHapus] = this.buku.splice(index, 1);
      console.log(`Buku "${bukuHapus.judul}" berhasil dihapus.`);
    } else {
      console.log(`Buku dengan ID ${id} tidak ditemukan.`);
    }
  }

  semuaBuku() {
    if (this.buku.length === 0) {
      console.log("Tidak ada buku yang tersedia.");
      return;
    }
    console.log("Daftar Buku Perpustakaan:");
    this.buku.forEach((b) => {
      console.log(
        `ID: ${b.id}, Judul: "${b.judul}", Penulis: ${b.penulis}, Tahun Terbit: ${b.tahunTerbit}, Genre: ${b.genre}`
      );
    });
  }
}

const perpustakaan = new Perpustakaan();
perpustakaan.tambah("Starbacx", "starbacx", 9627, "Hentai");
perpustakaan.tambah("ReyDinoo", "Putracimong", 1922, "Mahnwa");
perpustakaan.tambah("Portalmenujukehangatan", "keluar", 2009, "funry");
perpustakaan.semuaBuku();
perpustakaan.edit(1, "Portalmenujukehangatan");
perpustakaan.semuaBuku();
perpustakaan.hapus(1);
perpustakaan.semuaBuku();
