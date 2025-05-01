/*
  Loop Challenge
*/

    let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
    let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
    let newAdmins = myAdmins.slice(0,myAdmins.indexOf("Stop"))
    
    // console.log(newAdmins)
    document.write(`<div>We Have ${newAdmins.length} Admins</div>`);
    for (let i = 0 ; i< newAdmins.length; i++){
        document.write(`<hr>`)
        document.write(`<div>`)
        document.write (`The Admin for team ${i+1} Is ${newAdmins[i]}`)
        document.write(`<h3>Team Members</h3>`)
        let team = [];
        for(let j = 0; j< myEmployees.length; j++){
            if(newAdmins[i].charAt(0)=== myEmployees[j].charAt(0)){
                team.push(myEmployees[j])
                document.write(`<p> - ${team.length} ${myEmployees[j]}</p>`)
            }
        }
        document.write(`</div>`)
    }
