function addNewCard() {
    let newCard = document.createElement('div');
    newCard.className = "tasks";
    
    let newCardText = document.getElementById('newCardText').value;
    
    let cardText = document.createElement('p');
    cardText.onclick = function() {ChangeToTextArea(this);}
    
    if(newCardText == ""){
        alert("Вы забыли ввести текст задания!");
    }else{
        cardText.textContent = newCardText;
        
        //btn
        let btn = document.createElement('button');
        btn.textContent = '...';
        btn.className = 'card-btn';

        newCard.appendChild(cardText);
        newCard.appendChild(btn);
        
        text = document.querySelector('#list-content').appendChild(newCard);
        document.getElementById('newCardText').value = "";
    }
}


function ChangeToTextArea(element){
    let pastText = element.innerHTML;
    $(element).replaceWith("<textarea  cols='20' rows='3' onblur='ChangeToP(this)'>" + pastText + "</textarea>");
}

function ChangeToP(element){
    $(element).replaceWith("<p onclick='ChangeToTextArea(this)'>" + $(element).val() + "</p>");
    let text = element.innerHTML;
}

function CreateTaskWindow(){
    let newListContent = document.createElement('div');
    let listName = document.createElement('textarea');
    let btnAddList = document.createElement('button');
    let btnCancel = document.createElement('button');
    let btnWrapper = document.createElement('div');

    newListContent.className = "creating-tasks-window";
    listName.className = "textarea";
    btnCancel.className = "cancel-btn";

    btnCancel.onclick = btnCancelFun;

    listName.placeholder = "Введите заголовок списка";
    btnAddList.textContent = "new tasks";
    btnCancel.textContent = "X";

    btnWrapper.appendChild(btnAddList);
    btnWrapper.appendChild(btnCancel);

    newListContent.appendChild(listName);
    newListContent.appendChild(btnWrapper);
    
    //document.querySelector('#list-wrapper').appendChild(newListContent);
    $('.create-new-list').replaceWith(newListContent);
}

function btnCancelFun(){
    let text = "+ Добавить список";
    $('.creating-tasks-window').replaceWith("<button class='create-new-list' onclick='CreateTaskWindow()'>" + text + "</button>");
};
