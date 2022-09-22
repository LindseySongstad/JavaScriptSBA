var products = [
    {name: "beer1", type: "ipa"},
    {name: "beer2", type: "lager"},
    {name: "beer3", type: "red"}
]

function viewBeers(){
    for(let i=0; i < products.length; i++){
        var beer = document.createElement("p");
        beer.innerHTML = "Beer name: " + products[i].name + " Beer type: " + products[i].type;
        document.getElementById("beers").appendChild(beer);
    }
}