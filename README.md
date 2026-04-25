# 📇 User Directory App (React)

A simple and clean **User Directory Application** built using **React.js**.
This project allows users to add profile data through a form and instantly display it as cards.

---

## 🚀 Features

* Add user details (Name, Email, Role, Image URL)
* Dynamic card rendering using React state
* Real-time UI updates
* Clean and minimal UI
* Component-based architecture

---

## 🧠 What I Learned

* Managing state using `useState`
* Passing props between components
* Handling form inputs in React
* Rendering lists using `.map()`
* Controlled components (input fields)
* Basic component structure and styling

---

## 🛠️ Tech Stack

* React.js
* JavaScript (ES6)
* CSS3

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Form.jsx
│   └── Card.jsx
│
├── style/
│   ├── base.css
│   ├── form.css
│   └── card.css
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ How It Works

1. User fills the form with:

   * Name
   * Email
   * Image URL
   * Role

2. On submit:

   * Data is stored in state (`formData`)
   * A new user object is added to the array

3. The `Card` component:

   * Receives data via props
   * Loops through it using `.map()`
   * Displays each user as a card

---

## 📸 Preview

* Form to add user data
* Cards dynamically generated below

---

## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/user-directory-app.git

# Navigate into project
cd user-directory-app

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## ✨ Future Improvements

* Add delete user functionality
* Add edit/update feature
* Form validation
* Default image fallback
* Store data in localStorage
* Add animations

---

## 💡 Author

**Chetan Kumawat**

---

## 📌 Note

This project is great for beginners to understand:

* React fundamentals
* State & props flow
* UI rendering logic

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share your feedback!
