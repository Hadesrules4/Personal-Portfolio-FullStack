# Personal Portfolio — Full Stack

A responsive personal portfolio built with React, Node.js/Express and MongoDB.

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT + bcryptjs
- Deployment: Vercel + Render + MongoDB Atlas

## Local setup

### Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Configure `MONGO_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `CLIENT_URL`.

### Seed sample data
From the project root:
```bash
node scripts/seed.js
```

### Frontend
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Set `VITE_API_URL` to the backend API URL.

## Deployment

### MongoDB Atlas
Create a MongoDB Atlas database and put its connection string into the Render `MONGO_URI` environment variable.

### Render
Create a Web Service from this repository:
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Set:
- `MONGO_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `CLIENT_URL` = your Vercel frontend URL

### Vercel
Import this repository:
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

Set:
`VITE_API_URL=https://YOUR-RENDER-SERVICE.onrender.com/api`

Never commit real `.env` files or production credentials.

## API
- GET `/api/health`
- GET/POST/PUT/DELETE `/api/projects`
- GET/POST/PUT/DELETE `/api/skills`
- POST/GET `/api/messages`
- POST `/api/auth/login`
