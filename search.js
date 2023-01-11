function search_dragonfruit() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('column');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}



// fancy features

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




// Change the display
function fruitInside() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Fruit 4.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Fruit 4.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Fruit 4.jpg";
}

function fruitOutside() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Fruit 3.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Fruit 3.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Fruit 3.jpg";
}

function fruitFlowers() {
  document.getElementById("theImage1").src = "varieties/Variety Photos/Vietnam White/Vietnam White - Flower 3.jpg";
  document.getElementById("theImage2").src = "varieties/Variety Photos/Common Red/Common Red - Flower 3.jpg";
  document.getElementById("theImage3").src = "varieties/Variety Photos/Jade Red/Jade Red - Flower 3.jpg";
}
