function addNewCard(thisTextAreaSpace, thisTaskList) {
    console.log(thisTextAreaSpace.lastChild);
    let newCard = document.createElement('div');
    newCard.className = "tasks";
    
    let newCardText = $(thisTextAreaSpace.lastChild).val();
    
    let cardText = document.createElement('p');
    cardText.onclick = function() {ChangeToTextArea(this);}
    
    $(newCard).draggable({
        connectToSortable: '.list-content',
    }); //позволяет перемещать задания
    $(thisTaskList).sortable();



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
        
        $(thisTaskList).append(newCard);
        $(thisTextAreaSpace.lastChild).val('');
    }
}



function ChangeToTextArea(element){
    let pastText = element.innerHTML;
    $(element).replaceWith("<textarea  cols='20' rows='3' onblur='ChangeToP(this)'>" + pastText + "</textarea>");
}

function ChangeToP(element){
    let pastText = element.innerHTML;
    let newText = String($(element).val());

    newText = newText.replace(/\s+/g, '');

    if(newText === ""){
        console.log("Пустое поле!");
        $(element).val(pastText);
    }

    $(element).replaceWith("<p onclick='ChangeToTextArea(this)'>" + $(element).val() + "</p>");
   
}

function CreateTaskWindow(){
    let newListContent = document.createElement('div');
    let listName = document.createElement('textarea');
    let btnAddList = document.createElement('button');
    let btnCancel = document.createElement('button');
    let btnWrapper = document.createElement('div');
    let textareaWrapper = document.createElement('div');

    newListContent.className = "creating-tasks-window";
    btnCancel.className = "cancel-btn";

    btnCancel.onclick = btnCancelFun;
    btnAddList.onclick =function(){btnAddNewList(textareaWrapper)};

    listName.placeholder = "Введите заголовок списка";
    btnAddList.textContent = "Добавить список";
    btnCancel.textContent = "X";

    btnWrapper.appendChild(btnAddList);
    btnWrapper.appendChild(btnCancel);

    textareaWrapper.appendChild(listName);
    newListContent.appendChild(textareaWrapper);
    newListContent.appendChild(btnWrapper);
    
    $('.create-new-list').replaceWith(newListContent);
}

function btnCancelFun(){
    let text = "+ Добавить список";
    $('.creating-tasks-window').replaceWith("<button class='create-new-list' onclick='CreateTaskWindow()'>" + text + "</button>");
};

function btnAddNewList(textareaWrapper){
    let listContent = document.createElement('div');
    let inputInList = document.createElement('input');
    let textareaInList = document.createElement('textarea');
    let addNewPartOfCard = document.createElement('div');



    listContent.className = "list-content";
    addNewPartOfCard.className = "add-new-part-of-card";
    inputInList.className = "card-btn";

    textareaInList.placeholder = "Введите задание для карточки"
    
    inputInList.onclick = function(){ addNewCard(inputInList.parentElement,addNewPartOfCard.parentElement);};
    inputInList.type = "button";
    inputInList.value ="+";

    addNewPartOfCard.appendChild(inputInList);
    addNewPartOfCard.appendChild(textareaInList);

    listContent.appendChild(addNewPartOfCard);

    $('#list-wrapper').prepend(listContent);
    //document.querySelector('#list-wrapper').appendChild(listContent);
    btnCancelFun();

    addNewCard(textareaWrapper,listContent);
}