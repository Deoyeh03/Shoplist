# Shoplist

## Project Description

Shoplist is a RESTful API server for managing products in a shop inventory system. The project follows a layered architecture, separating concerns into controllers, services, repositories, and models. It uses Node.js, Express, and MongoDB (via Mongoose) to provide endpoints for creating, reading, updating, and deleting products.

## Features

- Add new products with details such as name, price, description, SKU, and quantity.
- Retrieve all products or a specific product by ID.
- Update product information.
- Delete products from the inventory.
- Input validation and error handling.
- CORS support for cross-origin requests.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

## Project Structure

```
server/
  .env
  package.json
  server.js
  config/
    db.js
  controller/
    product.js
  middlewares/
    mid.js
  model/
    product.js
  repositories/
    productRepo.js
  routes/
    product.js
  services/
    productService.js
```

## Getting Started

1. **Clone the repository**
   ```
   git clone https://github.com/Deoyeh03/shop-list.git
   cd shop-list/server
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**
   - Edit `.env` to set your `PORT` and `MONGODB_URI`.

4. **Start the server**
   ```
   npm run dev
   ```
   The server will run on the port specified in `.env` (default: 9000).

## API Endpoints

- `GET /api/product` - Get all products
- `GET /api/product/:id` - Get product by ID
- `POST /api/product` - Create a new product
- `PUT /api/product/:id` - Update a product
- `DELETE /api/product/:id` - Delete a product

## License

This project is licensed under the ISC License.

## Author

Deoyeh03
