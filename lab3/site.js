// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
      box = checkdel[i]
      var div = this.parentElement;
      box.parentNode.removeChild(box);
      div.style.display = "none";
   }
}

if (document.getElementById("checkbox").checked){
      document.getElementById("todo").style.textDecoration="line-through"
    }
function addItem(){
    var ul = document.getElementById("todo");
    var candidate = document.getElementById("candidate");//название
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);

    var checkbox = document.createElement("INPUT");//check box
    checkbox.setAttribute("type","checkbox");
    checkbox.className = "chkbx";

    var span = document.createElement("SPAN");//trash icon
    var t = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(t);

    li.appendChild(document.createTextNode(candidate.value));
    //document.body.appendChild(checkbox);
    ul.appendChild(checkbox);
    ul.appendChild(li);
    li.appendChild(span);



    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";          
        }
      }
    
}
