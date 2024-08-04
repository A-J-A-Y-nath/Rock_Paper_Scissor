var c_point=0,u_point=0,point;
var Yname=prompt("Enter your name please...");
if(Yname==null || Yname==''){
   Yname="User";
}
var Cname=prompt("If you dont mind suggest a name to computer");
if(Cname==null || Cname==''){
    Cname="Computer";
 }
point=prompt("Upto How Much Marks You Want To Play:");
document.getElementById("userName").innerText=Yname;
document.getElementById("computerName").innerText=Cname;
function game(word){
    let ar=["Rock","Paper","Scissor"];
    var i=Math.floor(Math.random()*3);
    if(word=="Rock"){
        if(word==ar[i]){
            alert("I choose "+ar[i]+"! Tie")
        }
        else if(ar[i]=="Paper"){
            alert("I choose "+ar[i]+"! I win");
            c_point++;
            
        }
        else{
            alert("I choose "+ar[i]+"! You win");
            u_point++
        }
    }
    else if(word=="Paper"){
        if(word==ar[i]){
            alert("I choose "+ar[i]+"! Tie")
        }
        else if(ar[i]=="Scissor"){
            alert("I choose "+ar[i]+"! I win")
            c_point++
        }
        else{
            alert("I choose "+ar[i]+"! You win")
            u_point++;
        }
    }
    else{
        if(word==ar[i]){
            alert("I choose "+ar[i]+"! Tie")
        }
        else if(ar[i]=="Rock"){
            alert("I choose "+ar[i]+"! I win")
            c_point++;
        }
        else{
            alert("I choose "+ar[i]+"! You win")
            u_point++
        }
    }
    
    if(u_point==point){
        document.writeln("Congratulations You Won!")
    }
    if(c_point==point){
        document.writeln("You failed")
        alert("Your score is "+u_point)
    }
    
    document.getElementById("userPoint").innerText=u_point;
    document.getElementById("computerPoint").innerText=c_point;
}
