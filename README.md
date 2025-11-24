# 📖 Project Description

This project is a **login system** implemented with **Node.js** for the backend and **Svelte** for the frontend.  
It focuses on:

- Secure user authentication with sessions  
- Password hashing  
- Rate limiting and security middleware  
- Seperation what should be in the frontend and the backend folders. Web sockets are not yet taught in classes as of November 24 2025.

**MVP:** Make a login system with a predefined username and password.

---

# 🗂 Project Structure

```

man_2/ (root folder)
├─ backend/
│ ├─ package.json
│ ├─ package-lock.json
│ ├─ .env
│ ├─ app.js
│ ├─ users.db (in gitignore)
│ └─ routers/
│ ├─ authRouter.js
│ └─ middlewareRouter.js
│ └─ config/
│ ├─ rateLimiters.js
│ ├─ sessionConfig.js
│ └─ controllers/
│ ├─ authController.js
│ └─ database/
│ ├─ connection.js
│ ├─ createDatabase.js
│ └─ middleware/
│ ├─ notFoundHandler.js
│ ├─ requireLogin.js

├─ frontend/ 
│ ├─ svelte.config.js
│ ├─ vite.config.js
│ ├─ .npmrc
│ └─ src/
│ └─ lib/
│ ├─ layout.server.js
│ └─ protected/
│ ├─ +page.svelte
│ └─ login/
│ ├─ +page.svelte
└─ .gitignore



```


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
-*SQLite*

## Security Features
- Session validation for logged-in users  
- Password hashing with bcrypt  
- Rate limiting to protect login endpoints  
- Helmet for security headers

## Wishlist for future devolpment
- Better validation in browser. Stricter control with diffrent browser tabs
- Logout needs to require login or throw a redirect and an error message
- Proper role implementation. Examle: admin routes, staff routes and enduser routers
- A way to call the localized URL followed by endpoint. Example: deployment.com/auth is simply refered to as baseurl/auth in the frontend API call
