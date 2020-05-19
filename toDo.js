function onClick(){
    var text = document.getElementById("newTask").value;

    var x = document.createElement("LI");
    var t = document.createTextNode(text);
    var u = document.createElement("button");
    var v = document.createElement("INPUT");
    v.setAttribute("type", "checkbox");
    v.setAttribute("class","check");
    u.innerHTML= "X";
    u.onclick = function() {removeFunction()};
    x.appendChild(t);
    x.appendChild(u);
    x.appendChild(v);
    document.getElementById("list").appendChild(x);

    var items = document.getElementById("list").getElementsByTagName("LI");
    document.getElementById("output").value = items.length;
}
function removeFunction(){
    list.removeChild(event.target.parentElement);
    var items = document.getElementById("list").getElementsByTagName("LI");
    document.getElementById("output").value = items.length;
}
