const items=[
        "🍉",
        "🍍",
        "🥭",
        "🍒",
        "🍓",
        "💎",

        
];
const symbolArray=document.querySelectorAll("#symbol")
document.querySelector(".spinner").addEventListener("click",()=>spin());
const jackpot=document.querySelector(".jackpot");
console.log(jackpot.style.visibility)
spin=function(){
    let checker=new Array()
    for(let i=0;i<3;i++){
        let rand=Math.floor(Math.random()*items.length)
        symbolArray[i].innerText=(items[rand]);
        checker.push(rand)
        
    }
    
    if(checker[0]==checker[1]&&checker[0]==checker[2]){
        jackpot.style.visibility="visible";
        jackpot.style.fontSize="70px";
        
    }
    else{
        jackpot.style.visibility="hidden";
        jackpot.style.fontSize="small";
    }
   
}
  
