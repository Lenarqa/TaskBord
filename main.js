//Никогда не использовать класс .creating-tasks-window и .create-new-list
//.creating-tasks-window использован для поиска уникального элемента, который создает новые списки задания.
//.create-new-list используется для возможности переносить задания из одного списка в другой.


function addNewCard(thisTextAreaSpace, thisTaskList) {
    //console.log(thisTextAreaSpace.lastChild);
    let newCard = document.createElement('div');
    newCard.className = "tasks";
    
    let newCardText = $(thisTextAreaSpace.lastChild).val();
    
    let cardText = document.createElement('p');
    cardText.onclick = function() {ChangeToTextArea(this);}
    
    $(thisTaskList).sortable();
    $(newCard).draggable({
        connectToSortable: '.list-content',
        revert: 'invalid'
    }); //позволяет перемещать задания
    


    newCardText1 = newCardText.replace(/\s+/g, '');
    if(newCardText1 == ""){
        alert("Вы забыли ввести текст задания!");
    }else{
        cardText.textContent = newCardText;
        
        //btn
        let btn = document.createElement('button');
        btn.textContent = '...';
        btn.className = 'card-btn'; 
        btn.onclick = function() {deleteThisTask(this)};

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

    listName.placeholder = "Введите первое задание списка";
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
    let textFromTextAreaWrapper = String($(textareaWrapper.firstChild).val()).replace(/\s+/g, '')
    if(textFromTextAreaWrapper == ""){
            alert("Вы забыли ввести текст первого задания!");
    }else{   
        let listContent = document.createElement('div');
        let inputInList = document.createElement('input');
        let textareaInList = document.createElement('textarea');
        let addNewPartOfCard = document.createElement('div');
        let btnAddNewTask = document.createElement('button');

        //btn add new task 
        btnAddNewTask.innerHTML = "+ Добавить новое задание";
        btnAddNewTask.className = "add-new-task-btn";
        btnAddNewTask.onclick = function () {changeBtnAddNewTaskOn(this,addNewPartOfCard)};

        listContent.className = "list-content";
        addNewPartOfCard.className = "add-new-part-of-card";
        inputInList.className = "card-btn";

        textareaInList.placeholder = "Введите задание для карточки"
        
        inputInList.onclick = function(){ 
            addNewCard(inputInList.parentElement, addNewPartOfCard.parentElement);
            $(this.parentElement).replaceWith(btnAddNewTask);
        };

        inputInList.type = "button";
        inputInList.value ="+";

        addNewPartOfCard.appendChild(inputInList);
        addNewPartOfCard.appendChild(textareaInList);

        listContent.appendChild(btnAddNewTask);


        $('#list-wrapper').prepend(listContent);
        btnCancelFun();

        addNewCard(textareaWrapper,listContent);
    }
}

function changeBtnAddNewTaskOn(btnAddNewTask,addNewPartOfCard){
    $(btnAddNewTask).replaceWith(addNewPartOfCard);
}

function deleteThisTask(thisTask){
    
    var trueAnswear = confirm("Удалить текущее задание?");
    
    if(trueAnswear){
        thisTask.parentElement.remove();
    }
}

/*
function showTaskMenu(btn){
    let menu = document.createElement('div');
    menu.className = 'task-btn-menu';
    let deleteTaskText = document.createElement('p');
    deleteTaskText.textContent = "Удалить задание";

    let yesBtn = document.createElement('button');
    
    menu.appendChild(deleteTaskText);
    menu.appendChild(yesBtn);

    $(btn).replaceWith(menu);

    console.log(btn.className);

}
*/