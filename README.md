# restAPI
REST API using Nodejs , Expressjs, MongoDB and Mongoose

Product API

This is a REST API built using MongoDB, Express, Node.js, and Mongoose. The API provides endpoints to manage products with functionalities including getting all products, sorting, searching, advanced search, pagination, and limits.
Table of Contents

    Installation
    Usage
    Endpoints
    Technologies Used

Installation

git clone https://github.com/ManashSwain/restAPI.git

Navigate to the project directory


cd restAPI

Install dependencies

npm install

Create a .env file in the root directory and add the following environment variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the server

    npm start

Usage

After starting the server, you can use tools like Postman or cURL to interact with the API. The server will be running on http://localhost:5173.
Endpoints
Get All Products

    URL: /api/products
    Method: GET
    Description: Get a list of all products with optional sorting, searching, advanced search, pagination, and limits.
    Query Parameters:
        sort (string): Field to sort by. Prefix with - for descending order.
        search (string): Keyword to search in product names.
        fields (string): Comma-separated list of fields to return.
        page (number): Page number for pagination.
        limit (number): Number of items per page.
      

Example Request:

/api/products?sort=price&company=apple&select=name,price&page=1&limit=2
GET 

Example Response:

json

{"myData":[{"_id":"6661436cb4d16da7eccd0635","name":"iwatch","price":6492},{"_id":"6661436cb4d16da7eccd0634","name":"ipad","price":6576}]}



Technologies Used

    Node.js
    Express
    MongoDB
    Mongoose

    Live link : The project is live at : https://rest-api-woad-pi.vercel.app/api/products

In case of any queries pleasse react out to me at manash0802@gmail.com .