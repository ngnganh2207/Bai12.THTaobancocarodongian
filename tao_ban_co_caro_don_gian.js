let b=document.getElementById("carogame");
let board=[];
let data="";
for (let i=0;i<5;i++){
    board[i]=new Array(0,0,0,0,0);
}

for(let i=0;i<5;i++){
    data+="<br/>";
    for(let j=0;j<5;j++){
        data+=board[i][j]+"&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}
data+="<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML=data;

function  changeValue(){
    let positionRowX= prompt("X: ");
    let positionCollumY= prompt("Y: ");
    data="";
    //board[0][0]=1;
    board[positionRowX][positionCollumY]="x";//tại sao phải để đầu mà k để cuối được
    for(let i=0;i<5;i++){
        data+="<br/>";
        for(let j=0;j<5;j++){
            data+=board[i][j]+"&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data+="<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML =data;
}

