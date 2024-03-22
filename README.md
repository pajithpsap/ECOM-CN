# eCommerceAPI
eCommerceAPI is a RESTful API built with Node.js, Express, and MongoDB. It provides the backend functionality for an eCommerce web application, allowing admin to create products, update their quantity, browse and delete them.

## Installation 
To install ECOM CN, please follow these steps:

Clone this repository using the following command:
```
$ git clone https://github.com/pajithpsap/ECOM-CN.git
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ node app.js 
```
Open POSTMAN on this port, and follow the command in the features section:
```
$ http://localhost:3000 
```

## Features
* To create a product -> POST:  http://localhost:3000/products
* To view all products -> GET:  http://localhost:3000/products
* To update a product's quantity -> POST:  http://localhost:3000/products/:id
   ``` (id represents the id of the product, value is the desired quantity)```
* To delete a product -> DELETE:  http://localhost:3000//products/:id

## Folder Structure
```
backend      
    |
    |--->src-->product|-->controllers-->|-->product.controller.js         
    |                 |-->model-->|-->product.schema.js            
    |                 |-->routes-->|-->productRoutes.js
    |--->app.js                                        
node_modules
package-lock.json
package.json
readme.md
```
