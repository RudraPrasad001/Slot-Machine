let slo1;
let slo2;
let slo3;
let count = 0;

document.getElementById("roll").onclick=function(){
    slo1=Math.floor((Math.random()*6)+1);
    slo2=Math.floor((Math.random()*6)+1);
    slo3=Math.floor((Math.random()*6)+1);
    document.getElementById("slot1").textContent=slo1;
    document.getElementById("slot2").textContent=slo2;
    document.getElementById("slot3").textContent=slo3;
    winornah();
    document.getElementById("try").textContent=count;
}
function winornah(){
if(slo1==slo2 && slo1==slo3)
{
    document.getElementById("result").textContent="YOU WIN!!";
    count=0;
}
else{
    document.getElementById("result").textContent="YOU LOSE!!";
    count++;
}}