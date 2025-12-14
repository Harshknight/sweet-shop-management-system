# sweet-shop-management-system

# 🍬 Sweet Shop Management System

A full-stack Sweet Shop Management System that allows admins to manage sweets inventory and users to browse, search, filter, and purchase sweets.  
The application is built using the **MERN stack** with secure authentication, role-based access, and optimized search functionality.

---

## 🚀 Features

### 👤 User Features
- User authentication (JWT-based)
- View all available sweets
- Search sweets by name or category (case-insensitive)
- Filter sweets by category and stock availability
- Pagination for better browsing experience
- Purchase sweets (quantity auto-updated)

### 🛠️ Admin Features
- Add new sweets
- Update sweet details
- Delete sweets
- Restock sweets
- Role-based access control (Admin only routes)

---

## 🧱 Tech Stack

### Frontend
- React
- Material UI (MUI)
- Axios
- Context API for authentication

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 📁 Project Structure

<img width="336" height="602" alt="image" src="https://github.com/user-attachments/assets/6fd86348-bb21-43db-b940-d15fedc5eeb2" />


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository & Backend Setup then Frontend Setup
```bash
# Clone the repository
git clone https://github.com/Harshknight/sweet-shop-management-system.git
cd sweet-shop-management-system

###  Backend setup
mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv jsonwebtoken bcryptjs
npm install nodemon --save-dev

# Create .env file
echo "MONGO_URI=your_mongodb_connection_string" >> .env
echo "JWT_SECRET=your_secret_key" >> .env
echo "PORT=5000" >> .env

# Run backend server
npx nodemon src/server.js



Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend will run at:

http://localhost:3000


Backend API:

http://localhost:5000/api
---

### 🤖 My AI Usage
##AI Tools Used

ChatGPT (OpenAI)

How I Used AI

Used ChatGPT to design backend API routes and MongoDB query structure.

Used AI assistance to debug and improve search functionality using regex.

Used ChatGPT to optimize pagination and filtering logic.

Used AI to validate Git workflows and repository best practices.

Used ChatGPT to structure this README and ensure compliance with project guidelines.

Reflection

AI significantly improved my development speed by helping with debugging, query optimization, and project structuring.
All generated code and suggestions were manually reviewed, tested, and customized to meet project requirements.
AI served as a productivity and learning assistant, not a replacement for understanding the code.

---

## ✅ Next Steps (IMPORTANT)

After adding this README:

```bash
git add README.md
git commit -m "docs: add project README and AI usage disclosure

Used ChatGPT to structure documentation and ensure AI usage compliance.

Co-authored-by: ChatGPT <ai@users.noreply.github.com>"
git push origin main



