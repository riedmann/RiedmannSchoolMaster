class Car implements ShopableItem {
    constructor(private color: string, private title: string, private price: number) { }
    getColor(): string {
        return this.color;
    }
    getTitle(): string {
        return this.title;
    }

    getPrice(): number {
        return this.price;
    }
}

class Toilet implements ShopableItem {
    constructor(private brand: string, private price: number, private title: string) { }
    getBrand(): string {
        return this.brand;
    }
    getPrice(): number {
        return this.price;
    }
    getTitle(): string {
        return this.title;
    }
}

interface ShopableItem {
    getPrice(): number;
    getTitle(): string;
}

class Shop {
    private products: ShopableItem[] = [];

    addShopableItem(item: ShopableItem): void {
        this.products.push(item);
    }

    showProducts(): void {
        this.products.forEach(product => {
            if (product instanceof Car) {
                console.log(`Title: ${product.getTitle()}, Color: ${product.getColor()}, Price: ${product.getPrice()}`);
            } else if (product instanceof Toilet) {
                console.log(`Title: ${product.getTitle()}, Brand: ${product.getBrand()}, Price: ${product.getPrice()}`);
            }
        });
    }
}
let shop = new Shop();
shop.addCar(new Car("red", "Toyota", 20000));
shop.addCar(new Car("blue", "Honda", 18000));
shop.addToilet(new Toilet("Kohler", 500, "Commode"));
shop.showProducts();