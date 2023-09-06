const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
//I have got node List not html collection so i can use foreEach
buttons.forEach((button)=>{
    console.log(button);
    //On each button we apply event listener, e is event 
    button.addEventListener('click', (e)=>{
            console.log(e);
            console.log(e.target);//It tells from which target event is coming
            if(e.target.id==='grey'){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==='white'){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==='blue'){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==='yellow'){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==='purple'){
                body.style.backgroundColor=e.target.id;
            }
        })
})
