const array =JSON.parse(localStorage.getItem("value"))||[];

function add(){
    const text = document.getElementById("text").value;
    array.push({text});
    document.getElementById("text").value="";
    display();
    stores();
}
function display(){
    const lists = document.getElementById("pp");
    lists.innerHTML="";
    for (let i=0; i<array.length;i++){
        lists.innerHTML= `<div><span>
            
            ${array[i].text}<br></span><button onclick ="delet(${i})">remove</button></div>`

    }
}
display();

 function stores(){
        localStorage.setItem("value",JSON.stringify(array));
    }

function delet(i){
    array.splice(i,1);
    stores();
    display();
}
