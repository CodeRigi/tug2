const bugger = document.querySelector('.bugger');

bugger.addEventListener('click', ()=>{
    
})


const accordion = document.getElementsByClassName('contentBx')

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}