# 📚 Course Lab

Course Lab is a modern online course marketplace built using **Next.js (App Router)**, **NextAuth**, and **Express.js**.  
Users can browse, search, filter, and view course details. Authenticated users can also **add** and **delete** courses.

---

## 🚀 Features

- 🔍 Browse all courses
- 🏷️ Filter courses by category
- 🔎 Search courses
- 📄 View course details
- 🔐 User authentication using NextAuth
- ➕ Add new course (authenticated users)
- ❌ Delete course (authenticated users)
- ⚙️ Express.js backend with MongoDB (Mongoose)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 16 (App Router), Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** NextAuth (Email/Password & Google)

---

## 📦 Dependencies

- Axios
- React Icons
- Lucide-react
- React Hot Toast
- bcryptjs
- lucide-react
- mongoose

---

## 📁 Project Structure

### Next Js:

```bash
/app
├── api
│ └── auth
│ ├── [...nextauth]/ # NextAuth config
│ | └── route.js # NextAuth API route
│ └── signup
| └── route.js # Signup route
├── add-course/ # Add new course page
│ └── page.jsx
├── manage-courses/ # Manage/Delete courses page
│ └── page.jsx
├── courses/
│ ├── [id]/page.jsx # Dynamic course detail page
│ └── page.jsx
├── (auth)
| ├── login/
| | └── page.jsx # Login page
| └── signup/
| └── page.jsx # Signup page
|
├── layout.jsx # Main layout file
└── page.jsx # Home Page

```

---

## ⚙️ Setup & Installation

### **1. Clone the repository**

```bash
git clone https://github.com/Nur-Nayeem/course-lab-project-nextjs.git
cd course-lab-project-nextjs
```

### **2. Install dependencies**

```bash
npm install

```

### **🔧 Environment Variables**

```
MONGO_URI=your-mongodb-uri

GOOGLE_CLIENT_ID=google-cloud-client-id

GOOGLE_CLIENT_SECRET=google-cloud-client-secret

NEXTAUTH_SECRET=any-secrete-key

```

### **▶️ Running the Project**

```
npm run dev

```

---

### **🌍 Live Website:** [Course Lab](https://course-lab-project-nextjs.vercel.app/)

### **💻 Client GitHub Repo:** [Client Repo](https://github.com/Nur-Nayeem/course-lab-project-nextjs)

### **🛢️ Server GitHub Repo:** [Server Repo](https://github.com/Nur-Nayeem/course-lab-server-express)
