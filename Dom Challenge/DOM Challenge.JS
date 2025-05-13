    
    
    let headerElement = document.createElement("header");
    headerElement.style.cssText="display:flex; justify-content:space-between; align-items: center; "

    let logo = document.createElement("span");
    let LogoText = document.createTextNode("Elwakeel")
    logo.appendChild(LogoText)
    logo.className = "logo"
    logo.style.cssText =" color: rgb(74, 16, 42); font-size: 48px; font-weight:bold ; margin : 20px; font-family: 'Brush Script MT', cursive; "

    let nav = document.createElement("nav")
    let list = document.createElement("ul") 
    list.className = "list"
    list.style.cssText ="list-style: none; display: flex; gap: 40px;padding-right:50px; color: gray; font-size:24px; font-weight: bold"
    let listItemsHome = document.createElement("li") 
    let listItemsHomeText = document.createTextNode("Home")
    listItemsHome.appendChild(listItemsHomeText)
    list.appendChild(listItemsHome)

    let listItemsAbout = document.createElement("li") 
    let listItemsAboutText = document.createTextNode("About")
    listItemsAbout.appendChild(listItemsAboutText)
    list.appendChild(listItemsAbout)

    let listItemsService = document.createElement("li") 
    let listItemsServiceText = document.createTextNode("Service")
    listItemsService.appendChild(listItemsServiceText)
    list.appendChild(listItemsService)
    
    let listItemsContact = document.createElement("li") 
    let listItemsContactText = document.createTextNode("Contact")
    listItemsContact.appendChild(listItemsContactText)
    list.appendChild(listItemsContact)

    headerElement.appendChild(logo)
    nav.appendChild(list)
    headerElement.appendChild(nav)
    document.body.appendChild(headerElement)

    let parentDiv = document.createElement("div")
    parentDiv.className ="Parent"
    parentDiv.style.cssText = "display: grid; grid-template-columns:repeat(3,1fr); gap:15px 5px  ; background-color:#D3D3D3; text-align: center; min-height: 500px; padding: 30px;"
    
    for (let i = 1; i<=15; i++){
        let childDiv = document.createElement("div")
        let childDivpnumber = document.createElement("p")
        let childDivnumbertext = document.createTextNode(`${i}`)
        childDivpnumber.appendChild(childDivnumbertext)
        let childDivSpannumber = document.createElement("span")
        let childDivSpannumberText = document.createTextNode(`Product`)
        childDivSpannumber.appendChild(childDivSpannumberText)
        childDivpnumber.style.cssText = "font-weight: bold; font-size:32px ;font-family: Georgia; margin-top:10px; margin-bottom:10px"
        childDivSpannumber.style.cssText = "color:#878787; font-size:18px"
        childDiv.appendChild(childDivpnumber)
        childDiv.appendChild(childDivSpannumber)

        childDiv.style.cssText = "background-color:white; max-width:400px; width:100%; height:100px; margin: 0 auto;";
        parentDiv.appendChild(childDiv)
    }
        document.body.appendChild(parentDiv)
        
        let footer = document.createElement("footer")
        let footerText= document.createTextNode("Copyright 2025")
        footer.style.cssText = "width:100%;max-height:100px; background-color: rgb(74, 16, 42); color:white; text-align:center;   font-family: Courier, monospace; padding:30px 0; font-size: 32px; font-weight: bold"
        footer.appendChild(footerText)
        document.body.appendChild(footer)

