//create button
let squareBtn = document.createElement("button");
//Create text "Add Square"
let btnText = document.createTextNode("Add Square");
//Add btnText to squareBtn
squareBtn.appendChild(btnText);
//Grab body
let body = document.body;
//Insert square4Btn into body
body.appendChild(squareBtn);