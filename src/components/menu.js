class Dish {
    constructor(name, description, price, type) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
    }
}

export const menu = new class {
    myMenu = [
        new Dish("Beef Pho", "Pho with beef", "$2.00", "food"),
        new Dish("Chicken Pho", "Pho with chicken", "$1.80", "food"),
        new Dish("Stir-fried Pho", "Beef pho but stir-fried", "$2.00", "food"),
        new Dish("Fried Rice", "Rice is fried with beef and pickles", "$2.50", "food"),
        new Dish("Lime juice", "Juice from freshest lime with cane sugar", "$1.00", "drink"),
        new Dish("Orange juice", "Juice from freshest oranges with cane sugar", "$1.50", "drink")
    ];

    renderMenu() {
        const content = document.querySelector("#content");
        content.innerHTML = `
            <div id="ourmenu">
                <h1>Our Menu</h1>
            </div>
        `;
        const ourMenu = document.querySelector("#ourmenu");
        for (const dish of this.myMenu) {
            const item = document.createElement("div");
            item.className += "items";
            item.innerHTML = `
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <p>${dish.price}</p>
            `;
            ourMenu.appendChild(item);
        }
    }
}
