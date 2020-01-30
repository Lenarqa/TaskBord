//document.querySelector('#add-new-part-of-card-btn').addEventListener('click', addNewCard);

function addNewCard() {
    let newCard = document.createElement('div');
    newCard.className = "list-header";
    
    let newCardText = document.getElementById('newCardText').value;
    //let newCardText = $('#newCardText').data('placeholder');
    
    let cardText  = document.createElement('p');
    cardText.className = 'p-change-class';
    cardText.onclick = function(){changePtoTextArea()};
    
    
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

/*
$(document).ready(function(){
    $('.p-change-class').on('click', function(){
        console.log('its work!');
        let pastText = $(this).text();
        $(this).replaceWith("<textarea id='textareaToP' cols='20' rows='10' onclick='changeTextAreaToP()'>" + pastText + "</textarea>");
    });
});
*/

function changePtoTextArea(){
    let pastText = $('.p-change-class').text();
    $('.p-change-class').replaceWith("<textarea id='textareaToP' cols='20' rows='10' onclick='changeTextAreaToP()'>" + pastText + "</textarea>");
    //$('.textareaToP').replaceWith("<p class='p-change-class'>" + pastText + "</p>");
    pastText = "";
}

function changeTextAreaToP(){
        let pastText = $('#textareaToP').text();
        $('#textareaToP').replaceWith("<p class='p-change-class' onclick='changePtoTextArea()'>" + pastText + "</p>");
        pastText = "";
}

//$('.list-content').on('click', '#textareaToP', changeTextAreaToP());




/*
function inputText(o){
    return o.value;
}
*/
//jquery
//селекторы 'tag' '.класс' '#id'
//
//$('.add-new-part-of-card , header').css({'border':'1px solid yellow'});