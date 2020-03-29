const userInput = document.getElementById('userInput');
const commentInput = document.getElementById('commentInput');
const sendBtn = document.getElementById('sendBtn');

//define the comment object
const comments = [
    {
        name: userInput,
        msg: "",
        id: ""
    }
];

function commentContainer() {
    
   createComment();
}

function createComment() {
    
    
    
    
    const createDiv = document.createElement('div');
    const divLeft = document.createElement('div');
    const divRight = document.createElement('div');
    const h2 = document.createElement('h2');
    const para =  document.createElement('p');
    const deleteBtn = document.createElement('button');
    const textBtn = document.createTextNode('Delete')
    createDiv.setAttribute('class','showComments');
    var index = 0;

    createDiv.setAttribute('data-value', index++)
   
    var new;
    divLeft.setAttribute('class','userPhoto')
    divLeft.innerHTML = "<img src='images/avatar.png'>";

    divRight.setAttribute('class','userComment');
    deleteBtn.setAttribute('class', 'deleteBtn');
    
    
    
    for(let i=0; i < comments.length; i++) {
        
        h2.innerHTML = comments[i].name;
        para.innerHTML = comments[i].msg;
        deleteBtn.appendChild(textBtn)
        
       
    }

    createDiv.appendChild(divLeft);
    createDiv.appendChild(divRight);
    
    divRight.appendChild(h2);
    divRight.appendChild(para);
    divRight.appendChild(deleteBtn)
 
    document.getElementById('commentBox').appendChild(createDiv);
       
    deleteBtn.addEventListener('click', function(e) {
        e.preventDefault();
    
         
        
    })

}



sendBtn.addEventListener('click', function(event){
   event.preventDefault();
    comments.push(
        {
            name: userInput.value,
            msg: commentInput.value
            
        }
    )
    createComment()

})


 





















