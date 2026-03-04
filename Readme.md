# 🧠 Personal Finance Management System (BackEnd)

A backend API for a personal finance management application — built with **Node.js**, **Express**, and **MongoDB** — that handles user authentication, income tracking, expense management, analytics, and financial goals.


### 🌐 Frontend Repository: [FontEnd](https://github.com/ShashinduMalshan/Personal-Finance-Management-System-FontEnd.git)
---

## 🛠️ Technologies Used

* **Node.js** – JavaScript runtime for server
* **Express.js** – Backend API framework
* **MongoDB** – NoSQL document database
* **Mongoose** – Object Data Modeling (ODM) for MongoDB
* **JWT (jsonwebtoken)** – Secure authentication
* **dotenv** – Environment variable management
* **nodemon** – Development utility for auto‑restarting server

---

## 🚀 Features

✔ User registration & login with JWT
✔ Securely hashed passwords
✔ CRUD for incomes and expenses
✔ Analytics summaries (e.g., monthly totals)
✔ Goal tracking (saving goals / targets)
✔ Organized REST API structure

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/ShashinduMalshan/Personal-Finance-Management-System-BackEnd.git
cd Personal-Finance-Management-System-BackEnd
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Start the server (development)**

```bash
npm run dev
```

---

## 🔐 Environment Variables

Your `.env` should include:

| Variable     | Purpose                           |
| ------------ | --------------------------------- |
| `PORT`       | Port number the server listens on |
| `MONGO_URI`  | MongoDB connection string         |
| `JWT_SECRET` | Secret key for signing JWT tokens |

---

## 📡 API Endpoints

> All protected routes require an `Authorization: Bearer <TOKEN>` header.

### **Authentication**

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| POST   | `/api/auth/register` | Register a new user           |
| POST   | `/api/auth/login`    | Login and receive a JWT token |

### **Income**

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/api/income`     | Get all incomes     |
| POST   | `/api/income`     | Create a new income |
| PUT    | `/api/income/:id` | Update an income    |
| DELETE | `/api/income/:id` | Delete an income    |

### **Expenses**

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/expenses`     | Get all expenses  |
| POST   | `/api/expenses`     | Add new expense   |
| PUT    | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

### **Goals**

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/goals`     | Get all goals     |
| POST   | `/api/goals`     | Create a new goal |
| PUT    | `/api/goals/:id` | Modify a goal     |
| DELETE | `/api/goals/:id` | Remove a goal     |

> Note: The actual names of your routes may differ based on your implementation. Adjust the paths if your backend uses different route prefixes.

---

## 📈 Example Usage (with JWT)

After logging in:

```http
Authorization: Bearer <YOUR_JWT_TOKEN>
```

Use this token in your frontend requests to access protected routes.

---

## 🧪 Testing

You can test these endpoints easily with tools like:

* **Postman**
* **Insomnia**
* **Hoppscotch**

---

## 🧩 Folder Structure (Example)

```
📦Personal-Finance-Management-System-BackEnd
 ┣ 📂src
 ┃ ┣ 📂controllers
 ┃ ┣ 📂models
 ┃ ┣ 📂routes
 ┃ ┣ app.js
 ┃ ┗ server.js
 ┣ .env
 ┣ package.json
 ┣ README.md
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📝 License

This project uses an open‑source license (e.g., MIT). Customize this according to your choice.

---

## 📌 About

This backend powers a personal finance system that helps track income, expenses, and goals — perfect to pair with a React or mobile frontend.

---](https://github.com/ShashinduMalshan/Personal-Finance-Management-System-FontEnd.git)
