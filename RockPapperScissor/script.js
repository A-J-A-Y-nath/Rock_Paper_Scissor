function game(word){
    let ar=["Rock","Paper","Scissor"];
    var i=Math.floor(Math.random()*3);
    if(word=="Rock"){
        if(word==ar[i]){
            alert("I choose "+ar[i]+"! Tie")
        }
        else if(ar[i]=="Paper"){
            alert("I choose "+ar[i]+"! I win")
        }
        else{
            alert("I choose "+ar[i]+"! You win")
        }
    }
    else if(word=="Paper"){
        if(word==ar[i]){
            alert("I choose "+ar[i]+"! Tie")
        }
        else if(ar[i]=="Scissor"){
            alert("I choose "+ar[i]+"! I win")
        }
        else{
            alert("I choose "+ar[i]+"! You win")
        }
    }
    else{
        if(word==ar[i]){
            alert("I choose "+ar[i]+"! Tie")
        }
        else if(ar[i]=="Rock"){
            alert("I choose "+ar[i]+"! I win")
        }
        else{
            alert("I choose "+ar[i]+"! You win")
        }
    }

}