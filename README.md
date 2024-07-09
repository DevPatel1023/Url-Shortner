# URL Shortener

A URL shortener application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a simple URL shortener application. Users can input a long URL, and the application will generate a shorter version of that URL. This is useful for sharing long URLs in a more compact form.

## Features

- Shorten long URLs
- Redirect short URLs to the original long URLs
- User authentication (Log in/Log out)
- View all shortened URLs (for the authenticated user)

## Technologies

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Routing:** React Router
- **Version Control:** Git

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DevPatel1023/Url-Shortner.git
    cd Url-Shortner
    ```

2. **Install dependencies for the backend:**

    ```bash
    cd server
    npm install
    ```

3. **Install dependencies for the frontend:**

    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add your MongoDB connection string and any other necessary environment variables.

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

5. **Run the backend server:**

    ```bash
    cd server
    npm start
    ```

6. **Run the frontend development server:**

    ```bash
    cd ../client
    npm start
    ```

## Usage

1. **Access the application:**

    Open your browser and go to `http://localhost:3000`.

2. **Shorten a URL:**

    Enter a long URL in the input field and click the "Shorten" button to generate a short URL.

3. **Log in/Log out:**

    Use the "Log in" button to authenticate yourself and access additional features.

## Project Structure

Url-Shortner/
├── client/
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── UrlShortener.jsx
│ │ ├── About.jsx
│ │ ├── Login.jsx
│ │ └── NoPage.jsx
│ ├── App.css
│ ├── App.js
│ └── index.js
├── server/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── index.js
└── README.md


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out.

- **Email:** [your-email@example.com](mailto:your-email@example.com)
- **GitHub:** [DevPatel1023](https://github.com/DevPatel1023)
