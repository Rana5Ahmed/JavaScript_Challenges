
    let inputField = document.getElementsByClassName("input")[0]
    let addButton = document.getElementsByClassName("add")[0]
    let tasksDiv = document.getElementsByClassName("tasks") [0]

    window.onload=function(){
        for(let i = 0 ; i< localStorage.length ; i++){
            let key = localStorage.key(i)
            if(key.startsWith("task")){
            let value = localStorage.getItem(key)
            createATask(key,value)
        }}}

    addButton.onclick = function(){
        if (inputField.value !==""){   
            let key = "task-:"+ Date.now()
            let value = inputField.value 
            localStorage.setItem(key, value) 
            createATask(key,value)
            inputField.value=""
    }
    else{
        window.alert("Please, Enter a Valid Task Name")
        }
    }

    function createATask(key,value){
          let eachTaskDiv = document.createElement("div")
        let taskSpan = document.createElement("span")
        let data =  document.createTextNode(value)
        let deleteButton = document.createElement("button")
        let deleteText = document.createTextNode("Delete Task")
        taskSpan.style.padding ="10px"
        eachTaskDiv.style.cssText="display:flex; justify-content:space-between; padding:10px; background-color:white; border-radius:15px; margin:15px;"
        deleteButton.style.cssText ="color: white; background-color:purple; padding: 8px; border-radius: 5px; border:none; font-size: 18px;cursor: pointer;"
        taskSpan.appendChild(data)
        deleteButton.appendChild(deleteText)
        eachTaskDiv.appendChild(taskSpan)
        eachTaskDiv.appendChild(deleteButton)    
        tasksDiv.appendChild(eachTaskDiv)
        deleteButton.onclick=function(){
            eachTaskDiv.remove()
            localStorage.removeItem(key)
        }
    }

