import { Router } from 'express';


import * as UserController from '../controllers/user.controller';

import * as ProductsController from '../controllers/products.controller';

import * as CategoriesController from '../controllers/categories.controller'; 

import * as CartController from '../controllers/cart.controller'; 

import * as OrderController from '../controllers/orders.controller'; 

const router = new Router();

//Users
router.route('/createUser').post(UserController.createUser);

router.route('/getUsers').post(UserController.getUsers);

//Products
router.route('/createProducts').post(ProductsController.createProducts);

router.route('/getProducts').post(ProductsController.getProducts);

//categories
router.route('/createCategory').post(CategoriesController.createCategory);
router.route('/getCategory').post(CategoriesController.getCategory);

//Cart
router.route('/createCart').post(CartController.createCart);
router.route('/getCart').post(CartController.getCart);
router.route('/deleteCart/:cart_id').delete(CartController.deleteCart);

//router.route('deleteCart').post(CartController.deleteCart);

//orders
router.route('/createOrder').post(OrderController.createOrder);
router.route('/getOrders').post(OrderController.getOrders);

export default router;


