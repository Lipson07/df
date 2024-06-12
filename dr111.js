let textd ="Какой-то идиот заколдавал этот сайт и ты  должна помочь мне раскалдовать сайт"
let texd1 ="Так твоя задача пройти этот мини квест и собрать все волшебные предметы  "
let textd2="поехали"
let sddd=[textd,texd1,textd2];
let penis=document.getElementById('pen')
let gg1=document.querySelector('.g1')
let fgg=0;

const r11=[ 
                       
                 
    
    { transform: 'translateX(0px)' },
    { transform: 'translateX(470px)' }
]
const r21=[
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-235px)' }

]
const r31=[
    { transform: 'translateX(0px)' },
    { transform: 'translateX(-235px)' }
]
const r12=[ 
                       
                 

    { transform: 'translateX(470px)' },
    { transform: 'translateX(-10px)' },

]
const r22=[
    { transform: 'translateX(-235px)' },
    { transform: 'translateX(240px)' }

]
const r32=[
    { transform: 'translateX(-235px)' },
    { transform: 'translateX(-220px)' }
]

const opt={


    duration: 500,
  iterations: 1,
  fill: 'forwards',
  keyframes: r11,
 
}
function ssf(time,i,index) {
    
 setTimeout(() => {
        const interval = setInterval(() => {
            function type(text) {
                document.getElementById("hui").innerHTML += text[index];
                index++;
                console.log(index);
                if (text[index] === undefined) {
                    clearInterval(interval);
                }
            }
            type(sddd[i]);

        },100)

},time)}
if (gg1.style.display =="none") {
    pen.style.top="-300px"
}

pen.addEventListener("click",function loh(){
    if(fgg==0){
    fgg++
    console.log(fgg)
    gg1.style.display="flex"
   pen.classList.add("s")
     gg1.style.top="-250px"
    if (gg1.style.display =="flex") {
        console.log("huiiiiiiiiiiiii")
    
    ssf(10000,0,0)
    setTimeout(() => {
        document.getElementById("hui").innerHTML ="";
    },19000)
    ssf(20000,1,0)
    setTimeout(() => {
        document.getElementById("hui").innerHTML ="";
    },29000)
 
    ssf(29500,2,0)
    setTimeout(() => {
        console.log("пидор")
        document.getElementById("hui").style.cursor="pointer";    
        document.getElementById("hui").addEventListener("click",function(){
             document.querySelector(".redcards").style.display="flex";
             document.getElementById("hui1").style.display="flex";
              gg1.style.top="0px"
              document.getElementById("hui").style.display="none";
             let dfff="Тебе надо найти карточку на которой нарисован крестик"
             let dff1="я готова"
             let r=[dfff,dff1]
             
function sdf(time,i,index,f) {
    console.log(f)
    setTimeout(() => {
           const interval = setInterval(() => {
               function type(text) {
                   document.getElementById("hui1").innerHTML += text[index];
                   index++;
                   console.log(index);
                   if (text[index] === undefined) {
                       clearInterval(interval);
                   }}
                   type(r[i]);
   
                },100)
        
        },time)
                   if(f==1){
                    let s=0;
                    document.getElementById("hui1").style.cursor="pointer";
                   document.getElementById("hui1").addEventListener("click",function(){
                  
                     document.getElementById("krest").classList.remove("krest")
                        document.getElementById("r1").animate(r11,opt)
                        document.getElementById("r2").animate(r21,opt)
                        document.getElementById("r3").animate(r31,opt)
                        setTimeout(() => {
                            document.getElementById("r1").animate(r12,opt)
                            document.getElementById("r2").animate(r22,opt)
                            document.getElementById("r3").animate(r32,opt)
                            s=1;
                            console.log("это"+s)
                            if (s==1) {
                                document.querySelector(".buttonsg1").style.display="flex";
                                document.getElementById("bg11").addEventListener("click",function(){
                                     alert("неа,попробуй еще раз ")
                                     document.querySelector(".buttonsg1").style.display="none";
                                
                                })
                                document.getElementById("bg12").addEventListener("click",function(){
                                   alert("неа,попробуй еще раз ")
                                   document.querySelector(".buttonsg1").style.display="none";
                             
                              })
                              document.getElementById("bg13").addEventListener("click",function(){
                               alert("Молодец")
                               document.querySelector(".g1").style.display="none";
                               document.querySelector(".nh1").innerHTML="Время забирать первый предмет,кликни на него"
                               document.querySelector(".tort").style.display="flex";
                               penis.style.flexDirection="column";
                               penis.classList.remove("s")
                               console.log(penis.classList)
                               penis.style.cursor="default";
                               document.querySelector(".tort").addEventListener("click",function(){
                                document.querySelector(".nav").classList.add("s")
                                document.getElementById("gg2").style.display="flex";
                               })
                               
                         
                          })
       
                            }       
                        },1000)
                          
                  
                     }) 
                     

                       
               }
      
        
   }
   sdf(10000,0,0,0)
   setTimeout(() => {
       document.getElementById("hui1").innerHTML ="";
   },19000)
   sdf(20000,1,0,1)
    

        })},30000)

   

    
    
    
    }      }
})

