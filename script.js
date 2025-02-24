function addtask(){
    // fetching value 
    let input = document.getElementById("taskinput").value.trim()
    // document.getElementById("task").innerHTML =`<h4>${input}</h4>`
    if(!input){
        alert("Field is empty")
        document.getElementById("taskinput").value=""
        return;
    }

    // creating li
    let listitem = document.createElement("li")
    // listitem.setAttribute("id",`${input}item`)
        listitem.setAttribute("style","list-style: none")
    document.getElementById("task").appendChild(listitem)

    // creating heading 
    let heading = document.createElement("span")
    heading.innerText=`${input}`
    // heading.setAttribute("id", `${input}`)
    heading.setAttribute("style", "display: inline-block; height: 30px; width: 120px; text-align: start; word-wrap: break-word;font-size: 17px; color: white")
    listitem.appendChild(heading)

    // creating edit button 
    let btnEdit = document.createElement("button")
    btnEdit.innerHTML="Edit"
    btnEdit.setAttribute("id", "editbtn")
    btnEdit.setAttribute("style", "margin: 8px 5px; background-color:rgba(3, 3, 194, 0.863); color: white; border: 2px solid rgba(3, 3, 194, 0.863); border-radius: 5px;")
    listitem.appendChild(btnEdit)
    btnEdit.addEventListener("click", function(){
        let editedvalue= prompt("Edit your to-do:").trim()
        if(!editedvalue){
            alert("Empty Field")
        }
        else{
            heading.innerText = editedvalue
        }

    })

    //creating delete button 
    let btnDel = document.createElement("button")
    btnDel.innerHTML="Delete"
    btnDel.setAttribute("id", "deletebtn")
    btnDel.setAttribute("style", "background-color:rgba(3, 3, 194, 0.863); color: white; border: 2px solid rgba(3, 3, 194, 0.863); border-radius: 5px;")
    listitem.appendChild(btnDel)
    btnDel.addEventListener("click", function(){
        listitem.remove()
    })

    // adding new line
    let newline = document.createElement("hr")
    listitem.appendChild(newline)

    // inout value empty 
    document.getElementById("taskinput").value=""
    
}