//create button
const squareBtn = document.createElement("button");
//Create text "Add Square"
const btnText = document.createTextNode("Add Square");
//Add btnText to squareBtn
squareBtn.appendChild(btnText);
//Grab body
const body = document.body;
//Insert square4Btn into body
body.appendChild(squareBtn);
//Create a container
const divContainer = document.createElement('div');
//Give divContainer className "square-container"
divContainer.className = "square-container"
//insert divContainer into body
body.appendChild(divContainer);
//Create number value
let idNum = 1;
//Create click event listener for squareBtn
squareBtn.addEventListener('click', () => {
    //Create div
    const squareDiv = document.createElement('div');
    //Give div className square
    squareDiv.className = "square";
    //Insert squareDiv into body
    divContainer.appendChild(squareDiv);
    //Give squareDiv id of idNum
    squareDiv.id = idNum;
    //Add 1 to idNum
    idNum++;
})