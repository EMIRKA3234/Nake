const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed")
const text = "Привет,бро \n"
+"Что ты делаешь?ох \n"
+"Ты слился Мортису? \n"
+"Хватит уже делать вид что меня не слышишь! \n"
+"ПЕРЕСТАНЬ \n"
+"(злится)Я ТЕБЯ НЕ НАВИЖУ!ОТВЕТЬ \n"
+"НУ ЛАДНО ТЫ МЕНЯ ДОСТАЛ \n"
+"(ты)OwOПривет друг \n"
+"О,Ты ответил \n"
+"(ты)Это был пранкOwO \n"
+"больше так не делай🤬,бро \n"
+"(ты)Пока😎"
+"Пока😤"



let index = 1;
let speed = 300 / speedElement.value
const writeText = () => {
    textElement.innerText = text.slice(0,index);
    index++;
    if (index > text.length)index =1;
    setTimeout(writeText,speed);
};
writeText();
speedElement.addEventListener("input", (e) => (
    speed=3 / e.target.value)
);