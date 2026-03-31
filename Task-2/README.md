## Create a CRUD API for Products
- I created an API using Express.js to manage product data and stored it in MySQL.
- I implemented CRUD operations including create, read, update, and soft delete functionality.
- For database queries, I used placeholders (?) to safely pass user input and avoid security issues.
- I organized the project into folders like routes, controllers, and database for better structure.
- Instead of deleting data permanently, I used soft delete by updating the deleted_at field.
- I fetched only active products by checking deleted_at IS NULL.
- For deployment, I used Railway MySQL (cloud database) and connected it using environment variables.
- I used express.json() to read data sent from the client.
- I tested all APIs using Postman to make sure everything works correctly.

## API Endpoints
- GET /products → Fetch all active products
- POST /products → Add a new product
- PUT /products/:id → Update an existing product
- DELETE /products/:id → Soft delete a product (set deleted_at)

## Environment Variables
# Create .env file 
env```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_db_name
DB_PORT=your_db_port
PORT=5000

## Tech Stack
- Node.js
- Express.js
- MySQL
- Railway (MySQL database hosting)
- Render (Backend deployment)
