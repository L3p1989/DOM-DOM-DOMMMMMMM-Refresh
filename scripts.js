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
    //Create span
    const span = document.createElement('span');
    //Create text
    const spanText = document.createTextNode(idNum);
    //Give span className "tooltip"
    span.className = "tooltip";
    //Insert spanText into span
    span.appendChild(spanText);
    //Insert span into squareDiv
    squareDiv.appendChild(span);
    //Add 1 to idNum
    idNum++;
    //add click event listener to squareDiv
    squareDiv.addEventListener('click', () => {
        //make r a random number from 0-255
        const r = Math.floor(Math.random() * 256);
        //make g a random number from 0-255
        const g = Math.floor(Math.random() * 256);
        //make b a random number from 0-255
        const b = Math.floor(Math.random() * 256);
        //make squareDiv bg-color a combination of `r`, `g`, and `b`
        squareDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});