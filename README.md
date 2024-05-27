## Description

This backend application relies on the shared ORM library for database configurations and entities. Ensure the shared ORM library is set up and seeded with data before running the backend.


# Frontend

This frontend application fetches and displays a list of users from the backend server. It uses Vue.js for the user interface.

## Setup

1. Clone the repository:
    ```sh
    git clone <repository_url> frontend
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create environment-specific `.env` files:
    - `development.env`
      ```plaintext
      VUE_APP_BACKEND_URL=http://localhost:3000
      DEV_PORT=8080
      ```

    - `production.env`
      ```plaintext
      VUE_APP_BACKEND_URL=http://your-production-backend-url
      DEV_PORT=8080
      ```

4. Link the shared ORM library:
    ```sh
    npm link shared-orm-library
    ```

5. Start the development server:
    ```sh
    npm run serve
    ```

## Description

This frontend application communicates with the backend server to fetch and display user data. Ensure the backend server is running before starting the frontend application.
