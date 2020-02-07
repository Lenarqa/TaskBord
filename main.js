function addNewCard() {
    let newCard = document.createElement('div');
   // newCard.className = "list-header";
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
    console.log(pastText);
    $(element).replaceWith("<textarea  cols='20' rows='3' onblur='ChangeToP(this)'>" + pastText + "</textarea>");
}

function ChangeToP(element){
    $(element).replaceWith("<p onclick='ChangeToTextArea(this)'>" + $(element).val() + "</p>");
    let text = element.innerHTML;
}
