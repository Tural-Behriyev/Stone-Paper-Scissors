// massive concept
const list=["paper.png","stone.png","scissors.png"]

//Dom doucument object

const paper=document.getElementById('paper')
const stone=document.getElementById('stone')
const scissors=document.getElementById('scissors')

const computerselection=document.getElementById('computer-selection')
const writetheresult=document.getElementById('result')

//the click event is recorded here
paper.onclick=thechoiceisso
stone.onclick=thechoiceisso
scissors.onclick=thechoiceisso


function thechoiceisso() {
    const computer =randomselection()
    const mychoice =this.dataset.id



    if(mychoice ==0 && computer ==0){
        result='Try again'
    }
    else if(mychoice ==1 && computer ==1){
        result ='Try again'
     }
     else if(mychoice ==2 && computer ==2){
        result ='Try again'
     }
    else if(mychoice ==0 && computer ==1){
       result ='You win,congratulations'
    }
    else if(mychoice ==0 && computer ==2){
        result ='You lose,sorry'
     }
     else if(mychoice ==1 && computer ==0){
        result ='You win,congratulations'
     }
     else if(mychoice ==1 && computer ==2){
        result ='You win,congratulations'
     }
     else if(mychoice ==2 && computer ==0){
        result ='You lose,sorry'
     }
     else if(mychoice ==2 && computer ==1){
        result ='You win,congratulations'
     }
     
    
    writetheresult.innerHTML =result
}
function randomselection() {
    const number = Math.round(Math.random()*2)
    computerselection.src =`img/${list[number]}`
    return number
}
