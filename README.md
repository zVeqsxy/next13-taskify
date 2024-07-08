# Taskify

Welcome to Taskify, a cutting-edge task management application designed to streamline team collaboration and boost productivity. Built with the power of Next.js 13, Taskify offers a robust platform for managing projects, tasks, and workflows in a seamless and efficient manner.

## Features

- **User-Friendly Interface**: Taskify's clean and intuitive interface makes it easy to manage tasks and projects.
- **Organizations**: Create and manage organizations to streamline team collaboration and project management.
- **Customizable Boards**: Organize your projects with customizable boards. Tailor them to fit your team's workflow.
- **Dynamic Task Management**: Create, assign, and track tasks with ease. Taskify's intuitive interface makes task management simple and effective.
- **Real-Time Collaboration**: Collaborate with your team in real-time. Share updates, files, and feedback instantly.
- **Integrated Calendar**: Keep track of deadlines and milestones with the integrated calendar feature.
- **Secure Authentication**: With Clerk integration, Taskify ensures secure and hassle-free user authentication.
- **Payment Processing**: Seamlessly manage subscriptions and payments with Stripe integration.
- **Database Management**: Powered by Prisma, Taskify offers a robust and scalable database solution.
- **Rich Media Integration**: Enhance your tasks and projects with rich media from Unsplash.

## Technologies

Taskify is built using the following technologies:

- **Frontend**: React, Next.js 13, Tailwind CSS for styling.
- **Backend**: Next.js API routes, Prisma for database management.
- **Authentication**: Clerk for secure user authentication.
- **Payments**: Stripe for handling subscriptions and payments.
- **Media**: Unsplash API for rich media integration.


## Getting Started

To get started with Taskify, clone the repository and install the dependencies:

1. Clone the repository
  ```bash
  git clone https://github.com/zVeqsxy/taskify.git
  ```

2. Navigate to the project directory
  ```bash
  cd taskify
  ```

3. Install dependencies
  ```bash
  npm install
  ```

4. Configure environment variables. Copy the `.env.example` file to `.env` and fill in the required values. You need to create an account on Clerk, Stripe and Unsplash to get these keys. 
  ```bash
  cp .env.example .env
  ```

5. Run the development server
  ```bash
  npm run dev
  ```

6. Open your browser and navigate to `http://localhost:3000` to access the platform.

## License
Taskify is open-source software licensed under the MIT license.