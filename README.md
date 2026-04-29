# Kollage Studio - Professional MERN Stack Creative Agency Website

A modern, 3D-animated website for Kollage Studio SMC Private Limited, built with React, Node.js, MongoDB, and Three.js.

## 🎨 Brand Colors
- **Deep Black**: #0a0a0a
- **Electric Purple**: #7b3aff
- **Golden Yellow**: #ffca3a
- **White**: #f8f8f8

## 📦 Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Three Fiber** + Three.js for 3D scenes
- **Framer Motion** for page transitions
- **GSAP** for scroll animations
- **React Router** for navigation

### Backend
- **Node.js + Express** for REST API
- **MongoDB + Mongoose** for database
- **Nodemailer** for email delivery
- **Rate Limiting** and Security (Helmet, CORS)

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- MongoDB Atlas account (free tier)

### Installation

```bash
# Install dependencies for both client and server
npm run install:all

# Create .env file (copy from .env.example)
cp .env.example .env

# Configure your .env with:
# - MongoDB connection string
# - Email credentials
# - Port and client URL
```

### Running Locally

```bash
# Start both client and server with hot reload
npm run dev
```

Visit `http://localhost:5173` for the frontend.

## 🌍 Deployment (LIVE)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step guide:

1. **MongoDB Atlas** - Free database hosting
2. **Railway or Render** - Backend deployment
3. **Vercel** - Frontend deployment

Expected live URLs after deployment:
- Frontend: `https://your-project.vercel.app`
- Backend: `https://your-api.railway.app`

## 📄 Pages

- **Home** - Hero with 3D animations, typewriter text, CTA buttons
- **About** - Team showcase, company story, vision/mission
- **Video Production** - YouTube video grid with lightbox
- **Graphic Design** - Portfolio masonry layout
- **Social Media** - Marketing services and stats
- **Contact** - Form with email integration

## 📞 Contact Information

- **Company**: Kollage Studio SMC Private Limited
- **Phone**: 0333-1306137
- **Email**: info@kollagestudio.com
- **Location**: Nasim Nagar Road, Hyderabad, Pakistan

## 📁 Project Structure

```
kollage-studio/
├── client/                 # React frontend (Vite)
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI & 3D components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # Global CSS
│   │   ├── utils/         # API calls
│   │   ├── data/          # Static data
│   │   ├── App.jsx        # Main app with routing
│   │   └── main.jsx       # Vite entry point
│   ├── package.json
│   └── vite.config.js
│
└── server/                # Express backend
    ├── routes/            # API endpoints
    ├── controllers/       # Business logic
    ├── models/            # MongoDB schemas
    ├── middleware/        # Express middleware
    ├── package.json
    └── server.js          # Express entry point
```

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in:

```
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_specific_password
PORT=5000
CLIENT_URL=http://localhost:5173
```

## 🎬 API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/videos` - Retrieve video list

## 💡 Development Tips

- Use `npm run dev` for local development with hot reload
- Frontend auto-proxies API calls to `http://localhost:5000/api`
- All 3D components are lazy-loaded with Suspense
- Mobile-responsive design using Tailwind CSS

## 📝 License

Proprietary - Kollage Studio SMC Private Limited

---

**Ready to deploy? Follow [DEPLOYMENT.md](./DEPLOYMENT.md) for live links!**
