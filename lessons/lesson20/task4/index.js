export class Order {
    constructor(priceNumber, cityName, orderType) {
        this.id = String(Math.random().toFixed(4) * 10000);
        this.price = priceNumber;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = "";
        this.city = cityName;
        this.type = orderType;
    }

    checkPrice() {
        return this.price > 1000;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        if (this.type === "Buy" || this.type === "Sell") {
            return true;
        }
        return false;
    }
}