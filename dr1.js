let textheader="Мы перебрались в более праздничную атмосферу"
let textheader1="Этот сайт полность в твоем распоряжении ,пройдись по сайту исползуя кнопки снизу "
let textheader3="C днем рождения!!!!!!!!"
let s=[textheader,textheader1,textheader3];

function ss(time,i,index){
   
   
    
     setTimeout(() => {
        const interval = setInterval(() => {
            function type(text) {
                document.getElementById("ty").innerHTML += text[index];
                index++;
                console.log(index);
                if (text[index] === undefined) {
                    clearInterval(interval);
                }
            }
            type(s[i]);

        },100)
     },time)
  
     

}
ss(10000,0,0)
setTimeout(() => {
    document.getElementById("ty").innerHTML ="";
},19000)
ss(20000,1,0)
setTimeout(() => {
    document.getElementById("ty").innerHTML ="";
},29000)
ss(30000,2,0)