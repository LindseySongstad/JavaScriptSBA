var beers = [
    {name: "beer1", type: "ipa", abv: '7.0'},
    {name: "beer2", type: "lager", abv: '5.5'},
    {name: "beer3", type: "red", abv: '5.0'}
]

function viewBeers(){
    let headRow = document.createElement('tr');
    for(let key in beers[0]){
        let headCol = document.createElement('th');
        headCol.innerHTML = key;
        headRow.appendChild(headCol);
    }
    document.getElementById("beers").appendChild(headRow);
    for(let beersI = 0; beersI < beers.length; beersI++ ){
        let beerRow = document.createElement("tr");
        for(let key in beers[beersI]){
            let beerCol = document.createElement("td");
            beerCol.innerHTML = beers[beersI][key];
            beerRow.appendChild(beerCol);
        }
        document.getElementById("beers").appendChild(beerRow);
    }
}