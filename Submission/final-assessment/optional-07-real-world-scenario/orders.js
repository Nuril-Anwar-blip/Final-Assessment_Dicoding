// orders.js

// Fungsi untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data orders
let orders = [];

// Fungsi untuk menambah order
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
      id: generateUniqueId(),
      customerName,
      items,
      totalPrice,
      status: 'Menunggu'
  };
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status order
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
      order.status = status;
  }
}

// Fungsi untuk menghitung total revenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
      .filter(order => order.status === 'Selesai')
      .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus order
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };