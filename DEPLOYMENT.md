# 🚀 Vercel Deployment Guide

Since your project is already uploaded to GitHub, follow these steps to deploy it live on Vercel.

## 📋 Prerequisites
- A [GitHub](https://github.com) account (where your code is hosted).
- A [Vercel](https://vercel.com) account (you can sign up using GitHub).

---

## ⚡ Step-by-Step Deployment

### 1. Log in to Vercel
1. Go to [vercel.com](https://vercel.com).
2. Click **"Log In"** and continue with **GitHub**.

### 2. Import Your Repository
1. On your Vercel dashboard, click the **"Add New..."** button (top right) and select **"Project"**.
2. You will see a list of your GitHub repositories.
3. Find `medicalwebsite` (or whatever you named your repo) and click **"Import"**.

### 3. Configure Project
Vercel automatically detects that this is a **Next.js** project, so most settings will be pre-filled correctly.

- **Project Name:** You can leave this as is or change it (this will be part of your default URL, e.g., `project-name.vercel.app`).
- **Framework Preset:** Should be `Next.js`.
- **Root Directory:** `./` (Leave as default).
- **Build Command:** `next build` (Leave as default).
- **Output Directory:** `.next` (Leave as default).

### 4. Setup Environment Variables (Crucial!)
You need to add the EmailJS configuration keys so the booking form works on the live site.

1. Expand the **"Environment Variables"** section.
2. Add the following key-value pairs (copy these from your local `src/lib/emailService.ts` or `Constants` file):

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_7wsoj91` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_6ybdfou` |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `3z6mCfuhFepiUUrqj` |

> **Note:** Even though we hardcoded these in the code initially, it is best practice to use environment variables in Vercel. If your code currently uses the hardcoded strings, the site will still work without these variables, but adding them now prepares you for a more secure setup later.

### 5. Deploy
1. Click the big **"Deploy"** button.
2. Vercel will strict the build process. You'll see logs scrolling by.
3. Wait for about 1-2 minutes.
4. Once done, you'll see a distinct "Congratulations!" screen with a preview of your website.

---

## 🌐 Post-Deployment (Custom Domain)

By default, you get a `your-project.vercel.app` domain. To add your own (e.g., `samhealthservices.com`):

1. Go to your project dashboard on Vercel.
2. Click **"Settings"** -> **"Domains"**.
3. Type your domain name and clicking **"Add"**.
4. Vercel will give you DNS records (usually an **A Record** or **CNAME**).
5. Log in to your domain provider (GoDaddy, Namecheap, etc.) and add these records.

---

## ⚠️ Troubleshooting

**Build Failed?**
- Check the "Logs" tab in Vercel to see the error.
- Common issues:
  - **Type Errors:** Run `npm run build` locally to see if there are TypeScript errors. Vercel won't deploy if there are errors.
  - **Lint Errors:** Run `npm run lint` locally to check for issues.

**Changes not showing?**
- Every time you push code to the `main` branch on GitHub, Vercel will automatically trigger a new deployment. You don't need to do anything manually!
