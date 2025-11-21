# Full-Stack TODO Application

This is a full-stack TODO application built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **React.js**. The application allows users to create, read, update, and delete TODO items with a clean frontend interface and a RESTful API backend.

## **Project Structure**

todo-app/
│
├─ client/ # React frontend
│ ├─ src/
│ └─ package.json
│
├─ server/ # Node.js backend
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ utils/
│ └─ server.js
│
└─ README.md



---

## **Technologies Used**

### Backend:
- Node.js
- Express.js
- MongoDB Atlas (or local MongoDB)
- Mongoose (Object Data Modeling library / ORM)
- Factory Design Pattern for controller structure
- RESTful API endpoints

### Frontend:
- React.js (functional components and hooks)
- Axios for HTTP requests
- CSS for styling

---

## **Key Features**

- Add, edit, delete TODO items
- Mark TODO items as done/undone
- Clean and simple UI
- Backend persists data in MongoDB
- RESTful API for CRUD operations
- Form validation for required fields
- Loading and error states handled gracefully
- Structured using best practices for maintainability

---

## **Future Enhancements**

- Smooth animations (fade-in, delete, done/undo transitions)
- Authentication / user-specific TODOs

---

## **Installation**

### **Backend**
```bash
cd server
npm install
npm start       # or nodemon server.js

### **Frontend**
cd client          # Navigate to React frontend
npm install        # Install dependencies
npm start          # Start development server
