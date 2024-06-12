let ch=0;
let vb=0;

document.getElementById('homak').addEventListener('click', function() {
  if(vb==0){
  ch++}
  if(vb==1){
  ch=ch+5}
  if(vb==2){
    ch=ch+20}
  if(vb==3){
    ch=ch+50}
    if(vb==4){
      ch=ch+100}
    
  document.getElementById("shet").innerHTML=ch
  
})
document.getElementById('btng3').addEventListener('click', function() {
   if(ch>=100&&vb==0){
     vb++
     ch=0;
     document.getElementById('btng3').innerHTML="купить буст за 300"
   }
   if(vb==1&&ch>=300){
     vb++
     ch=0;
      document.getElementById('btng3').innerHTML="купить буст за 1000"
   }
   if(vb==2&&ch>=1000){
    vb++
    ch=0;
     document.getElementById('btng3').innerHTML="купить буст за 3000"
  }
  if(vb==3&&ch>=3000){
    vb++
    ch=0;
     document.getElementById('btng3').innerHTML="Закончить квест"
  }
  if(vb==4&&ch>=10000){
    vb++
    ch=0;
    document.querySelector(".gg3").style.display="none"
   
    document.querySelector(".podarok1").style.display="flex"
    document.querySelector(".img2").addEventListener("click",function(){
         document.querySelector(".podarok1").style.display="none"
         document.getElementById("fe").style.display="flex"
         setTimeout(() => {
           document.getElementById("fe").style.display="none"
           document.getElementById("fe1").style.display="flex"
         },10000)
    })
  }
})