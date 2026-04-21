/*5. Create a JSON object for an e-commerce cart with multiple products and totalAmount.*/


const cart = {
    cartId: 101,
    customerName: "Rishi",
    products: [
        { productId: 1, productName: "Laptop", price: 50000, quantity: 1 },
        { productId: 2, productName: "Mouse", price: 500, quantity: 2 },
        { productId: 3, productName: "Keyboard", price: 1500, quantity: 1 }
    ],
    totalAmount: 52500
};

console.log(cart);