### **Backend**
```bash
cd server
npm install
npm start       # or nodemon server.js

# Folder Structure
server/
├─ controllers/          # Handles business logic for each resource
├─ models/               # Mongoose models (ORM for MongoDB)
├─ routes/               # API routes mapping HTTP endpoints to controllers
├─ utils/                # Utility/helper functions
└─ server.js             # Entry point for the backend server

### **MongoDB Connection Notes**

This app uses MongoDB Atlas (cloud-hosted) for persistent storage.
Connection details are stored in the .env file