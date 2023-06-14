# Visual-Studio-Code-projects
## Теория
В репозитории представлены наработки из Visual Studio Code, Опишу каждую конкретно:
- Amongus Store это первый сайт, в нем были изучены основные тэги html кода,  
изучены таблицы, тег style, вставка картинок и добавление видео.
```
<img src="imgs\CyanAmogus.png" sizes="250px" > // добавление изображения
```
```
<table> //тег таблицы
  <tr class="firsttr"> // тег столбца таблицы
    <td class="redtd"><a href="imgs\RedAmogus.png">red</a></td> // тег элемента таблицы
    <td class="greentd"><a href="imgs\greenAmogus.png">green</a></td>
    <td class="cyantd"><a href="imgs\CyanAmogus.png">cyan</a></td>
  </tr>
  <tr>
    <td>too much</td>
    <td>0$</td>
    <td>bucket</td>
  </tr>
</table>
```
```
<video width="800" height="600" controls="controls" align="center"> // добавление проигрывателя
  <source src="imgs\AMONG US Song (Dance Music Video) _  Moondai Remix (360p).mp4"> // указание источника видео
</video>
```
- exponentiation это сайт возводящий число в нужную степень, в нем был изучен процесс работы с JavaScript`ом,
```
let x = prompt("Введите x"); //всплывающие окно ввода 
let k = prompt("Введите n"); //всплывающие окно ввода 
function pow(x,k){
    let result =(k%1 !=0)? "неа": x**k; //проверка на целостность числа и возведение в степень
    document.querySelector('.test').innerHTML = result;
}
```
- Star Wars text это сайт выводящий текст в стиле начала из фильма Star Wars. В данном сайте были изучены принципы работы CSS кода,  
Была изучена анимация в css
```
@keyframes crawl{
    0%{
        top: 0;
        transform: rotateX(20deg); //вращение объекта
        -webkit-transform: rotateX(20deg); //адаптация под разные браузеры
        -moz-transform: rotateX(20deg);
        -ms-transform: rotateX(20deg);
        -o-transform: rotateX(20deg);
}
```
- BootStrap это сайт на котором была подключена библиотека шаблонов BootStrap, в данном сайте была проведена работа по её изучению,
- FlipCard and Button это сайт являющейся финальным заданием в цепочке изучения верстки, данный сайт был выполнен по видео уроку из интернета.  
Был изучен аргумент hover
```
.button:hover{
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3,  0 0 80px #2196f3;
    background-color: #2196f3;
    color: #333;
    transition-delay: 1s;
}
```
## Инструкция запуска
Для начал требуется расположить нужную вам директорию в удобном для вас месте, затем открыть её,  
В каждой директории есть файл с названием index.html, он и является пусковым файлом.
## Пример работы программы
### Amongus store:  
![image](https://github.com/dhoker23/Visual-Studio-Code-projects/assets/44202889/234157f4-1b78-47fd-80a0-7c0194cc36ba)  
### Star Wars text:  
![image](https://github.com/dhoker23/Visual-Studio-Code-projects/assets/44202889/ac48b275-c9cb-4a37-8246-27fee85f36ab)  
### BootStrap:  
![image](https://github.com/dhoker23/Visual-Studio-Code-projects/assets/44202889/fcc9903f-d7ed-4725-aa76-5e36d5cb1546)  
### FlipCard and Button:  
![image](https://github.com/dhoker23/Visual-Studio-Code-projects/assets/44202889/9a26e809-16af-49b1-b80e-6e0119e40828)  
![image](https://github.com/dhoker23/Visual-Studio-Code-projects/assets/44202889/2556aec5-10ee-4d5e-873c-c07fb0e95c66)  
## Контакты
- VK : [Михайлов Кирилл](kirill.mixailov)
- Telegram: @dhoker23
- mail : zxcv103444@gmail.com
