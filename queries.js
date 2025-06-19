use('bookstore');

/* ----BOOKS---- */

// Всички книги
db.books.find();

// Книги по жанр
db.books.find({ genres: "Programming" });

// Книги по жанр и цена
db.books.find({ genres: "Fantasy", price: { $lt: 30 } });

// Актуализиране на наличност
db.books.updateOne({ title: "Dune" }, { $set: { stock: 20 } });

// Изтриване на книга по заглавие
db.books.deleteOne({ title: "1984" });

// Агрегиране: средна цена по жанр
db.books.aggregate([
  { $unwind: "$genres" },
  { $group: { _id: "$genres", avgPrice: { $avg: "$price" } } }
]);

// Функционалността на функциите за другите колекции е по същата логика брат ми

/* ----CUSTOMERS---- */

db.customers.find();

db.customers.find({ address: { city: "Sofia" } });

db.customers.find({ "preferences": "Fantasy", "address.city": "Sofia" });

db.customers.updateOne({ email: "ivan@example.com" }, { $set: { phone: "0899111000" } });

db.customers.deleteOne({ name: "Georgi Ivanov" });

db.customers.aggregate([
  { $unwind: "$preferences" },
  { $group: { _id: "$preferences", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

/* ----ORDERS---- */

db.orders.find();

db.orders.find({ status: "Delivered" });

db.orders.find({ status: "Pending", totalPrice: { $gt: 50 } });

db.orders.updateOne({ status: "Pending" }, { $set: { status: "Shipped" } });

db.orders.deleteOne({ status: "Cancelled" });

db.orders.aggregate([
  { $group: { _id: "$status", totalRevenue: { $sum: "$totalPrice" }, count: { $sum: 1 } } },
  { $sort: { totalRevenue: -1 } }
]);

/* ----EMPLOYEES---- */

db.employees.find();

db.employees.find({ role: "Seller" });

db.employees.find({ role: "Seller", salary: { $gt: 1200 } });

db.employees.updateOne({ name: "Georgi Georgiev" }, { $set: { salary: 1500 } });

db.employees.deleteOne({ name: "Plamen Dimitrov" });

db.employees.aggregate([
  { $group: { _id: "$role", avgSalary: { $avg: "$salary" }, count: { $sum: 1 } } },
  { $sort: { avgSalary: -1 } }
]);

/* ----PUBLISHERS---- */

db.publishers.find();

db.publishers.find({ location: "USA" });

db.publishers.find({ location: "UK", booksPublished: { $gt: 200 } });

db.publishers.updateOne({ name: "Packt Publishing" }, { $set: { booksPublished: 320 } });

db.publishers.deleteOne({ name: "Apress" });

db.publishers.aggregate([
  { $group: { _id: "$location", totalBooks: { $sum: "$booksPublished" }, count: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } }
]);