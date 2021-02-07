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
moviesList = document.querySelector('.promo__interactive-list');

// console.log( movieDB.movies.sort())



promo.forEach(i => i.remove());


genre.textContent = 'Драма';
bg.style.backgroundImage = "url('img/bg.jpg')";

moviesList.innerHTML = '';
movieDB.movies.sort();


movieDB.movies.forEach((item, i)=>{   
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>
    `
})





 
