
    
    for (let i = 1 ; i<= 100; i ++){
        let myDiv = document.createElement("div");
        let myH3 = document.createElement("h2");
        let myH3Text= document.createTextNode(`Product Title ${i}`) 
        let mypa = document.createElement("p");
        let mypaText= document.createTextNode(`Product Description ${i}`) 
        myDiv.className = "practice";
            myH3.appendChild(myH3Text);
            mypa.appendChild(mypaText);
            myDiv.appendChild(myH3);
            myDiv.appendChild(mypa);
        document.body.appendChild(myDiv)
        }
    

    
