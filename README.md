<p align="center">
  <img src="public/sam-logo.svg" alt="SAM Health Services Logo" width="80" height="80">
</p>

<h1 align="center">🏥 SAM Health Services</h1>

<p align="center">
  <strong>Your Health, Our Priority</strong>
</p>

<p align="center">
  A modern healthcare platform providing home diagnostic tests, lab management solutions, and healthcare services across Mumbai.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#ecosystem">Ecosystem</a>
</p>

---

## 🌟 Overview

SAM Health Services is a comprehensive healthcare platform that connects patients with NABL-certified diagnostic laboratories. Our platform enables users to book lab tests online and get samples collected at their doorstep.

### 🎯 What We Offer

| Service | Description | Status |
|---------|-------------|--------|
| **Home Sample Collection** | Professional phlebotomists visit your doorstep | ✅ Live |
| **100+ Diagnostic Tests** | Wide range of blood tests, health checkups | ✅ Live |
| **Lab Dashboard** | Management software for laboratories | ✅ Live |
| **Patient Mobile App** | Book tests, consult doctors, order medicines | 🔜 Coming Soon |
| **Doctor Mobile App** | Patient management & consultation | 🔜 Coming Soon |

---

## ✨ Features

### 🧪 For Patients (This Website)
- **Browse 131+ Lab Tests** - Complete Blood Count, Liver Function, Thyroid Panel, and more
- **Smart Search & Filter** - Find tests by name, category, or medical condition
- **Easy Booking** - Multi-step form with real-time validation
- **Home Collection** - Sample collection at your doorstep
- **Quick Reports** - Digital reports within 24-48 hours
- **24/7 Support** - WhatsApp, Call, and Email support

### 🔬 For Laboratories (Lab Dashboard)
SAM Health Services provides a dedicated **Lab Management Dashboard** for partner laboratories.

#### Dashboard Features:
- 📊 **Sample Tracking** - Track samples from collection to report
- 📋 **Order Management** - View and process incoming test orders
- 📈 **Analytics & Reports** - Business insights and performance metrics
- 👥 **Staff Management** - Manage phlebotomists and lab technicians
- 💰 **Billing & Invoicing** - Automated billing and payment tracking
- 🔔 **Real-time Notifications** - Instant alerts for new orders

#### Subscription Plans:
Labs can subscribe to our software with flexible pricing plans:
- **Starter** - For small labs (up to 100 tests/month)
- **Professional** - For medium labs (up to 500 tests/month)
- **Enterprise** - For large labs (unlimited tests)

> 📩 **Interested in partnering?** Contact us at [contact@samhealthservices.com](mailto:contact@samhealthservices.com)

### 📱 Mobile Apps (Coming Soon)

We're building a unified healthcare app ecosystem:

| App | Users | Features |
|-----|-------|----------|
| **SAM Health App** | Patients | Book tests, Doctor consultations, Order medicines, Track reports |
| **SAM Health Pro** | Doctors | Single app with doctor sign-in, Patient management, Prescriptions |

> Both apps will share the same codebase with role-based access control.

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Forms** | React Hook Form |
| **Email** | EmailJS |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
medicalwebsite/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home page
│   │   ├── book-test/          # Book Test page
│   │   ├── about/              # About Us page
│   │   ├── contact/            # Contact page
│   │   ├── support/            # Support & FAQ page
│   │   ├── privacy-policy/     # Privacy Policy
│   │   ├── terms-conditions/   # Terms & Conditions
│   │   └── refund-policy/      # Refund Policy
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Home page sections
│   │   └── book-test/          # Book Test components
│   ├── lib/                    # Utilities, constants, animations
│   ├── data/                   # JSON data (tests.json)
│   └── types/                  # TypeScript types
├── public/                     # Static assets
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/medicalwebsite.git
   cd medicalwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (for booking confirmations)
   
   Update `src/lib/emailService.ts` with your EmailJS credentials:
   ```typescript
   const EMAILJS_CONFIG = {
     serviceId: "your_service_id",
     templateId: "your_template_id",
     publicKey: "your_public_key",
   };
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🚀 Deployment Guide (Vercel)

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: SAM Health Services website"

# Add remote origin
git remote add origin https://github.com/your-username/medicalwebsite.git

# Push to main branch
git push -u origin main
```

### Step 2: Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

2. **Click "Add New Project"**

3. **Import your repository**
   - Select `medicalwebsite` from your GitHub repos
   - Click "Import"

4. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: Leave empty (auto-detected)

5. **Environment Variables** (Optional)
   
   If you want to use environment variables for EmailJS:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Click "Deploy"**

### Step 3: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `samhealthservices.com`)
3. Update DNS records as instructed by Vercel

### Deployment Checklist

- [x] All pages render correctly
- [x] Forms are validated and submit properly
- [x] EmailJS is configured
- [x] Mobile responsive design works
- [x] Animations are smooth
- [x] SEO meta tags are set

### Vercel Configuration File

Create `vercel.json` in root (optional):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["bom1"]
}
```

> `bom1` = Mumbai region for low latency in India

---

## 🔧 Configuration

### EmailJS Setup

1. Create account at [emailjs.com](https://emailjs.com)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   ```
   {{first_name}}
   {{last_name}}
   {{mobile}}
   {{tests}}
   {{test_list}}
   {{total_amount}}
   {{location}}
   {{landmark}}
   {{room}}
   {{building}}
   {{area}}
   {{city}}
   {{pincode}}
   ```
4. Copy Service ID, Template ID, and Public Key
5. Update `src/lib/emailService.ts`

### Adding New Tests

Edit `src/data/tests.json`:

```json
{
  "id": "test_132",
  "name": "New Test Name",
  "category": "Hematology",
  "disease_tag": "Related Condition",
  "description": "Test description",
  "price": 500
}
```

---

## 🌐 Ecosystem Roadmap

```
                    ┌─────────────────────────────────┐
                    │    SAM HEALTH SERVICES          │
                    │         ECOSYSTEM               │
                    └─────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────┐         ┌───────────────┐         ┌───────────────┐
│   WEBSITE     │         │ LAB DASHBOARD │         │  MOBILE APP   │
│   (Patient)   │         │ (Laboratories)│         │  (Unified)    │
│   ✅ LIVE     │         │   ✅ LIVE     │         │  🔜 COMING    │
└───────────────┘         └───────────────┘         └───────────────┘
        │                         │                         │
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────┐         ┌───────────────┐         ┌───────────────┐
│ • Book Tests  │         │ • Subscription│         │ • Patients    │
│ • Track       │         │   Based SaaS  │         │ • Doctors     │
│ • Reports     │         │ • Analytics   │         │ • Medicines   │
│ • Support     │         │ • Management  │         │ • Consult     │
└───────────────┘         └───────────────┘         └───────────────┘
```

---

## 📞 Contact

- **Phone**: +91 73099 30118
- **Email**: contact@samhealthservices.com
- **Address**: 123 Healthcare Avenue, Mumbai, Maharashtra 400001

---

## 📄 License

This project is proprietary software owned by SAM Health Services.

---

<p align="center">
  Made with ❤️ in Mumbai, India
</p>

<p align="center">
  <strong>SAM Health Services - Your Health, Our Priority</strong>
</p>
