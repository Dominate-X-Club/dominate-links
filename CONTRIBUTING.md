# Contributing to Domainte Links

First off, thanks for taking the time to contribute!

All types of contributions are encouraged and valued. See the Table of Contents. We are looking forward to your contributions.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Code of Conduct

This project and everyone participating in it is governed by the [Dominate Links Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [@dominateXclub](https://x.com/dominateXclub) or The Maintainer - [@whyrohitwhy](https://x.com/whyrohitwhy).

## Tech Stack

### Prerequisites

Ensure you have the following prerequisites installed before getting started:

- [Node.js](https://nodejs.org/) (version 18+)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)
A [Clerk](https://clerk.com/) account for authentication and user management

### Technologies

- **Frontend and Backend** - [Next.js](https://nextjs.org/)
- **CSS Framework** - [Tailwind CSS](https://tailwindcss.com/)
- **UI Component Library** - [Shadcn](https://shadcn.dev/)
- **Authentication** - [Clerk](https://clerk.dev/)
- **ORM** - [Prisma](https://www.prisma.io/)
- **Database** - [PostgreSQL](https://www.postgresql.org/)

## Contributing

To contribute to Dominate Links, follow these steps:

### Step 1: Fork and Clone the Repository

Clone the project repository and navigate to the project directory:

```bash
git clone https://github.com/rohitt-gupta/dominate-links.git
cd dominate-links
```

### Step 2: Create a New Branch with a Descriptive Name

```bash
git checkout -b <branch_name>
```

### Step 3: Make Changes and Commit

Make your changes to the project and commit them:

```bash
git add .
git commit -m "your_commit_message"
```

The commit message should be descriptive and should be one of the following types:

- **BUILD**: update pnpm dependency

- **CI**: add circleci configuration file
- **DOCS**: fix typo in foo.md and bar.md
- **PERF**: optimize database query for faster response times
- **FEAT**: allow provided config object to extend other configs
- **FIX**: resolve issue with incorrect data rendering
- **REFACTOR**: reorganize code structure for better readability
- **STYLE**: format code according to Prettier standards
- **TEST**: add unit tests for user authentication

#### ❗Important
Before doing any commit, make sure you run the following command to check for any linting errors:
```bash
pnpm tsc
```
If there are any errors, please fix them before committing your changes.

### Step 4: Push Changes
Push your changes to the remote repository:

```bash
git push origin <branch_name>
```

### Step 5: Create a Pull Request
Create a pull request to the main branch of the **[Dominate Links](https://github.com/rohitt-gupta/dominate-links)** repository. Make sure to include a detailed description of the changes you made.

## Getting Started
Follow these steps to set up and run the project on your local environment:

### Step 1: Install Dependencies
Install the necessary project dependencies:

```bash
pnpm install
```

### Step 2: Set Up Environment Variables
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

### Step 3: Set Up the Database

To update your database schema with Prisma, run the following command:

```bash
npx prisma db push
```

### Step 4: Start the Development Server

Run the development server to start the application locally:

```bash
pnpm dev
```

### Step 5: Set Up Clerk Webhooks (Optional)

To test Clerk webhooks locally, you can use ngrok to expose your local server:

1. Install and start ngrok:
    
```bash
ngrok http 3000
```
    
2. Copy the HTTPS forwarding address from ngrok and use it to set the webhook URL in your Clerk dashboard.


## Usage

After setting up the application, users can sign in, sign up, and create personalized link pages. To customize the application, edit the components in the **`src`** directory.

## Acknowledgements
We appreciate all contributions to Dominate Links, whether they come in the form of code, documentation, bug reports, or feature requests. Thank you for helping to improve the project!

Happy coding!