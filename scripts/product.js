var beers = [
    {Image: "light-ipa", Name: "Flotilla", Style: "Summertime IPA", ABV: '5.0'},
    {Image: "ipa", Name: "Homegrown IPA", Style: "IPA", ABV: '5.5'},
    {Image: "imperial-ipa", Name: "Just a Tribute", Style: "Imperial IPA", ABV: '8.0'},
    {Image: "red", Name: "Old Big Red", Style: "Imperial Red", ABV: '7.5'},
    {Image: "belgian", Name: "Manneken Pis", Style: "Belgian Golden Ale", ABV: '7.8'}
    
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
            if(key === "Image"){
                let image = document.createElement("img");
                //image.src="./" + beers[beersI][key]+ ".jpg";
                image.src = "../images/" + beers[beersI][key] + ".jpg"
                image.width = "100";
                beerCol.appendChild(image) 
            }
            else{
                beerCol.innerHTML = beers[beersI][key];
            }
            beerRow.appendChild(beerCol);
            
        }
        document.getElementById("beers").appendChild(beerRow);
    }
}