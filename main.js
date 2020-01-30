document.querySelector('#add-new-part-of-card-btn').addEventListener('click', addNewCard);

function addNewCard() {
    //console.log("Hi it is work!")

    let newCard = document.createElement('div');
    newCard.className = "list-header";
    
    let newCardText = document.getElementById('newCardText').value;
    let cardText  = document.createElement('p');
    
    if(newCardText == ""){
        alert("Вы забыли ввести текст задания!");
    }else{
        cardText.textContent = newCardText;
        
        let btn = document.createElement('button');
        btn.textContent = 'Menu';

        newCard.appendChild(cardText);
        newCard.appendChild(btn);
        
        text = document.querySelector('#list-content').appendChild(newCard);
        document.getElementById('newCardText').value = "";
    }
    
    
    

    
}

function inputText(o){
    return o.value;
}