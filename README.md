# 🌍 WanderLust

A full-stack Airbnb-inspired web application where users can discover, create, edit, review, and manage travel listings. The application provides secure authentication, image uploads, interactive maps, and a responsive user interface.

## 🚀 Live Demo

https://wanderlust-project-wwg5.onrender.com/listings

## ScreenShots 
<img width="1912" height="960" alt="image" src="https://github.com/user-attachments/assets/98717767-18e2-4419-a17a-dfd62237bfd7" />
<img width="1918" height="962" alt="image" src="https://github.com/user-attachments/assets/252ec8fb-6b09-4e80-a4fa-27d9d1764de0" />
<img width="1913" height="963" alt="image" src="https://github.com/user-attachments/assets/0ca9f80a-cd1f-45ea-9d37-62eec3ade4c7" />
<img width="1911" height="946" alt="image" src="https://github.com/user-attachments/assets/c0e06c5c-ba27-45b8-ac77-22d21a0cda4e" />
<img width="1897" height="948" alt="image" src="https://github.com/user-attachments/assets/59f0991f-79df-421f-b269-18c13f97190a" />
<img width="1903" height="963" alt="image" src="https://github.com/user-attachments/assets/e977f53c-da1f-47d8-9272-7bb2b409ace0" />
<img width="1912" height="960" alt="image" src="https://github.com/user-attachments/assets/9168de0c-b821-4fd5-9f18-7a3a513c93e5" />









## ✨ Features

- User Authentication (Signup/Login/Logout)
- Authorization for Listings & Reviews
- Create, Edit & Delete Listings
- Upload Images using Cloudinary
- Interactive Maps with Leaflet
- MongoDB Atlas Database
- Reviews & Ratings
- Flash Messages
- Server-side Validation
- Responsive UI
- Secure Session Management

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap
- EJS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- Passport.js
- Passport Local

### Cloud Services
- Cloudinary

### Deployment
- Render

---

## 📂 Project Structure

```
MajorProject/
│
├── controllers/
├── models/
├── routes/
├── middleware.js
├── utils/
├── public/
│   ├── css/
│   ├── js/
│
├── views/
│
├── app.js
├── cloudConfig.js
├── schema.js
└── package.json
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/rohitkarnawal/WanderLust.git
```

Go to project directory

```bash
cd YOUR_REPOSITORY
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret
```

Start the server

```bash
nodemon app.js
```

or

```bash
node app.js
```

Open

```
http://localhost:8080/listings
```

---

## 🔒 Authentication

Users can

- Register
- Login
- Logout

Only the owner can

- Edit Listings
- Delete Listings

Only the review author can

- Delete Reviews

---

## 🗺 Map Integration

- Leaflet.js
- OpenStreetMap
- GeoJSON
- Geocoding support

---

## ☁ Image Upload

Images are uploaded and managed using Cloudinary.

---

## 📦 Dependencies

- Express
- Mongoose
- Passport
- Passport Local
- Passport Local Mongoose
- Express Session
- Connect Mongo
- Cloudinary
- Multer
- Multer Storage Cloudinary
- Joi
- Method Override
- EJS
- Bootstrap
- Leaflet

---

## 🚀 Future Improvements

- Search Listings
- Category Filters
- Wishlist
- User Profiles
- Pagination
- Booking System

---

## 👨‍💻 Author

**Rohit**

GitHub:
https://github.com/rohitkarnawal

LinkedIn:
https://linkedin.com/in/rohitdev3315

---

⭐ If you like this project, consider giving it a star.
