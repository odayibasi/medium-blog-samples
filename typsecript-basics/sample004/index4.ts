class Order {
    name: string;
    cost: number;
    total: number;
    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }

    static tax = 0.18;
    static calculateTotal(order: Order): number {
        return order.cost + order.cost * this.tax;
    }

}

const elma = new Order('elma', 10);
console.log(Order.calculateTotal(elma))