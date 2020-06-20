var y=Math.floor(Math.random()*10+1);
var guess=1;
document.getElementById("submitGuess").onclick=function(){
    var x=document.getElementById("guessField").value;
    if(x==y){
        alert("Congratulation!!! You have guessed it rightin"+ guess + "Guess");
    }
        else if(x>y)
        {
            guess++;
            alert("OOPS Sorry!!! try a smaller number");

        }
        else{
            guess++;
            alert("OOPS Sorry!!! Try a greater Number ");
        }

    
}