let random_no_1=Math.ceil(Math.random()*6);
let random_no_2=Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src",random_no_1+".png")
document.querySelector(".img2").setAttribute("src",random_no_2+".png")

console.log("player 1 got "+random_no_1);
console.log("player 2 got "+random_no_2);
if(random_no_1>random_no_2){
    document.querySelector("h1").innerHTML="PLAYER ONE WON THE MATCH - refresh to play again";
}

else if(random_no_1<random_no_2){
    document.querySelector("h1").innerHTML="PLAYER TWO WON THE MATCH - refresh to play again";
}

else{
    document.querySelector("h1").innerHTML="ITS A DRAW! - refresh to play again";
}