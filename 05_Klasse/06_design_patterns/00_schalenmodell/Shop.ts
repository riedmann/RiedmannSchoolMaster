import { Car } from "./Car";
import { Product } from "./Product";
import { TV } from "./TV";

const products: Product[] = [];

products.push(new TV("Samsung TV", 499.99));
products.push(new Car("Tesla Model 3", 39999.99));
products.push(new TV("LG TV", 299.99));

export function addProduct(product: Product) {
  products.push(product);
}

export function getProducts(): Product[] {
  return products;
}

export function showProducts() {
  const products = getProducts();
  for (const product of products) {
    console.log(`Title: ${product.getTitle()}, Price: ${product.getPrice()}`);
  }
}

showProducts();

products[0].getPrice(); // 499.99
products[0].getTitle(); // "Samsung TV"
