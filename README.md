# 🛒 Subastart App

**Subastart App** is a web application for managing **online auctions** in a secure, transparent, and user-friendly way.  
Built with **Node.js** and **Express.js**, it includes dynamic views with **EJS**, a modular architecture, and a scalable design prepared for future integration with **MongoDB**.

---

## 📌 Features

- 🔐 User registration and authentication  
- 📦 Product and auction management  
- 💰 Real-time bidding system (planned with WebSockets + MongoDB)  
- 🎨 Dynamic views with **EJS** and static files served from **Public**  
- 🛠️ Modular architecture (routes, controllers, models)  
- 🌍 Scalable design ready for cloud deployment  

---

## 🏗️ Project Structure

```
Subastas/
│── src/
│   ├── controllers/   # Business logic
│   ├── models/        # Data models (future: MongoDB)
│   ├── routes/        # API and web routes
│   ├── views/         # EJS templates
│   ├── public/        # Static files (CSS, JS, images)
│   └── app.js         # Main Express app
│── .gitignore
│── package.json
│── README.md
```

---

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MateoJaimes/subastart-app.git
   cd subastart-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development**:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:  
   👉 `http://localhost:4000/`

---

## ⚙️ Tech Stack

- **Backend:** Node.js + Express.js  
- **Views:** EJS (Embedded JavaScript templates)  
- **Styling:** CSS (served from `public/`)  
- **Database:** MongoDB (planned)  
- **Dev Tools:** Nodemon, Morgan, Dotenv, Git  

---

## 📌 Roadmap

- [x] Project setup with Node.js and Express  
- [x] Views with EJS + Public folder for static files  
- [ ] User authentication (JWT / Passport.js)  
- [ ] Product and auction models in MongoDB  
- [ ] Real-time bidding with WebSockets  
- [ ] Deployment on AWS/Docker  

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss what you would like to change.  
Make sure to follow commit message conventions (e.g., **Conventional Commits**).

---

## 📄 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute this software under the terms of the license.

---

## 👨‍💻 Authors

- **Mateo Jaimes** – [GitHub Profile](https://github.com/MateoJaimes)
- **Andres Franco** – [GitHub Profile](https://github.com/PIPEFRANCO)
