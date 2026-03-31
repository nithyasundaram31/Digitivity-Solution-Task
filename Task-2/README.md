## I implemented Task 2 and Task 3 in the same API

# Task 2 Explanation
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
- PATCH /products/restore/:id → Restore a soft deleted product

## Environment Variables
## Create .env file 
```env
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_db_name
DB_PORT=your_db_port
PORT=5000
```

## Tech Stack
- Node.js
- Express.js
- MySQL
- Railway (MySQL database hosting)
- Render (Backend deployment)


# Task 3 Explanation
## Soft Delete & Restore Functionality (Task 3)

### 1. Modify Table (deleted_at column)
I added a `deleted_at` column in the products table to track when a product is deleted.


### 2. Soft Delete (Implemented in Task 2)
- In Task 2, instead of permanently deleting a product, I used soft delete.

- When a delete request is made, the `deleted_at` column is updated with the current timestamp.

Example:
UPDATE products SET deleted_at = NOW() WHERE id = ?


---

### 3. Restore Product
To restore a soft-deleted product, I set `deleted_at = NULL`.

-This makes the product active again.
-This functionality is built on bottom of the soft delete implemented in Task 2.
Query used:
UPDATE products SET deleted_at = NULL WHERE id = ? AND deleted_at IS NOT NULL

API:
PATCH /products/restore/:id

---

### 4. Restore Restriction 
I implemented a MySQL trigger :

- A product can only be restored within 30 days
- If it is deleted more than 30 days ago, restore is blocked

Error:
{
  "message": "Cannot restore product after 30 days"
}
