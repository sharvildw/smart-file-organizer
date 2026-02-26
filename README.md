# 📂 Smart File Organizer

A simple Node.js application that automatically organizes files into folders based on their file type (jpg, pdf, zip, etc.).

## 🚀 Features

- Automatically sorts files by extension
- Creates folders if they don't exist
- Supports common file types like:
  - 📸 Images (.jpg, .png)
  - 📄 PDF files (.pdf)
  - 🗜️ Zip files (.zip)
- Clean and simple file management
- Easy to extend for more file types

---

## 🛠️ Tech Stack

- Node.js
- File System Module (fs)
- Path Module

---

## 📁 Project Structure
Smart-File-Organizer/
│
├── jpg/ → Stores image files
├── pdf/ → Stores PDF files
├── zip/ → Stores ZIP files
├── index.js → Main logic file
└── README.md → Project documentation


---

## ⚙️ How It Works

1. The script scans the current directory.
2. It checks each file’s extension.
3. Based on the extension, it:
   - Creates a folder (if not already created)
   - Moves the file into that folder

---

## ▶️ How to Run

### 1️⃣ Install Node.js  
Make sure Node.js is installed on your system.

Check version:node -v

### 2️⃣ Clone the Repository
https://github.com/sharvildw/smart-file-organizer.git

### 3️⃣ Run the Script
node index.js

---

## 📌 Example

Before Running:
file1.jpg
document.pdf
archive.zip


After Running:
jpg/file1.jpg
pdf/document.pdf
zip/archive.zip


---

## 🔮 Future Improvements

- Add support for more file types
- Add CLI arguments support
- Add GUI interface
- Add logging system
- Add automatic background monitoring

---

## 👨‍💻 Author

Sharvil Waghmare  
Engineering Student | Developer  

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!