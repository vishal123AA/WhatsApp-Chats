# 💬 WhatsApp Chat Project

A foundational full-stack web application that simulates a basic chat interface, inspired by WhatsApp. This project was built to demonstrate core web development concepts, including server-side rendering, database integration, RESTful API design, and complete CRUD (Create, Read, Update, Delete) operations.

## 🚀 Features

* **View All Chats:** Displays all chat messages on the main dashboard using a clean layout.
* **Create New Chats:** Users can add new messages via a form, specifying the sender, receiver, and message content.
* **Update Chats:** Existing chat messages can be edited and updated in the database.
* **Delete Chats:** Messages can be permanently removed from the database.
* **Dynamic Timestamps:** Automatically captures and displays the exact date and time for every chat using JavaScript's native `Date()` class.
* **Interactive UI Confirmations:** Client-side JavaScript triggers alert confirmations before executing sensitive edit or delete actions.
* **Database Recovery:** Includes a dedicated initialization file to quickly seed the database with mock data or recover it after a full wipe.

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Backend Framework** | Node.js, Express.js |
| **Database** | MongoDB |
| **Frontend** | EJS (Templating), HTML, custom CSS, Vanilla JavaScript |
| **Dependencies & Tools** | Nodemon, Method-Override, Path |

## 📂 Project Structure

| Directory / File | Description |
| :--- | :--- |
| `index.js` | The main server file where the application flow begins. Contains all RESTful API routes for CRUD operations. |
| `init.js` | A utility script used to initialize the MongoDB database with starter data. Run this to reset or populate the database. |
| `models/` | Contains the database collections and schema rules. These are exported and required in `index.js`. |
| `views/` | Holds the EJS templates: `index.ejs` (displays all chats), `edit.ejs` (form to edit a message), and `new.ejs` (form to create a message). |
| `public/` | Stores static assets, including `style.css` for dashboard styling and `app.js` for client-side click event listeners (alerts). |

WHATSAPP PROJECT/
├── models/
│   └── chat.js              # Database schema for chats
├── node_modules/            # Installed npm dependencies
├── public/
│   ├── app.js               # Client-side JS (alert confirmations)
│   └── style.css            # Stylesheet for the UI
├── views/
│   ├── edit.ejs             # Template for editing a chat
│   ├── index.ejs            # Main dashboard template
│   └── new.ejs              # Template for creating a new chat
├── .gitignore               # Files and folders ignored by Git
├── index.js                 # Main entry point and Express server
├── init.js                  # Script to seed/reset the database
├── package-lock.json        # Exact versions of installed dependencies
└── package.json             # Project metadata and dependency list

## ⚙️ Local Setup & Installation

1. **Clone the repository:**
```bash
   git clone <your-repository-url>

2. **Install dependencies::**
```bash
   npm install

3. **Initialize the database:**
```bash
   node init.js

4. **Start the development server:**
```bash
   nodemon index.js
