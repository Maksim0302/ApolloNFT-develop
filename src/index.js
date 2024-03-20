import $, { event } from "jquery";
window.$ = $;
import 'bootstrap';
import "slick-carousel";
import "select2";
import './styles/index.scss';
import { getChartByID } from "apexcharts";

// BURGER MENU
document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;
    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}
// ------------------
const body = document.body;
const hamb = document.querySelector("#cheket");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  body.classList.toggle("noscroll");
}

// SHOW-MORE
const loadBtn = document.querySelector('.more');
const cardsWen = document.querySelectorAll('.card');

loadBtn.addEventListener('click', function() {
    for(let card of cardsWen) {
        card.style.display = 'flex'
    }

    loadBtn.style.display = 'none';
});

// ФИЛЬТРАЦИЯ
const buttons = document.querySelectorAll('#btn')
const cards = document.querySelectorAll('.card')
const list = document.querySelector('.filter')
// ----------- ДОБАВИТЬ/УБРАТЬ ЦВЕТ КНОПКИ
list.addEventListener('click', event => {
    const targetId = event.target.dataset.id
    const target = event.target

    if(target.classList.contains('drop__filter__button')) {
        buttons.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')
    }
})
// ------------------------------
function filter (category, items) {
    items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category.toLowerCase() === 'all'
        if (isItemFiltered && !isShowAll) {
            item.classList.add('anime')
        } else {
            item.classList.remove('hide')
            item.classList.remove('anime')
        }
    })
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter
        filter(currentCategory, cards)
    })
})

cards.forEach((card) => {
    card.ontransitionend = function () {
        if (card.classList.contains('anime')) {
            card.classList.add('hide')
        }
    }
})

function app() {
    const buttons = document.querySelectorAll('#btn')
    const cards = document.querySelectorAll('.card')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide')
            }
        }
    })
}

app()
