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

###  Clone the Repository & Backend Setup then Frontend Setup
```bash
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

3️⃣ Frontend Setup
cd frontend
npm install
npm start

Backend API:
http://localhost:5000/api
---

 🤖 My AI Usage
#AI Tools Used
ChatGPT (OpenAI)

How I Used AI

* Used ChatGPT to design backend API routes and MongoDB query structure.

* Used AI assistance to debug and improve search functionality using regex.

* Used ChatGPT to optimize pagination and filtering logic.

* Used AI to validate Git workflows and repository best practices.

* Used ChatGPT to structure this README and ensure compliance with project guidelines.


# Reflection
* AI significantly improved my development speed by helping with debugging, query optimization, and project structuring.
* All generated code and suggestions were manually reviewed, tested, and customized to meet project requirements.
* AI served as a productivity and learning assistant, not a replacement for understanding the code.
---

# Login Dashboard
<img width="821" height="381" alt="image" src="https://github.com/user-attachments/assets/6a31bbc5-62f2-4e0d-ab9b-86505fe577f9" />

# Register Dashboard
<img width="837" height="452" alt="image" src="https://github.com/user-attachments/assets/f50f3bd6-1b83-49df-a27d-d53d1a0cd338" />

# For Admin Dashboard -> They can edit, add,delete the sweets
<img width="1897" height="860" alt="image" src="https://github.com/user-attachments/assets/5e5e2956-1922-43ca-b643-551dd19eae5f" />

#For User Dashboard ->  They can only purchase
<img width="1882" height="791" alt="image" src="https://github.com/user-attachments/assets/ec508519-3855-4df4-bbbc-25d66e7049fd" />





