TodoApp
This is a simple Todo application built with React, Next.js, and Tailwind CSS for the frontend,
and Spring Boot with Spring Security and MySQL DB for the backend.
The full application can be set up by combining both the frontend and backend repositories.

Backend Repository
The backend of the TodoApp can be found in the following repository:https://github.com/martinaholmquist/todoapp

Features
This is a simple Todo application that allows users to manage their tasks.
It includes authentication features, allowing users to sign up, log in, and access their personalized todo list.
User Authentication: Users can sign up and log in securely using email and password.
Authorization: Different roles (USER and ADMIN) determine the level of access users have to specific endpoints.
Todo Management: Users can view, add, update, and delete their tasks.
Admin Panel: Admin users have access to an admin panel where they can view and delete user accounts.

Authentication Flow
Sign Up:

Users can register by providing their email, password, username
Log In:

Once registered, users can log in using their email and password.
Authentication Context:

The authentication context is managed using the AuthContext React context.
Token Handling:

JWT tokens are used for authentication, and the frontend stores the token in the local storage.
Role-Based Access:

Different roles (USER and ADMIN) have different levels of access to endpoints.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
