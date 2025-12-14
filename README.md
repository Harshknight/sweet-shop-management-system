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

# Clone the repository
git clone https://github.com/Harshknight/sweet-shop-management-system.git
cd sweet-shop-management-system


#  Backend setup
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



# Create a .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Run backend:
npm start

# Frontend Setup
cd frontend
npm install
npm start

Backend API:
http://localhost:5000/api
---

# Image 

# Login User
<img width="790" height="342" alt="image" src="https://github.com/user-attachments/assets/1ed4275c-ca32-434c-b210-dc50308e5a01" />


# Register User
<img width="837" height="452" alt="image" src="https://github.com/user-attachments/assets/763407ea-8e62-4313-a086-c6151cd233ab" />

# Admin Login - They can edit, delete , add , update the data
<img width="1862" height="767" alt="image" src="https://github.com/user-attachments/assets/c9733876-05b1-4d16-bd39-7407867f07f9" />

# User Login - They can Purchase the product
<img width="1868" height="723" alt="image" src="https://github.com/user-attachments/assets/475580fe-9d3d-4ccf-8543-3b66afc200c8" />

# 🤖 My AI Usage AI Tools Used ChatGPT (OpenAI) 
How I Used AI Designed backend API routes and MongoDB query logic 
Debugged and improved search functionality using regex Optimized pagination and filtering logic 
Validated Git workflows and repository best practices Structured this README to ensure clarity and AI usage compliance 

# Reflection 
AI significantly improved development speed by assisting with debugging, optimization, and documentation. 
All AI-generated suggestions were manually reviewed, tested, and adapted to fit project requirements. 
AI was used as a productivity and learning aid, not as a replacement for core development understanding.



