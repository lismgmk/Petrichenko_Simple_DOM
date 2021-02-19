/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Лига справедливости",
        "Ба-ла лэнд",
        "Кдержимость",
        "Скотт Пилигрим против...",
        "Логан"
    ]
},
promo = document.querySelectorAll('.promo__adv img'),
bg = document.querySelector('.promo__bg'),
genre = bg.querySelector('.promo__genre'),
moviesList = document.querySelector('.promo__interactive-list'),
formMovie = document.querySelector('.promo__interactive form'),
inputMovie = formMovie.querySelectorAll('input');

// console.log(formMovie.querySelector('input'));
let inputText, inputCheckbox;

inputMovie.forEach((input)=> {
    if(input.getAttribute("type") == 'text'){
        inputText = input;
    } else{
        inputCheckbox = input;
    }
})

formMovie.addEventListener('submit', (e) => {
    e.preventDefault(); 
     if(inputText.value.length > 10){
        let newStr = `${inputText.value.slice(0, 5)} ...`;
        movieDB.movies.push(newStr);

        moviesList.innerHTML = '';
movieDB.movies.sort();


movieDB.movies.forEach((item, i)=>{   
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>
    `
})

     } else {
        movieDB.movies.push(inputText.value);
        moviesList.innerHTML = '';
movieDB.movies.sort();


movieDB.movies.forEach((item, i)=>{   
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>
    `
})
     }
    console.log( movieDB.movies.sort());
    if(inputCheckbox.checked){
        console.log(`${inputText.value} любимый фильм`)
    }
});


// document.querySelectorAll('.delete').forEach((i)=> {
//     i.style.cssText = `
// background: blue;
// width: 20px;
//     height: 20px;
//     display: block
// `
// })





let del = document.querySelectorAll('.delete');



 let go = function () {del.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(e.target.parentNode);
        let num = e.target.parentNode;
        // console.log(movieDB.movies)
        movieDB.movies.forEach((i,index, array) => {
            console.log(array[index].toLowerCase());
            console.log(num.textContent.toLowerCase());

            if(num.textContent == array[index].toLowerCase() ){
            // item.remove();
                console.log(1)
            // num.remove();
            }
        });
    })

})
}
go();





// promo.forEach(i => i.remove());


// genre.textContent = 'Драма';
// bg.style.backgroundImage = "url('img/bg.jpg')";

// moviesList.innerHTML = '';
// movieDB.movies.sort();


// movieDB.movies.forEach((item, i)=>{   
//     moviesList.innerHTML += `
//     <li class="promo__interactive-item">${i + 1} ${item}
//         <div class="delete"></div>
//     </li>
//     `
// })


// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */



 
