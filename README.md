# Personal Portfolio — Full Stack

A responsive personal portfolio built with React, Node.js/Express and MongoDB.

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT + bcryptjs
- Deployment: Vercel (frontend) + Render (backend) + MongoDB Atlas

## Local setup

### 1. Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Set `MONGO_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `CLIENT_URL` in `.env`.

### 2. Seed sample data
From the project root:
```bash
node scripts/seed.js
```

### 3. Frontend
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

The frontend uses `VITE_API_URL` for the API base URL.

## Admin
Open `/admin` on the frontend and use the credentials configured in the backend environment.

## Deployment

### MongoDB Atlas
Create a database, copy its connection string, and use it as `MONGO_URI` in the backend service.

### Render
Create a Web Service from this repository:
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Environment variables:
- `MONGO_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `CLIENT_URL`

### Vercel
Import the repository:
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

Environment variable:
- `VITE_API_URL=https://YOUR-RENDER-SERVICE.onrender.com/api`

Never commit real `.env` files or production credentials.

## API
- GET `/api/health`
- GET/POST/PUT/DELETE `/api/projects`
- GET/POST/PUT/DELETE `/api/skills`
- POST/GET `/api/messages`
- POST `/api/auth/login`
