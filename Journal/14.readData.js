/*14. Create data.json file to store product list. Read file asynchronously using fs.readFile(). Display product names in console. Handle error properly.*/


const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }

    const products = JSON.parse(data);
    console.log("Product Names:");
    products.forEach(product => {
        console.log(product.productName);
    });
});