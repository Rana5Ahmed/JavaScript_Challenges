    /*
    Destructuring
    - Challenge
    */

    let chosen = 3;

    let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
    ];

    if(chosen === 1){
        const [{title,age,available,skills:[,Css]}, , ] = myFriends
        console.log(title);
        console.log(age);
        if(available === true){
            console.log("Available");
        }
        else{
            console.log("Not Available");
        }
        console.log(Css);
    }

    if(chosen === 2){
        const [,{title,age,available,skills:[,Django]}, ] = myFriends
        console.log(title);
        console.log(age);
        if(available === true){
            console.log("Available");
        }
        else{
            console.log("Not Available");
        }
        console.log(Django);
    }

    if(chosen === 3){
        const [ , ,{title,age,available,skills:[,Laravel]}] = myFriends
        console.log(title);
        console.log(age);
        if(available === true){
            console.log("Available");
        }
        else{
            console.log("Not Available");
        }
        console.log(Laravel);
    }

