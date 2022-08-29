"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liked = exports.cart = exports.discounted_sales = exports.site_data = void 0;
var site_data = [{
  category: "clothes",
  brand: "shoes",
  img: require("./images/products/1.jpg"),
  price: 200,
  id: "product1",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "suit",
  img: require("./images/products/2.jpg"),
  price: 1000,
  id: "product2",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "wristwatch",
  img: require("./images/products/3.jpg"),
  price: 50,
  id: "product3",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "wristwatch",
  img: require("./images/products/4.jpg"),
  price: 60,
  id: "product4",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "suit",
  img: require("./images/products/5.jpg"),
  price: 800,
  id: "product5",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shoe",
  img: require("./images/products/6.jpg"),
  price: 200,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shirt",
  img: require("./images/products/20.png"),
  price: 100,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "wristwatch",
  img: require("./images/products/7.jpg"),
  price: 200,
  id: "product1",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shoe",
  img: require("./images/products/8.jpg"),
  price: 250,
  id: "product2",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shoe",
  img: require("./images/products/9.jpg"),
  price: 400,
  id: "product3",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "wristwatch",
  img: require("./images/products/10.jpg"),
  price: 3000,
  id: "product4",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "wristwatch",
  img: require("./images/products/11.jpg"),
  price: 400,
  id: "product5",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shoe",
  img: require("./images/products/12.jpg"),
  price: 500,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shirt",
  img: require("./images/products/13.jpg"),
  price: 300,
  id: "product1",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "suit",
  img: require("./images/products/14.jpg"),
  price: 500,
  id: "product2",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "suit",
  img: require("./images/products/15.jpg"),
  price: 900,
  id: "product3",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shirt",
  img: require("./images/products/16.jpg"),
  price: 70,
  id: "product4",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "suit",
  img: require("./images/products/17.jpg"),
  price: 1000,
  id: "product5",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shoe",
  img: require("./images/products/18.jpg"),
  price: 30,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "trouser",
  img: require("./images/products/19.jpg"),
  price: 400,
  id: "product1",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shirt",
  img: require("./images/products/20.png"),
  price: 1000,
  id: "product2",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "trouser",
  img: require("./images/products/21.jpg"),
  price: 500,
  id: "product3",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "bag",
  img: require("./images/products/22.jpg"),
  price: 100,
  id: "product4",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shades",
  img: require("./images/products/23.jpg"),
  price: 20,
  id: "product5",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "bag",
  img: require("./images/products/24.jpg"),
  price: 120,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "glasses",
  img: require("./images/products/25.jpg"),
  price: 50,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "bag",
  img: require("./images/products/26.jpg"),
  price: 50,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "glasses",
  img: require("./images/products/27.jpg"),
  price: 50,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shades",
  img: require("./images/products/28.jpg"),
  price: 50,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shades",
  img: require("./images/products/29.jpg"),
  price: 60,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "glasses",
  img: require("./images/products/30.jpg"),
  price: 50,
  id: "product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}];
exports.site_data = site_data;
var discounted_sales = [{
  category: "clothes",
  brand: "shoe",
  img: require("./images/products/12.jpg"),
  price: 200,
  id: "discounted_product1",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  discount: 7,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "suit",
  img: require("./images/products/15.jpg"),
  price: 1000,
  id: "discounted_product2",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  discount: 5,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "trouser",
  img: require("./images/products/19.jpg"),
  price: 100,
  id: "discounted_product3",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  discount: 12,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "shoe",
  img: require("./images/products/1.jpg"),
  price: 300,
  id: "discounted_product4",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  discount: 5,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "suit",
  img: require("./images/products/2.jpg"),
  price: 1000,
  id: "discounted_product5",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  discount: 8,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}, {
  category: "clothes",
  brand: "wristwatch",
  img: require("./images/products/4.jpg"),
  price: 200,
  id: "discounted_product6",
  quantity: 0,
  liked: require("./images/favourite1.png"),
  discount: 5,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui pariatur omnis. Architecto aspernatur, rem tempore illo deleniti alias ullam!"
}];
exports.discounted_sales = discounted_sales;
var cart = [];
exports.cart = cart;
var liked = [];
exports.liked = liked;