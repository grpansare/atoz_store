# AtoZStore E-Commerce Platform Frontend

## Overview

**AtoZStore** is a comprehensive e-commerce platform that delivers a seamless shopping experience across diverse product categories. This repository contains the frontend built with **Angular**, offering a responsive and user-friendly interface for customers, vendors, delivery partners, and administrators. The application communicates with a Spring Boot backend running on port `8080` and integrates **Razorpay** for secure payment processing.

---

## Features

- **User Management**:
  - Support for four distinct user roles: Customer, Vendor, Delivery Partner, and Admin.
  - Personalized dashboards and features for each role.

- **Product Management**:
  - Product browsing with advanced search and filtering capabilities.

- **Shopping Cart and Checkout**:
  - Interactive shopping cart.
  - Smooth and secure checkout process.

- **Payment Gateway Integration**:
  - Razorpay integration for secure and efficient payment handling.

- **Order Management**:
  - Comprehensive order tracking and management for users and administrators.

- **Responsive Design**:
  - Fully responsive UI ensuring compatibility across desktop, tablet, and mobile devices.

---

## Technologies Used

- **Angular**: For building the frontend user interface.
- **TypeScript**: For robust and scalable application development.
- **Bootstrap**: For responsive and mobile-friendly design.
- **RxJS**: For managing asynchronous operations and state.
- **Razorpay**: For payment processing.

---

## Installation

### Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Angular CLI](https://angular.io/cli)

Additionally, ensure the backend (Spring Boot) is running on port `8080`.

### Steps to Run the Angular Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/atozstore-frontend.git
   cd atozstore-frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   ng serve
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:4200
   ```

The Angular frontend will be running and communicating with the backend on port `8080`.

---

## Folder Structure

```
atozstore-frontend/
|
├── src/
|   ├── app/
|   │   ├── components/                    # Reusable UI components
|   │   │   ├── homepage/                  # Homepage component
|   │   │   ├── login/                     # Login component
|   │   │   ├── register/                  # Registration component
|   │   │   ├── dashboard/                 # Dashboard for different user roles
|   │   │   ├── product-list/              # Product listing and search component
|   │   │   ├── cart/                      # Shopping cart component
|   │   │   ├── checkout/                  # Checkout process component
|   │   │   └── order-summary/             # Order summary and tracking component
|   │   ├── services/                      # Services to handle business logic
|   │   │   ├── auth.service.ts            # Authentication service
|   │   │   ├── product.service.ts         # Service for product-related operations
|   │   │   ├── cart.service.ts            # Service for managing the shopping cart
|   │   │   ├── order.service.ts           # Service for order management
|   │   │   └── payment.service.ts         # Service for Razorpay integration
|   │   ├── models/                        # TypeScript models (e.g., User, Product)
|   │   └── app.module.ts                  # Root module for the Angular app
|   ├── assets/                            # Static files like images and JSON files
|   ├── environments/                      # Environment configurations (e.g., dev, prod)
|
├── angular.json                           # Angular CLI configuration
├── package.json                           # Node.js dependencies and scripts
└── README.md                              # Project documentation
```

---

## Folder Description

- **src/app/components/**: Contains components for various pages and features.
- **src/app/services/**: Houses services that handle business logic and backend communication.
- **src/assets/**: Contains static files such as images and configuration JSON files.
- **src/app/models/**: Defines TypeScript interfaces and models used throughout the application.

---

## Backend Communication

The Angular frontend communicates with the Spring Boot backend running on port `8080` using Angular's `HttpClientModule`. All HTTP requests (GET, POST) for user authentication, product data, order processing, and payment handling are directed to the backend URL `http://localhost:8080`.

**Example API Endpoints**

- `GET /api/products`: Fetches product data.
- `POST /api/orders`: Places an order.
- `POST /api/payment`: Initiates payment through Razorpay.

**CORS Configuration (Backend)**

Ensure that CORS is enabled in the Spring Boot backend to allow communication between the frontend (port `4200`) and backend (port `8080`).

---

## Future Enhancements

- Implement advanced product recommendation algorithms.
- Enable multilingual support for a global audience.
- Add real-time order tracking with live updates.
- Integrate additional payment gateways for wider accessibility.

---

## Contact

Maintainer: Manoj Modhale

- GitHub: [https://github.com/ManojModhale](https://github.com/ManojModhale)
- Email: [manojmodhale2001@gmail.com](mailto:manojmodhale2001@gmail.com)

---
