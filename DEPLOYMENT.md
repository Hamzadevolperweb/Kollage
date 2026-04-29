# Kollage Studio - Deployment Guide

## Quick Deployment to Live

Follow these steps to get your Kollage Studio website live on the internet.

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `kollage-studio`
3. Description: `Professional MERN stack creative agency website`
4. Create repository
5. In your terminal, run:
```bash
cd d:\Kollage
git remote add origin https://github.com/YOUR_USERNAME/kollage-studio.git
git branch -M main
git push -u origin main
```

---

### Step 2: Set Up MongoDB Atlas (Database)

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create a **New Project** → name it "Kollage Studio"
4. Create a **Cluster** (choose Free tier M0)
5. Wait ~3 minutes for cluster to deploy
6. Go to **Database Access** → Add new user
   - Username: `kollage_admin`
   - Password: Generate a secure one (copy & save it)
7. Go to **Network Access** → Add IP Address → Allow from anywhere (0.0.0.0/0)
8. Click **Connect** on your cluster
9. Choose "Drivers" → Node.js 4.0+
10. Copy the connection string (looks like):
```
mongodb+srv://kollage_admin:PASSWORD@cluster0.xxx.mongodb.net/kollage-studio?retryWrites=true&w=majority
```
**Replace PASSWORD with your actual password**

---

### Step 3: Deploy Backend to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **New Project** → **Deploy from GitHub repo**
4. Select your `kollage-studio` repo
5. Railway will auto-detect the monorepo
6. **Configure variables** (click "Add Variable"):
   - `MONGO_URI`: Paste your MongoDB connection string from Step 2
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: [Get App Password](https://myaccount.google.com/apppasswords) from Gmail
   - `PORT`: `5000`
   - `CLIENT_URL`: Leave blank for now (update after frontend deploys)

7. Click **Deploy**
8. Wait for deployment (green checkmark)
9. Copy your backend URL from the deployment logs (looks like: `https://xxxxx-production.up.railway.app`)

---

### Step 4: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **Import Project**
4. Select your `kollage-studio` repo
5. **Framework Preset**: Select "Vite"
6. **Root Directory**: Change to `client`
7. **Environment Variables**:
   - `VITE_API_URL`: Paste your Railway backend URL from Step 3 (e.g., `https://xxxxx-production.up.railway.app/api`)
8. Click **Deploy**
9. Wait for deployment (you'll see a live URL like: `https://kollage-studio.vercel.app`)

---

### Step 5: Update Backend Environment Variables

1. Go back to [railway.app](https://railway.app)
2. Select your Kollage Studio project
3. Edit variables:
   - `CLIENT_URL`: Set to your Vercel frontend URL (e.g., `https://kollage-studio.vercel.app`)
4. Redeploy by clicking the **Redeploy** button

---

## Live Links

Once deployed, you'll have:

- **Frontend (Website)**: `https://YOUR_PROJECT.vercel.app`
- **Backend (API)**: `https://xxxxx-production.up.railway.app`

---

## Local Development

Before deploying, test locally:

```bash
cd d:\Kollage

# Install dependencies
npm run install:all

# Create .env file (copy from .env.example)
# Fill in your MongoDB URI and email credentials

# Start both client and server
npm run dev
```

Visit `http://localhost:5173` to see the site.

---

## Troubleshooting

### Backend 500 errors?
- Check MongoDB connection string (verify password doesn't have special chars that need URL encoding)
- Verify email credentials are correct
- Check Railway logs for errors

### Frontend can't reach API?
- Ensure `VITE_API_URL` is set correctly in Vercel
- Check that backend `CLIENT_URL` matches Vercel URL

### "Can't find module"?
- Delete `node_modules` and `.pnpm-lock.yaml` locally
- Run `npm run install:all` again

---

**Need help? Check the logs on Railway and Vercel dashboards for detailed error messages.**
