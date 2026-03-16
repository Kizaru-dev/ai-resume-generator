<h1 align="center">✨ AI Resume Builder</h1>

<p align="center">
  <strong>A modern, full-stack AI-powered resume generator built to help professionals craft compelling resumes effortlessly.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

---

## 🚀 Live Demo

[**View Live Project**](https://ai-resume-generator-smoky.vercel.app/)

---

## 📖 Overview

The **AI Resume Builder** is an intelligent web application designed to generate professionally formatted resumes based on a simple user description. By leveraging advanced artificial intelligence (via Spring AI & Ollama models), the application transforms raw user input into a highly structured, ATS-friendly resume format.

This project showcases full-stack web development expertise, featuring a responsive React frontend with elegant aesthetics and a robust, containerized Spring Boot backend API.

---

## 🔥 Key Features

- **🧠 AI-Powered Generation:** Generates comprehensive resume content (Summary, Experience, Education, Skills) dynamically based on natural language input.
- **⚡ Blazing Fast Frontend:** Built with Vite and React for optimal performance and hot-module replacement.
- **🎨 Modern UI/UX:** Styled using Tailwind CSS and DaisyUI, featuring a beautiful, dynamic design with dark mode, glassmorphism, and smooth micro-animations.
- **🏗️ Robust Backend:** Spring Boot architecture utilizing `spring-ai` for intelligent prompt engineering and LLM interactions.
- **🐳 Containerized:** Fully Dockerized backend ensuring consistent deployment environments across local and production setups.
- **🌍 Cloud Deployed:** Cross-Origin Resource Sharing (CORS) configured for seamless API communication between a Vercel-hosted frontend and a Render-hosted backend.

---

## 🛠️ Technology Stack

**Frontend:**
- React (v19)
- Vite
- Tailwind CSS
- DaisyUI (Component Library)
- Axios (HTTP Client)
- React Router (Routing)

**Backend:**
- Java 17
- Spring Boot (v4)
- Spring AI (v2.0.0-M2 - Ollama Integration)
- Maven
- Docker

---

## ⚙️ Local Development Setup

To run this application locally, you'll need Node.js and Java 17+ installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/Kizaru-dev/ai-resume-generator.git
cd ai-resume-generator
```

### 2. Backend Setup
Navigate to the backend directory and run the Spring Boot application:

```bash
cd resume-ai-backend
mvn clean install
mvn spring-boot:run
```
*The backend server will start on `http://localhost:8080`.*

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, install dependencies, and start the Vite dev server:

```bash
cd resume_frontend
npm install

# Connect to the local backend using the .env file
# Ensure VITE_API_BASE_URL=http://localhost:8080/api/v1 is set in your .env

npm run dev
```
*The frontend application will be accessible at `http://localhost:5173`.*

---

## 🧩 System Architecture

1. **Client (React):** The user provides a brief description of their professional background via a sleek UI.
2. **API Request (Axios):** The description is sent to the backend `/api/v1/resume/generate` endpoint.
3. **Backend (Spring Boot):** The controller delegates to the `ResumeService`.
4. **AI Processing:** The `ResumeService` injects the description into an engineered prompt template and communicates with the AI model. 
5. **JSON Response:** The AI returns a highly-structured JSON object containing the resume data.
6. **Rendering:** The frontend maps the JSON response into beautiful, readable React components.

---

## 📈 Future Enhancements

- 📄 **PDF Export:** Allow users to download their generated resumes directly as PDF documents.
- 🔐 **User Authentication:** Save generated resumes to individual user accounts.
- 🎨 **Multiple Templates:** Provide variations in resume template styling (Classic, Creative, Modern).
- 🌐 **Model Selection:** Allow users to choose different AI models for varied writing styles.

---

<p align="center">
  Developed by <a href="https://github.com/Kizaru-dev">Priyanshu Singh</a>
</p>
