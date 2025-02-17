/**
 * Fungsi untuk mengitung faktorial dari sebuah bilangan bulat positif.
 * @param {number} n Bilangan bulat positif.
 * @param {number} - Faktorial dari n
 */
function factorial(n) {
    // Basis: faktorial dari 0 atau 1 adalah 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Rekursi: n * faktorial dari (n - 1)
    return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
