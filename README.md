# Offnedietur MERN Frontend (Public Version)

## 📋 Project Overview

This is the frontend application for Offnedietur, a service ticketing and request management system built with the MERN stack (MongoDB, Express, React, Node.js). The frontend provides an intuitive user interface for service to book tickets, create service requests, and communicate with administrators.

- [Website - OffnedieTur.de](https://offnedietur.de)

## 🚀 Features

- **User Authentication**
  - Registration with email verification
  - Login/Logout functionality
  - Password reset capabilities
  - User profile management

- **Dashboard System**
  - User dashboard for managing tickets and requests
  - Admin dashboard with enhanced capabilities
  - Notification center for updates

- **Service Management**
  - Ticket booking system
  - Request creation and tracking
  - Service history and details

- **Communication**
  - Contact form for general inquiries
  - Notification system
  - Admin-user messaging capabilities

## 🛠️ Technologies Used

- **React**: Frontend UI library
- **Vite**: Next-generation frontend tooling
- **React Router Dom**: Navigation and routing
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animations library
- **Axios**: HTTP client for API requests
- **React Toastify**: Toast notifications
- **Stripe.js**: Payment processing integration
- **Date-fns**: Date manipulation library

## 📦 Dependencies

```json
{
  "dependencies": {
    "@stripe/react-stripe-js": "^3.1.1",
    "@stripe/stripe-js": "^5.6.0",
    "@tailwindcss/vite": "^4.0.3",
    "axios": "^1.7.9",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.4.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.5",
    "react-toastify": "^11.0.3",
    "slugify": "^1.6.6",
    "tailwindcss": "^4.0.3"
  }
}
```

## 🗂️ Project Structure

```
offnedietur-mern-frontend-public-version/
├── public/             # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable React components
│   │   ├── auth/       # Authentication components
│   │   ├── common/     # Common UI components
│   │   ├── notification/ # Notification system components
│   │   ├── request/    # service request components
│   │   └── ticket/     # Ticket management components
│   ├── context/        # React context providers
│   ├── layouts/        # Page layout components
│   │   ├── MainLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── AdminLayout.jsx
│   ├── pages/          # Page components
│   ├── router/         # Route protection components
│   ├── services/       # API service functions
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── .eslintrc.json      # ESLint configuration
├── index.html          # HTML entry point
├── package.json        # Project metadata and dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🔧 Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/servetisikli/offnedietur-mern-frontend-public-version.git
cd offnedietur-mern-frontend-public-version
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
VITE_API_URL=your_api_url
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

4. Start the development server
```bash
npm run dev
```

5. For production build
```bash
npm run build
npm run preview
```

## 🔐 Authentication Flow

1. User registers with email, password, and other required information
2. Email verification is sent to confirm account
3. User logs in with credentials to access the dashboard
4. JWT token is stored for session management
5. Protected routes require authenticated access

## 📱 Application Routes

### Public Routes
- `/` - Homepage
- `/login` - User login
- `/register` - User registration
- `/forgot-password` - Password reset request
- `/reset-password/:token` - Password reset page
- `/about` - About page
- `/contact` - Contact form
- `/start` - Getting started guide

### Protected Routes (User)
- `/dashboard` - User dashboard overview
- `/dashboard/notifications` - User notifications
- `/dashboard/requests` - Service request list
- `/dashboard/requests/new` - Create new service request
- `/dashboard/tickets` - Ticket list
- `/dashboard/tickets/new` - Create new ticket

### Protected Routes (Admin)
- `/admin` - Admin dashboard overview
- `/admin/tickets` - Ticket management panel
- `/admin/notifications` - Notification administration
- `/admin/requests` - Service request approval panel

## 👨‍💻 Author

- **Servet Isikli** - [GitHub Profile](https://github.com/servetisikli)

## 📅 Last Updated

- Date: 2025-04-17
- By: servetisikli

## 🔗 Links

- [Offnedietur Website](https://offnedietur.de)
- [Repository](https://github.com/servetisikli/offnedietur-mern-frontend-public-version)
