# 📝 TaskTrek

**TaskTrek** is a full-stack Todo List web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to create, complete, and delete tasks in a clean, modern interface.

---

## 🚀 Features

- ✅ Create new tasks
- 🔁 Mark tasks as complete/incomplete
- 🗑️ Delete tasks
- 🌐 Data stored in MongoDB Atlas
- ⚡ Live updates with React state
- 💅 Styled with Tailwind CSS
- 🖼️ Icons via lucide-react

---

## 🖥️ Tech Stack

| Frontend        | Backend       | Database       |
|-----------------|---------------|----------------|
| React (Vite)    | Express.js    | MongoDB Atlas  |
| Tailwind CSS    | Node.js       | Mongoose ODM   |
| Axios           | REST API      |                |

---

## 📁 Project Structure

```
TaskTrek/
├── client/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
├── server/         # Express backend
│   ├── Models/
│   │   └── Todo.js
│   ├── index.js
├── .env            # MongoDB connection string
├── README.md
```

---

## ⚙️ Getting Started

### 📦 Install Dependencies

```bash
# In root/server/
npm install

# In root/client/
npm install
```

### 🔌 Connect to MongoDB

Create a `.env` file in `/server`:

```
MONGO_URI=your_mongodb_connection_string_here
```

> Tip: encode special characters in password (e.g. `!` → `%21`)

### ▶️ Run the App

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```

---

## 📸 Screenshots

| Todo List View |
|----------------|
| ![screenshot](https://via.placeholder.com/600x300?text=TaskTrek+UI) |

---

## ✨ Credits

Created by [@celineWang14](https://github.com/celineWang14)  
Icons by [lucide.dev](https://lucide.dev)

---

## 📜 License

This project is licensed under the MIT License.
```

---

Let me know if you want help customizing the screenshot/GIF part or adding your live demo link!
