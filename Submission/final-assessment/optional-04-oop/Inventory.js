/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor() {
        this.item = []; //Array untuk menyimpan barang
    }

    // Method untuk menambahkan barang ke inventory
    addItem(item) {
        this.item.push(item);
    }

    // Method untuk menghapus barang ke inventory
    removeItem(id) {
        this.item = this.item.filter(item => item.id !== id);
    }

    // Method untuk menampilkan daftar barang
    listItems() {
        return this.item.map(item => item.displayDetails()).join('\n');
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
