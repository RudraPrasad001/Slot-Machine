let slo1;
let slo2;
let slo3;
let count = 0;
let bal = 50000;
var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");
var thing = document.querySelector(".rolll");
var slots = document.getElementById("slots");
document.getElementById("headingg").textContent="Balance:$50000";

thing.addEventListener("click",function(){
    slot1.classList.add("anim1");
    slot2.classList.add("anim2");
    slot3.classList.add("anim3");
});
slot3.addEventListener("animationend",function(){
    slot1.classList.remove("anim1");
    slot2.classList.remove("anim2");
    slot3.classList.remove("anim3");
});


document.getElementById("roll").onclick=function(){
    
    slo1=Math.floor((Math.random()*6)+1);
    slo2=Math.floor((Math.random()*6)+1);
    slo3=Math.floor((Math.random()*6)+1);
    document.getElementById("slot1").textContent=slo1;
    document.getElementById("slot2").textContent=slo2;
    document.getElementById("slot3").textContent=slo3;
    winornah();
    bal=bal-5000;
    document.getElementById("headingg").textContent="Balance:$"+bal;

}
function winornah(){
if(slo1==slo2 && slo1==slo3)
{
    document.getElementById("result").textContent="YOU WIN!!";
    slots.classList.add("win");
    bal=bal+10000000;

}
else{
    document.getElementById("result").textContent="YOU LOSE!!";

}}