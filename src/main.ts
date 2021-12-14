// vår egna typ
type WishList = {
    list: string[],
    name:  string,
    location: string
    behaviour: "kind" | "bad" | "neutral";
}

const santasWishlists: WishList[] = [
    {
    list: ["katt", "skor", "tjocktröja"],
    name: 'Elin',
    behaviour: "kind",
    location: "Alingsås"
},
{
    list: ["grafikkort", "träningskläder"],
    name: 'John',
    behaviour: "bad",
    location: "Alingsås"
},
{
    list: ["kött"],
    name: 'Simon',
    behaviour: "neutral",
    location: "Alingsås"
}
];

// här börjar programmet
window.addEventListener("load", main)

function main() {

renderSantasWishLists()

}

function renderSantasWishLists() {
    const main = document.querySelector("main") 
    if (!main) return;
    main.innerText = ""

for (const WishList of santasWishlists){
    const div = createSingleWishListElement(WishList);
    main.append(div);
}
}

/** converts a wishlist data structure to UI element */
function createSingleWishListElement(WishList: WishList){
    const div = document.createElement("div")
    div.className = "wish-list-card"
    const h3 = document.createElement("h3")
    h3.innerText = WishList.name
    div.append(h3)
    
    const ul = document.createElement("ul");
    for (const wish of WishList.list){
    const li = document.createElement("li")
    li.innerText = wish
    ul.append(li);
    }
    div.append(ul)
    return div;
}