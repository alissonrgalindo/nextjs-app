
# Nextjs App

This is a project to practice development concepts and techniques.


## Stacks

**Front-end:** React, Redux, NextJS

**Test:** Jest, React Testing Library

**Back-end:** Node


## Functionalities

- Add items to the cart
- List the Products Category
- List of Products
- Add and remove items from the cart
- Calc tax and amount to pay
- Submit the order


## Running Localy

Clone the project

```bash
  git clone https://github.com/alissonrgalindo/nextjs-app
```
Install the dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Run the Tests

```bash
  npm run test
```


## API

#### Returns all products

```http
  GET /api/products/index
```

#### Returns the products inside of the category

```http
  GET /api/products/[category].js
```

#### Use to interact with cart

```function
  dispatch(action())
```

| Action   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `addToCart(product)` | `object` | Add a new item in the cart |
| `incrementQuantity(item.sku)` | `object` | Need inform the sku of the item to be updated |
| `decrementQuantity(item.sku)` | `object` | Need inform the sku of the item to be updated |
| `cleanCart()` | `object` | Remove all items added to the cart |


## Demo

https://nextjs-app-alissonrgalindo.vercel.app/

