use('bookstore');

db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genres: ["Programming", "Software Engineering"],
    price: 35.99,
    stock: 12,
    publisher: { name: "Prentice Hall", location: "USA" }
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genres: ["Programming"],
    price: 42.5,
    stock: 5,
    publisher: { name: "Addison-Wesley", location: "UK" }
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genres: ["Self-help", "Productivity"],
    price: 28.0,
    stock: 20,
    publisher: { name: "Avery", location: "USA" }
  },
  {
    title: "1984",
    author: "George Orwell",
    genres: ["Dystopian", "Fiction"],
    price: 15.0,
    stock: 30,
    publisher: { name: "Secker & Warburg", location: "UK" }
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genres: ["Science Fiction"],
    price: 22.5,
    stock: 8,
    publisher: { name: "Chilton Books", location: "USA" }
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genres: ["Psychology", "Economics"],
    price: 19.99,
    stock: 14,
    publisher: { name: "Farrar, Straus and Giroux", location: "USA" }
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genres: ["Fiction"],
    price: 18.0,
    stock: 9,
    publisher: { name: "J.B. Lippincott & Co.", location: "USA" }
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genres: ["Business"],
    price: 32.5,
    stock: 6,
    publisher: { name: "Crown Publishing", location: "USA" }
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genres: ["Fantasy"],
    price: 25.0,
    stock: 15,
    publisher: { name: "George Allen & Unwin", location: "UK" }
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genres: ["History"],
    price: 30.0,
    stock: 10,
    publisher: { name: "Harvill Secker", location: "UK" }
  }
]);

db.customers.insertMany([
  {
    name: "Ivan Petrov",
    email: "ivan@example.com",
    phone: "0888123456",
    address: { city: "Sofia", street: "Vitosha 25" },
    preferences: ["Programming", "Fantasy"]
  },
  {
    name: "Maria Georgieva",
    email: "maria@example.com",
    phone: "0888777666",
    address: { city: "Plovdiv", street: "Centralna 10" },
    preferences: ["Romance", "Fiction"]
  },
  {
    name: "Georgi Ivanov",
    email: "georgi@example.com",
    phone: "0888123123",
    address: { city: "Varna", street: "Maritsa 8" },
    preferences: ["Business", "Science Fiction"]
  },
  {
    name: "Nikolay Petrov",
    email: "nikolay@example.com",
    phone: "0899111222",
    address: { city: "Sofia", street: "Dondukov 1" },
    preferences: ["History"]
  },
  {
    name: "Desislava Todorova",
    email: "desi@example.com",
    phone: "0877333444",
    address: { city: "Ruse", street: "Aleksandrovska 99" },
    preferences: ["Fiction", "Fantasy"]
  },
  {
    name: "Todor Ivanov",
    email: "todor@example.com",
    phone: "0888333555",
    address: { city: "Burgas", street: "Lazur 1" },
    preferences: ["Programming"]
  },
  {
    name: "Rosen Stoyanov",
    email: "rosen@example.com",
    phone: "0899111333",
    address: { city: "Stara Zagora", street: "Trakia 33" },
    preferences: ["Self-help"]
  },
  {
    name: "Elena Dimitrova",
    email: "elena@example.com",
    phone: "0888555666",
    address: { city: "Sofia", street: "Graf Ignatiev 55" },
    preferences: ["Romance"]
  },
  {
    name: "Petya Koleva",
    email: "petya@example.com",
    phone: "0877444555",
    address: { city: "Veliko Tarnovo", street: "Tsarevets 77" },
    preferences: ["Science Fiction", "Fantasy"]
  },
  {
    name: "Dimitar Nikolov",
    email: "dimitar@example.com",
    phone: "0888999000",
    address: { city: "Blagoevgrad", street: "G.S. Rakovski 12" },
    preferences: ["Economics"]
  }
]);

db.orders.insertMany([
  {
    customerId: ObjectId(),
    bookIds: [ObjectId(), ObjectId()],
    totalPrice: 70,
    status: "Pending",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 30,
    status: "Shipped",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 45,
    status: "Delivered",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 25,
    status: "Cancelled",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId(), ObjectId()],
    totalPrice: 60,
    status: "Pending",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 40,
    status: "Pending",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 32,
    status: "Delivered",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 29,
    status: "Shipped",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 50,
    status: "Pending",
    createdAt: new Date()
  },
  {
    customerId: ObjectId(),
    bookIds: [ObjectId()],
    totalPrice: 90,
    status: "Delivered",
    createdAt: new Date()
  }
]);

db.employees.insertMany([
  {
    name: "Anna Popova",
    role: "Manager",
    salary: 2200,
    hireDate: new Date("2021-03-10"),
    contact: { email: "anna@bookstore.bg", phone: "0888111222" }
  },
  {
    name: "Georgi Georgiev",
    role: "Cashier",
    salary: 1300,
    hireDate: new Date("2022-05-01"),
    contact: { email: "georgi@bookstore.bg", phone: "0888222333" }
  },
  {
    name: "Ivanka Stoyanova",
    role: "Seller",
    salary: 1200,
    hireDate: new Date("2023-01-15"),
    contact: { email: "ivanka@bookstore.bg", phone: "0888333444" }
  },
  {
    name: "Plamen Dimitrov",
    role: "Security",
    salary: 1100,
    hireDate: new Date("2021-08-20"),
    contact: { email: "plamen@bookstore.bg", phone: "0888444555" }
  },
  {
    name: "Milena Petrova",
    role: "Accountant",
    salary: 2000,
    hireDate: new Date("2020-11-01"),
    contact: { email: "milena@bookstore.bg", phone: "0888555666" }
  },
  {
    name: "Todor Todorov",
    role: "Cleaner",
    salary: 950,
    hireDate: new Date("2022-12-01"),
    contact: { email: "todor@bookstore.bg", phone: "0888666777" }
  },
  {
    name: "Stoyan Ivanov",
    role: "Stock Manager",
    salary: 1600,
    hireDate: new Date("2023-06-01"),
    contact: { email: "stoyan@bookstore.bg", phone: "0888777888" }
  },
  {
    name: "Emil Nikolov",
    role: "IT Support",
    salary: 2100,
    hireDate: new Date("2021-09-01"),
    contact: { email: "emil@bookstore.bg", phone: "0888888999" }
  },
  {
    name: "Svetla Yordanova",
    role: "Seller",
    salary: 1250,
    hireDate: new Date("2022-04-20"),
    contact: { email: "svetla@bookstore.bg", phone: "0888999000" }
  },
  {
    name: "Martin Kolev",
    role: "Delivery",
    salary: 1350,
    hireDate: new Date("2023-03-10"),
    contact: { email: "martin@bookstore.bg", phone: "0888111000" }
  }
]);

db.publishers.insertMany([
  { name: "O'Reilly Media", founded: 1980, location: "USA", booksPublished: 350 },
  { name: "Addison-Wesley", founded: 1942, location: "UK", booksPublished: 250 },
  { name: "Manning", founded: 1990, location: "USA", booksPublished: 150 },
  { name: "Packt Publishing", founded: 2004, location: "UK", booksPublished: 300 },
  { name: "No Starch Press", founded: 1994, location: "USA", booksPublished: 180 },
  { name: "Apress", founded: 1999, location: "USA", booksPublished: 200 },
  { name: "Springer", founded: 1842, location: "Germany", booksPublished: 1000 },
  { name: "Pearson", founded: 1844, location: "UK", booksPublished: 500 },
  { name: "Cambridge University Press", founded: 1534, location: "UK", booksPublished: 1200 },
  { name: "MIT Press", founded: 1962, location: "USA", booksPublished: 400 }
]);