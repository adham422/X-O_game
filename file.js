let res = document.querySelector("#title");
let square = [];
function end(num1,num2,num3){
    res.innerHTML= `${square[num1]} Winner`;
        document.getElementById(`item${num1}`).style.background = "#000";
        document.getElementById(`item${num2}`).style.background = "#000";
        document.getElementById(`item${num3}`).style.background = "#000";

        setInterval(function(){
            res.innerHTML +='.';
        },1000);

        setTimeout(function(){
            location.reload();
        },4000);

}
function winner(){
    for(let i=1;i<10;i++){
        square[i] = document.getElementById(`item${i}`).innerHTML;
    }
    if(square[1]==square[2] && square[2]==square[3]&&square[1] !=""){
        end(1,2,3);
    }
    else if(square[4]==square[5] && square[4]==square[6]&&square[4] !=""){
        end(4,5,6);
    }
    else if(square[7]==square[8] && square[7]==square[9]&&square[7] !=""){
        end(7,8,9);
    }
    else if(square[1]==square[4] && square[4]==square[7]&&square[1] !=""){
        end(1,4,7);
    }
    else if(square[2]==square[5] && square[5]==square[8]&&square[2] !=""){
        end(2,5,8);
    }
    else if(square[3]==square[6] && square[6]==square[9]&&square[3] !=""){
        end(3,6,9);   
    }
    else if(square[3]==square[5] && square[5]==square[7]&&square[3] !=""){
        end(3,5,7);
    }
    else if(square[1]==square[5] && square[5]==square[9]&&square[1] !=""){
        end(1,5,9);
    }
}
let turn ="X";
function game(id){
    let element = document.getElementById(id);
    if(turn==='X' && element.innerHTML===''){
        element.innerHTML='X';
        turn="O";
        res.innerHTML='O';
    }
    else  if(turn==='O' && element.innerHTML===''){
        element.innerHTML='O';
        turn="X";
        res.innerHTML='X';
    }
    winner();
}