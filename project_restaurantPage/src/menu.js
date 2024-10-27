const content = document.querySelector("#content")

const beverageItems = [
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
]

const mainDishes = [
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    },
    {
        itemName: "Item Name",
        itemDesc: "Item Description",
        itemCost: "$5",
        itemImg: "./something.example"
    }
]


export function showMenu() {

    const outerContainer = document.createElement("div");
    outerContainer.setAttribute("class", "outer-container title");
    content.appendChild(outerContainer);


    const heading = document.createElement("div");
    heading.textContent = "MENU";
    heading.setAttribute("class", "heading");
    outerContainer.appendChild(heading);

    const beveragesOuterContainer = document.createElement("div");
    beveragesOuterContainer.setAttribute("class", "outer-container outer-beverages-title");
    content.appendChild(beveragesOuterContainer);


    const beveragesInnerContainer = document.createElement("div");
    beveragesInnerContainer.setAttribute("class", "inner-container inner-beverages-title");
    beveragesInnerContainer.textContent = "Beverages"
    beveragesOuterContainer.appendChild(beveragesInnerContainer);

    for(let i = 0; i < beverageItems.length; i++) {
        const outerContainer = document.createElement("div");
        outerContainer.setAttribute("class", "outer-container");
        content.appendChild(outerContainer);

        const innerContainer = document.createElement("div");
        innerContainer.setAttribute("class", "inner-container");
        outerContainer.appendChild(innerContainer);

        const itemContainer = document.createElement("div");
        itemContainer.setAttribute("class", "item-container");
        innerContainer.appendChild(itemContainer);


        const itemDetails = document.createElement("div");
        itemDetails.setAttribute("class", "item-details");
        itemContainer.appendChild(itemDetails);

        const itemName = document.createElement("p");
        itemName.setAttribute("class", "item-name");
        itemName.textContent = `${beverageItems[i].itemName}`;
        itemDetails.appendChild(itemName);


        const itemDesc = document.createElement("p");
        itemDesc.setAttribute("class", "item-desc");
        itemDesc.textContent = `${beverageItems[i].itemDesc}`;
        itemDetails.appendChild(itemDesc);


        const itemCost = document.createElement("p");
        itemCost.setAttribute("class", "item-cost");
        itemCost.textContent = `${beverageItems[i].itemCost}`;
        itemDetails.appendChild(itemCost);

        const imgBox = document.createElement("div");
        imgBox.setAttribute("class", "img-box")
        itemContainer.appendChild(imgBox)

        const img = document.createElement("img");
        img.setAttribute("src", `${beverageItems[i].itemImg}`)
        img.setAttribute("alt", `image of item`)
        img.setAttribute("class", `image`)
        imgBox.appendChild(img)
        
    }

    const mainDishesOuterContainer = document.createElement("div");
    mainDishesOuterContainer.setAttribute("class", "outer-container outer-main-dishes-title");
    content.appendChild(mainDishesOuterContainer);


    const mainDishesInnerContainer = document.createElement("div");
    mainDishesInnerContainer.setAttribute("class", "inner-container inner-main-dishes-title");
    mainDishesInnerContainer.textContent = "Main Dishes"
    mainDishesOuterContainer.appendChild(mainDishesInnerContainer);


    for(let i = 0; i < mainDishes.length; i++) {
        const outerContainer = document.createElement("div");
        outerContainer.setAttribute("class", "outer-container");
        content.appendChild(outerContainer);

        const innerContainer = document.createElement("div");
        innerContainer.setAttribute("class", "inner-container");
        outerContainer.appendChild(innerContainer);

        const itemContainer = document.createElement("div");
        itemContainer.setAttribute("class", "item-container");
        innerContainer.appendChild(itemContainer);


        const itemDetails = document.createElement("div");
        itemDetails.setAttribute("class", "item-details");
        itemContainer.appendChild(itemDetails);

        const itemName = document.createElement("p");
        itemName.setAttribute("class", "item-name");
        itemName.textContent = `${mainDishes[i].itemName}`;
        itemDetails.appendChild(itemName);


        const itemDesc = document.createElement("p");
        itemDesc.setAttribute("class", "item-desc");
        itemDesc.textContent = `${mainDishes[i].itemDesc}`;
        itemDetails.appendChild(itemDesc);


        const itemCost = document.createElement("p");
        itemCost.setAttribute("class", "item-cost");
        itemCost.textContent = `${mainDishes[i].itemCost}`;
        itemDetails.appendChild(itemCost);

        const imgBox = document.createElement("div");
        imgBox.setAttribute("class", "img-box")
        itemContainer.appendChild(imgBox)

        const img = document.createElement("img");
        img.setAttribute("src", `${mainDishes[i].itemImg}`)
        img.setAttribute("alt", `image of ${mainDishes[i].itemName}`)
        img.setAttribute("class", `image`)
        imgBox.appendChild(img)
        
    }

}