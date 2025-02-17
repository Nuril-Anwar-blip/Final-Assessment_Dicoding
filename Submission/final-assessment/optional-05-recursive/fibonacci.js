/**
 * Fungsi untuk menghasilkan deret Fibonacci hingga elemen ke-n.
 * @param {number} n - Elemen ke-n dari deret Fibonacci
 * @returns {number[]} - Deret Fibonacci hingga elemen ke-n
 */
function fibonacci(n) {
    // Basis: jika n kurang dari atau sama dengan 0, kembalikan array kosong
    if (n <= 0) {
        return [];
    }
    // Basis: jika n adalah 1, kembalikan array dengan elemen pertama
    if (n === 1) {
        return [0];
    }
    // Basis: jika n adalah 2, kembalikan array dengan dua elemen pertama
    if (n === 2) {
        return [0, 1];
    }
    // Rekursi: gabungkan deret Fibonacci hingga (n - 1) dengan elemen baru
    const fib = fibonacci(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]); // Tambahkan elemen baru
    return fib;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
