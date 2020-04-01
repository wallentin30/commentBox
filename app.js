const userInput = document.getElementById('userInput');
const commentInput = document.getElementById('commentInput');
const sendBtn = document.getElementById('sendBtn');


const comments = [{
    name: userInput,
    msg: ""
}];

function commentContainer() {

    createComment();
    removeComments();

}
let index = 0;

function createComment() {
    const createDiv = document.createElement('div');
    const divLeft = document.createElement('div');
    const divRight = document.createElement('div');
    const h2 = document.createElement('h2');
    const para = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const textBtn = document.createTextNode('Delete')
    createDiv.setAttribute('class', 'showComments');
    createDiv.setAttribute('data-value', index++)
    const imageArray = [
        "<img src='images/avatar.png'>",
        "<img src='images/avatar1.png'>",
        "<img src='images/avatar2.png'>",
        "<img src='images/avatar3.png'>"
    ];

    var ranNum = Math.floor(Math.random() * imageArray.length);

    divLeft.setAttribute('class', 'userPhoto');
    divLeft.innerHTML = imageArray[ranNum];
    divRight.setAttribute('class', 'userComment');
    deleteBtn.setAttribute('class', 'deleteBtn');

    for (let i = 0; i < comments.length; i++) {
        h2.innerHTML = comments[i].name;
        para.innerHTML = comments[i].msg;
        deleteBtn.appendChild(textBtn);

    }
    createDiv.appendChild(divLeft);
    createDiv.appendChild(divRight);
    divRight.appendChild(h2);
    divRight.appendChild(para);
    divRight.appendChild(deleteBtn);

    document.getElementById('commentBox').appendChild(createDiv);

    deleteBtn.addEventListener('click', function(e) {
        e.preventDefault();
            const remItem = document.querySelector('#commentBox');
            const userConfirmation = confirm('Do You really want to delete this comment?');
            if(userConfirmation === true) {
                 remItem.removeChild(createDiv);
            }else {
                return;
            }
        
        
    });
}

sendBtn.addEventListener('click', function(event) {
    event.preventDefault();
    comments.push({
        name: userInput.value,
        msg: commentInput.value
    });

    if (userInput.value === "" || commentInput.value === "") {
        alert("Please fill all inputs!!!");
        return false;
    } else {
        createComment();
    }
})