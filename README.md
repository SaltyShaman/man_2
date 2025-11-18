# 📖 Project Description

This project is a **login system** implemented with **Node.js** for the backend and **Svelte** for the frontend.  
It focuses on:

- Secure user authentication with sessions  
- Password hashing  
- Rate limiting and security middleware  
- Separation of concerns between backend and frontend  

The goal is to provide a modern, secure, and maintainable structure for learning and demonstration purposes.

**MVP:** Make a login system with a predefined username and password.

---

# 🗂 Project Structure

man_2/ (root folder)
├─ backend/
│ ├─ app.js
│ └─ routers/
│ ├─ authRouter.js
│ └─ middlewareRouter.js
├─ package.json
├─ .env
└─ .gitignore

# 🛠️ Technology Stack

## Backend
- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **express-session** – Session management  
- **bcryptjs** – Password hashing  
- **express-rate-limit** – Request limiting / brute-force protection  
- **helmet** – Security HTTP headers  
- **dotenv** – Environment variable management  

## Frontend
- **Svelte** – Modern frontend framework  
- **Vite** – Frontend build tool  
- **Svelte stores** – State management  

## Database
- TBD (to be integrated in future steps) – could be **MySQL**, **PostgreSQL**, or **SQLite**

## Security Features
- Session validation for logged-in users  
- Password hashing with bcrypt  
- Rate limiting to protect login endpoints  
- Helmet for security headers


