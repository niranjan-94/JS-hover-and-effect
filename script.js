let cards= {
    data: [
        {
            name: "Monitor 27 '",
            subname: "UltraSharp",
            number:"1",
        },
        {
            name: "Wireless",
            subname: "Charger",
            number:"2",
        },
        {
            name: "Ultra Nice",
            subname: "Home Tea",
            number:"3",
        },
        {
            name: "Super",
            subname: "Keyboard",
            number:"4",
        }
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio reiciendis possimus!",
    productLink: "GET THIS PRODUCT "
};

for(let i of cards.data) {

    //buttons
    let buttons = document.createElement("div");
    buttons.classList.add("button", `button-${i.number}`);
    buttons.innerText = i.number;
    buttons.addEventListener("mouseover",slideUp);
    buttons.addEventListener("mouseout",slideDown);
    document.getElementById("buttons").appendChild(buttons);

    //Card
    let card = document.createElement("div");
    card.classList.add("card", i.number);

    //Card top Container
    let container = document.createElement('div');
    container.classList.add("container");

    //Name div
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name-div");

    //name
    let name = document.createElement("h3");
    name.classList.add("name");
    name.innerText = i.name;

    //sub name
    let subName = document.createElement("h3");
    subName.classList.add("subName");
    subName.innerText = i.subname;

    //adding name and subname to name-div
    nameDiv.appendChild(name);
    nameDiv.appendChild(subName);

    //card number
    let number = document.createElement("div");
    number.classList.add("number");
    number.innerText = i.number;

    //adding nameDive and card number to container
    container.appendChild(nameDiv);
    container.appendChild(number);

    //adding container to card
    card.appendChild(container);

    //description
    let description = document.createElement("div");
    description.classList.add("description");
    description.innerText = cards.description;

    //product Link
    let productLink = document.createElement("div");
    productLink.classList.add("product-link");
    productLink.innerText = cards.productLink;

    //Adding description and product link to card
    card.appendChild(description);
    card.appendChild(productLink);

    //product-link icon
    let icon = document.createElement("span");
    icon.classList.add("icon","material-symbols-outlined");
    icon.innerText = "north_east";
    
    //addding icon to to product link kdiv
    productLink.appendChild(icon);

    //adding card to cards div
    document.getElementById("cards").appendChild(card);

    //Sliding up and down as per hover 
    function slideUp() {
        card.classList.add("test");
    }
    function slideDown() {
        card.classList.remove('test');
    }

}