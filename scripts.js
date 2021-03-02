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
//Create click event listener for squareBtn
squareBtn.addEventListener('click', () => {
    //Create div
    let squareDiv = document.createElement('div');
    //Give div className square
    squareDiv.className = "square";
    //Insert squareDiv into body
    body.appendChild(squareDiv);
})