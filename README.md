# Dominate Links
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
## Introduction

The **Dominate Links** is a web application that allows users to create personalized pages containing multiple links. It showcases the use of authentication with Clerk, database interaction with Prisma, and UI design with Shadcn Next.js and Tailwind CSS.

## Prerequisites

Ensure you have the following prerequisites installed before getting started:

- [Node.js](https://nodejs.org/) (version 18+)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)
- A Clerk account for authentication and user management

## Technologies
- Next js - Frontend and backend
- Tailwind - CSS Framework
- Shadcn - UI Component Library
- Clerk - Authentication
- Prisma - ORM
- Postgre SQL - Database

## Getting Started

Follow these steps to set up and run the project on your local environment:

### Step 1: Clone the Repository

Clone the project repository and navigate to the project directory:

```bash
git clone https://github.com/rohitt-gupta/dominate-links.git
cd dominate-links
```

### **Step 2: Install Dependencies**

Install the necessary project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### **Step 3: Set Up Environment Variables**

Rename **`.env.example`** to **`.env.local`** file in the root directory and add the following environment variables:

```
DATABASE_URL="your_database_connection_string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/new-user"
CLERK_WEBHOOK="your_clerk_webhook_secret"
```

### **Step 4: Set Up the Database**

To update your database schema with Prisma, run the following command:

```bash
npx prisma db push
```

### **Step 5: Start the Development Server**

Run the development server to start the application locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### **Step 6: Set Up Clerk Webhooks (Optional)**

To test Clerk webhooks locally, you can use ngrok to expose your local server:

1. Install and start ngrok:
    
```bash
ngrok http 3000
```
    
2. Copy the HTTPS forwarding address from ngrok and use it to set the webhook URL in your Clerk dashboard.

## **Usage**

After setting up the application, users can sign in, sign up, and create personalized link pages. To customize the application, edit the components in the **`src`** directory.

## **Contributing**

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear commit messages.
4. Open a pull request and describe your changes in detail.

Ensure your code follows best practices, includes appropriate tests, and has clear documentation.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## **Contact**

If you have any questions or need support, you can reach out to:
- Twitter: [@dominateXclub](https://twitter.com/dominateXclub)

Thank you for using the **Dominate Links** project!
