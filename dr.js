const text = "Привет,думаю такой подарок тебе еще не делали,это и есть тот проект над которым я работал";
const text1 = "Надеюсь это будет самый лучший для тебя день и все твои мечты сбудутся";
const text2 = "Желаю тебе здоровье ,счастья и всегда оставайся такой оптимистичной ";
let s = [text, text1,text2];
let i = 0;
let index = 0;
const butt = document.getElementById("btn");

butt.addEventListener("click", function loh() {
  i = i + 1;
  index = 0;
  console.log(i);
 
  document.getElementById("typing-text").innerHTML ="";
  if(i==3){
    document.querySelector(".heart").style="display:block"
   
}
if(i==4){
   window.location.href="dr1.html"



}

    

  const interval = setInterval(() => {
    // Индекс текущего символа
    if(i<3){

    // Функция для печати следующего символа
    function type(text) {
      // Добавить следующий символ к элементу p
       

      // Увеличить индекс
     
      document.getElementById("typing-text").innerHTML += text[index];


      if(i<=1){
        index++;
        console.log(index);
      }
      if (i==2){
    
       index++;
       console.log(index);
      }
      // Если все символы напечатаны, очистить интервал
      if (text[index] === undefined) {
        clearInterval(interval);
        
      
      }

    }

    // Вызвать функцию печати со всем предложением
    type(s[i])
  }}, 100);}
 



);
