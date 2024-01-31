const body = document.querySelector('body');
const countTopics = 9;
const topicTitles =['Основы JavaScript', 'Качество кода', 'Объекты: основы', 'Дата и время', 'Продвинутая работа с функциями', 'Поиск элементов', 'События', 'Стили и классы',  'Массивы'];
const topicCards = {
  0: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
  1: ['1', '2', '3', '4', '5', '7'],
  2: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
  3: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
  4: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
  5: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
  6: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
  7: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
  8: ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'],
}
const questions = {
  0: [
    {
      title: 'Основы JavaScript',
      body: 'Где можно использовать JavaScript?',
      answers: [
        'Серверные приложения',
        'Мобильные приложения',
        'Прикладное программное обеспечение',
        'Веб-приложения',
      ],
      correctAnswer: 3,
    },
    {
      title: 'Основы JavaScript',
      body: 'Как объявить функцию в JavaScript?',
      answers: [
        'function:MyFunction()',
        'function MyFunction()',
        'function = MyFunction()',
        'function = New MyFunction()',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Основы JavaScript',
      body: 'Можно ли в скрипте перевести посетителя на другую страницу сайта?',
      answers: [
        'да, но только в рамках текущего сайта',
        'нет, нельзя',
        'да, куда угодно',
        'нет в этом обходимости',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Основы JavaScript',
      body: 'Сколько параметров можно передать функции?',
      answers: [
        'Любое количество',
        'Ровно столько, сколько указано в определении функции',
        'Сколько указано в определении функции или больше',
        'Сколько указано в определении функции или меньше',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Основы JavaScript',
      body: 'Что делает код: break me;',
      answers: [
        'Выходит из текущего блока цикла или switch на метку "me"',
        'Ломает интерпретатор javascript',
        'Выдает ошибку',
        'В разных браузерах по-разному',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Основы JavaScript',
      body: 'Где встраивается javascript?',
      answers: [
        'внутри head',
        'внутри html',
        'внутри body',
        'внутри img',
      ],
      correctAnswer: 2,
    },
  ],

  1: [
    {
      title: 'Качество кода',
      body: 'Какое количество сообщений будет выведено в консоль?      for(var i = 10; i < 35; i += 5) {console.log(i); }',
      answers: [
        '25',
        'такой цикл работать не будет',
        '15',
        '5',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Качество кода',
      body: 'Что будет на экране? alert(str); var str = "Hello";',
      answers: [
        'Hello',
        'undefined',
        'будет ошибка',
        'пустой экран',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Качество кода',
      body: 'Что выведет этот код?   let y = 1; let x = y = 2; alert(x);',
      answers: [
        '2',
        '1',
        'х',
        'в коде явно какая-то ошибка',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Качество кода',
      body: 'Как округляется число 3.14 до ближайшего целого числа?',
      answers: [
        'Math.rnd(3.14)',
        'round(3.14)',
        'Math.round(3.14)',
        'rnd(3.14)',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Качество кода',
      body: 'Какой используется оператор для присвоения значения переменной?',
      answers: [
        '=',
        '*',
        '-',
        '==',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Качество кода',
      body: 'Как вызвать функцию "myFunction"?',
      answers: [
        'call function myFunction()',
        'myFunction()',
        'call myFunction()',
        'myFunction() call',
      ],
      correctAnswer: 1,
    },
  ],
  
  2: [
    {
      title: 'Объекты: основы',
      body: 'Дан объект let user = {name: "John",surname: "Smith"}; Удалите свойство name из объекта',
      answers: [
        'let user = {};',
        'user.name = delete;',
        'user.name = null;',
        'delete user.name;',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Объекты: основы',
      body: 'Есть объект, объявленный с помощью const const user = {name: "John"}; Какое действие можно сделать с помощью такого объекта?',
      answers: [
        'user.name = "Pete";',
        'user = 123;',
        'user = "Pete";',
        'user.= "Pete";',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Объекты: основы',
      body: 'Выбрать правильный вариант вызова функции конструктора:',
      answers: [
        'let user = new User("Вася");',
        'let user = new user("Вася");',
        'let user = user("Вася");',
        'let user = new User.Вася;',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Объекты: основы',
      body: 'Пусть дан объект let user = {}; alert( user?.address ); Что будет результатом выполнения:',
      answers: [
        'undefined ',
        'ошибка!',
        'false',
        'true',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Объекты: основы',
      body: 'Даны 2 объекта let a={}; let b=a; Какое выражение верно?',
      answers: [
        'a==b',
        'a=b',
        'a-=b',
        'a+=b',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Объекты: основы',
      body: 'Дан объект let user ={name:"John"}; Как освободить память и удалить объект?',
      answers: [
        'name=null',
        'user.name=null;',
        'user=null;',
        'admin=user',
      ],
      correctAnswer: 2,
    },
    ],

    3: [
      {
        title: 'Дата и время',
        body: 'Сегодня 14.02.2022. При использовании какой функции будет выведено следующее сообщение: Mon Feb 14 2022 21:59:08 GMT+0300 (Москва, стандартное время)',
        answers: [
          'new Date();',
          'new Date(0);',
          'getFullYear();',
          'getDay();',
        ],
        correctAnswer: 0,
      },
      {
        title: 'Дата и время',
        body: 'Создан объект Date: let date = new Date(); С помощью какого метода можно получить текущий час?',
        answers: [
          'date. getFullYear()',
          'date. getHours();',
          'date. getUTCHours();',
          'date. getUTCMilliseconds();',
        ],
        correctAnswer: 1,
      },
      {
        title: 'Дата и время',
        body: 'Дан код: let date=new Date(\'Feb 14 2022 22:19:26\'); let day = date.getMonth(); Какое будет значение day?',
        answers: [
          '1',
          '2',
          '14',
          'undefined',
        ],
        correctAnswer: 0,
      },
      {
        title: 'Дата и время',
        body: 'let date=new Date(); Как узнать какое завтра будет число?',
        answers: [
          'Date().getDay;',
          'date.tomorrow;',
          'date.getDate()+1;',
          'date.getDate(+1)',
        ],
        correctAnswer: 2,
      },
      {
        title: 'Дата и время',
        body: 'let date=new Date(); Как вывести дату в формате \'дд.мм.гггг\'?',
        answers: [
          'date. toDateString();',
          'date. toLocaleDateString();',
          'date. toGMTString();',
          'date.date. toLocaleString();',
        ],
        correctAnswer: 1,
      },
      {
        title: 'Дата и время',
        body: 'В чем будет измеряться значение Date.now();',
        answers: [
          'в секундах',
          'в днях',
          'в неделях',
          'в милисекундах',
        ],
        correctAnswer: 3,
      },  
     ], 

   4: [
    {
      title: 'Продвинутая работа с функциями',
      body: 'Функция Math.sqrt(n)',
      answers: [
        'возвращает псевдослучайное число в диапазоне от 0 до 1',
        'возвращает положительный квадратный корень числа',
        'возвращает основание в степени экспоненты, то есть, значение выражения',
        'нет правильного ответа',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Продвинутая работа с функциями',
      body: 'Math.random()',
      answers: [
        'возвращает псевдослучайное число в диапазоне от 0 до 1',
        'возвращает положительный квадратный корень числа',
        'возвращает основание в степени экспоненты, то есть, значение выражения',
        'нет правильного ответа',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Продвинутая работа с функциями',
      body: 'Math.pow(x, y)',
      answers: [
        'возвращает псевдослучайное число в диапазоне от 0 до 1',
        'возвращает положительный квадратный корень числа',
        'возвращает основание в степени экспоненты, то есть, значение выражения',
        'нет правильного ответа',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Продвинутая работа с функциями',
      body: 'var arr=["красный", "желтый", "зеленый"]; arr.reverse(); alert (arr); Что будет выведено?',
      answers: [
        'красный, желтый, зеленый',
        'зеленый, желтый, красный',
        'желтый, зеленый, красный',
        'зеленый, красный, желтый',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Продвинутая работа с функциями',
      body: 'Метод объекта Date для получения дня недели',
      answers: [
        'getDay()',
        'getDate()',
        'getUTCDate()',
        'getUTCDay()',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Продвинутая работа с функциями',
      body: 'Как округляется число 3.14 до ближайшего целого числа?',
      answers: [
        'Math.rnd(3.14)',
        'round(3.14)',
        'Math.round(3.14)',
        'rnd(3.14)',
      ],
      correctAnswer: 2,
    },
   ],

   5: [
    {
      title: 'Поиск элементов',
      body: 'С помощью метода document.getElementById(\'elem\') можно:',
      answers: [
        'получить элемент по атрибуту id',
        'получить элемент по атрибуту class',
        'получить элемент по названию тега',
        'получить элемент, удовлетворяющие данному CSS-селектору',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Поиск элементов',
      body: 'С помощью метода document.getElementByTagName(\'td\') можно:',
      answers: [
        'получить элемент по атрибуту id',
        'получить элемент по атрибуту class',
        'получить элемент по названию тега',
        'получить элемент, удовлетворяющие данному CSS-селектору',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Поиск элементов',
      body: 'Метод  elem.querySelectorAll(css)',
      answers: [
        'возвращает элемент по названию тега',
        'возвращает элементы, которые имеют данный CSS-класс',
        'возвращает первый элемент, соответствующий данному CSS-селектору',
        'возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору',
      ],
      correctAnswer: 3,
    },
    {
      title: 'Поиск элементов',
      body: 'Как найти таблицу с id="age-table"?',
      answers: [
        'let table = table. getElementsBy TagName(\'age-table\')',
        'let table = document. getElementById (\'age-table\')',
        'let table = table. querySelector (\'age-table\')',
        'let table = document. querySelectorAll (\'#age-table label\')',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Поиск элементов',
      body: 'Как найти Все элементы label внутри таблицы',
      answers: [
        'document.get ElementById (label\')',
        'table.query Selector(\'label\')',
        'table.get ElementsByTagName (\'label\')',
        'table.get ElementsByClass Name(\'label\')',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Поиск элементов',
      body: 'Как  найти форму с именем name="search" ',
      answers: [
        'document.query Selector (\'form[name="search"]\')',
        'document.get ElementById(\'search\')',
        'table.query Selector(\'label\')',
        'table.get ElementsByClassName (\'label\')',
      ],
      correctAnswer: 0,
    },
   ], 

   6: [
    {
      title: 'События',
      body: 'Какое из событий является событие клавиатуры?',
      answers: [
        'click',
        'contextmenu',
        'mouseover',
        'keydown',
      ],
      correctAnswer: 3,
    },
    {
      title: 'События',
      body: 'Событие blur',
      answers: [
        'вызывается во время фокусировки',
        'когда элемент теряет фокус',
        'срабатывает по окончании изменения элемента',
        'вызывается двойным кликом на элементе',
      ],
      correctAnswer: 1,
    },
    {
      title: 'События',
      body: 'event.target - это',
      answers: [
        'самый глубокий элемент, на котором произошло событие',
        'элемент, на котором в данный момент сработал обработчик',
        'на какой фазе он сработал',
        'метод, который препятствует продвижению события дальше',
      ],
      correctAnswer: 0,
    },
    {
      title: 'События',
      body: 'event.currentTarget - это',
      answers: [
        'самый глубокий элемент, на котором произошло событие',
        'элемент, на котором в данный момент сработал обработчик',
        'на какой фазе он сработал',
        'метод, который препятствует продвижению события дальше',
      ],
      correctAnswer: 1,
    },
    {
      title: 'События',
      body: 'event.eventPhase - это',
      answers: [
        'самый глубокий элемент, на котором произошло событие',
        'элемент, на котором в данный момент сработал обработчик',
        'на какой фазе он сработал',
        'метод, который препятствует продвижению события дальше',
      ],
      correctAnswer: 2,
    },
    {
      title: 'События',
      body: 'event.stopPropagation() - это',
      answers: [
        'самый глубокий элемент, на котором произошло событие',
        'элемент, на котором в данный момент сработал обработчик',
        'на какой фазе он сработал',
        'метод, который препятствует продвижению события дальше',
      ],
      correctAnswer: 3,
    },
   ],

   7: [
    {
      title: 'Стили и классы',
      body: 'Для того, чтобы добавить класс article можно использовать:',
      answers: [
        'document.body. style.display = "article"',
        'elem.classList. contains("article")',
        'document.body. classList.remove ("article")',
        'document.body. classList.add (\'article\')',
      ],
      correctAnswer: 3,
    },
    {
      title: 'Стили и классы',
      body: 'Для того, чтобы удалить класс article можно использовать:',
      answers: [
        'document.body. classList.add ("article")',
        'document.body. classList.remove ("article")',
        'elem.classList. contains("article")',
        'document.body. style.display = "article"',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Стили и классы',
      body: 'Для проверки наличия класса article можно использовать:',
      answers: [
        'elem.classList. contains ("article")',
        'document.body. classList.add ("article")',
        'document.body. classList.remove ("article")',
        'document.body. style.display = "article"',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Стили и классы',
      body: 'Для того чтобы изменить цвет фона body можно использовать следующий метод:',
      answers: [
        'document.body. style.сolor= \'red\'',
        'document.body. style.background Color=\'red\'',
        'document.body. tagName.fontcolor= \'red\'',
        'document.body. className.fontsize= \'red\'',
      ],
      correctAnswer: 1,
    },
    {
      // title: 'Стили и классы',
      // body: '',
      // answers: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ],
      // correctAnswer: 0,
    },
    {
      title: 'Стили и классы',
      body: 'Для того, чтобы проверить наличие класса article можно использовать:',
      answers: [
        'document.body. classList.add ("article")',
        'document.body. classList.remove ("article")',
        'elem.classList. contains("article")',
        'document.body. style.display = "article"',
      ],
      correctAnswer: 2,
    },
   ],

   8: [
    {
      title: 'Массивы',
      body: 'Дан массив. Вывести третий элемент let fruits = ["Яблоко", "Апельсин", "Слива"];',
      answers: [
        'alert(fruits[0]);',
        'alert(fruits[1]);',
        'alert(fruits[2])',
        'alert(fruits[3])',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Массивы',
      body: 'Дан массив: let fruits = [\'Яблоко\', \'Банан\'];  С помощью какого метода можно удалить элемент  \'Банан\'?',
      answers: [
        'fruits.pop();',
        'fruits.shift();',
        'fruits.push(\'Банан\');',
        'fruits.delete();',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Массивы',
      body: 'Дан массив: let fruits = ["Яблоко", "Апельсин", "Груша"]; Как удалить  последний элемент из массива?',
      answers: [
        'fruits.pop();',
        'fruits.push("Груша");',
        'fruits.shift();',
        'fruits.unshift("Яблоко");',
      ],
      correctAnswer: 0,
    },
    {
      title: 'Массивы',
      body: 'Дан массив: let fruits = ["Яблоко", "Апельсин"] Как добавить элемент в конец массива?',
      answers: [
        'fruits.pop()',
        'fruits.push("Груша");',
        'fruits.shift();',
        'fruits.unshift("Яблоко");',
      ],
      correctAnswer: 1,
    },
    {
      title: 'Массивы',
      body: 'Дан массив: let fruits = ["Яблоко", "Апельсин", "Груша"] Как удалить из массива первый элемент?',
      answers: [
        'fruits.pop()',
        'fruits.push("Груша");',
        'fruits.shift();',
        'fruits.unshift("Яблоко");',
      ],
      correctAnswer: 2,
    },
    {
      title: 'Массивы',
      body: 'Дан массив: let fruits = ["Апельсин", "Груша"] Как добавить элемент в начало массива:?',
      answers: [
        'fruits.pop()',
        'fruits.push("Груша");',
        'fruits.shift();',
        'fruits.unshift(\'Яблоко\');',
      ],
      correctAnswer: 3,
    },
   ]   
}

let hasFlippedCard = false;
let boardLocked = false;
let firstCard, secondCard;
let timer;
let time;

function generateTopics() {
  time = 120;
  body.innerHTML = '';
  const topicWrapper = document.createElement('div');
  topicWrapper.classList.add('topic-wrapper');
  const wrapperTitle = document.createElement('h2')
  wrapperTitle.innerHTML = 'Выберите тему';
  topicWrapper.appendChild(wrapperTitle);
  for (let i = 0; i < countTopics; i++) {
    const topic = document.createElement('button');
    topic.innerHTML = `${topicTitles[i]}`;
    topic.classList.add('topic-title');
    topicWrapper.appendChild(topic);
  }
  body.appendChild(topicWrapper);
  const teory = document.createElement('div');
  teory.classList.add('teory-wrapper');
  const teoryLink = document.createElement('a')
  teoryLink.href = 'https://learn.javascript.ru/';
  teoryLink.innerHTML = 'Теория';
  teory.appendChild(teoryLink);
  body.appendChild(teory);

  addListenersForTopics();
}
generateTopics();

function addListenersForTopics() {
  const topics = document.querySelectorAll('.topic-title');
  topics.forEach((element) => {
    element.addEventListener('click', () => {
      generateMemoryCards(element.textContent);
    })
  })
}

// Memory game
function generateMemoryCards(topic) {
  const topicIndex = topicTitles.indexOf(topic);
  body.innerHTML ='';
  const memoryGameField = document.createElement('div');
  memoryGameField.classList.add('memory-game');
  for (let i = 0; i < 6; i++) {
    const firstCard = document.createElement('div');
    firstCard.classList.add('memory-card');
    firstCard.dataset.framework = `${topicCards[topicIndex][i]}`;
    const secondCard = document.createElement('div');
    secondCard.classList.add('memory-card');
    secondCard.dataset.framework = `${topicCards[topicIndex][i]}`;
    const firstCardFace = document.createElement('img');
    firstCardFace.classList.add('front-face');
    firstCardFace.alt = `${topicCards[topicIndex][i]}`;
    firstCardFace.src = `./assets/images/${topicCards[topicIndex][i]}.svg`;
    const firstCardBack = document.createElement('img');
    firstCardBack.classList.add('back-face');
    firstCardBack.alt = 'js-badge';
    firstCardBack.src = './assets/images/js-badge.svg';
    const secondCardFace = document.createElement('img');
    secondCardFace.classList.add('front-face');
    secondCardFace.alt = `${topicCards[topicIndex][i]}`;
    secondCardFace.src = `./assets/images/${topicCards[topicIndex][i]}.svg`;
    const secondCardBack = document.createElement('img');
    secondCardBack.classList.add('back-face');
    secondCardBack.alt = 'js-badge';
    secondCardBack.src = './assets/images/js-badge.svg';

    firstCard.appendChild(firstCardFace);
    firstCard.appendChild(firstCardBack);
    secondCard.appendChild(secondCardFace);
    secondCard.appendChild(secondCardBack);

    memoryGameField.appendChild(firstCard);
    memoryGameField.appendChild(secondCard);
  }
  
  const timerWrapper = document.createElement('div');
  timerWrapper.classList.add('timer-wrapper')
  const timer = document.createElement('span')
  timer.id = 'countdown';
  timer.innerHTML = '2:00';
  timerWrapper.appendChild(timer);

  body.appendChild(timerWrapper);
  body.appendChild(memoryGameField);

  startGame(topicIndex);
  const promise = new Promise(() => {
    viewCards();
  })
  promise.then(updateCountdown)
}

function viewCards() {
  const cards = document.querySelectorAll('.memory-card');

  cards.forEach(e => {
    e.classList.add('flip');
  })

  setTimeout(() => {
    cards.forEach(e => {
      e.classList.remove('flip');
    })
  }, 2000)

}

function startGame(topicIndex) {
  const cards = document.querySelectorAll('.memory-card');
  
  timer = setInterval(updateCountdown, 1000);
  
  cards.forEach(card => {
    // Add Event Listener to every card 
    card.addEventListener('click', (e) => {
      flipCard(e.target, topicIndex);
    });
  
    const randomIndex = Math.floor(Math.random() * cards.length);
    card.style.order = randomIndex;
  })

}

function updateCountdown() {
  const countDownEl = document.querySelector("#countdown");
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (time === 0) {
    const memoryGameField = document.querySelector('.memory-game');
    memoryGameField.classList.add('blockEvents');

    clearInterval(timer);
    const loseWrapper = document.createElement('div');
    loseWrapper.classList.add('popup-wrapper');
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.innerHTML = 'Играть снова';
    const loseTitle = document.createElement('span');
    loseTitle.innerHTML = 'Вы Проиграли!😔🥺😭';
    loseWrapper.appendChild(loseTitle);
    loseWrapper.appendChild(homeButton);
    homeButton.addEventListener('click', generateTopics);
    body.appendChild(loseWrapper);
  }
  if (minutes >= 0 && seconds >= 0) {
    seconds = seconds < 10 ? "0" + seconds: seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time --;
  }
}

function flipCard(el, topicIndex) {
  if (boardLocked) return;

  const target = el.parentElement;

  if (!hasFlippedCard) {
    
    // First Click
    target.classList.add('flip');
    hasFlippedCard = true;
    firstCard = target; 
  } else {
    // Second Click
    if (!target.classList.contains('flip')) {
      target.classList.add('flip')
      hasFlippedCard = false;
      secondCard = target;
  
      // Check for match
      checkForMatch(topicIndex);

      checkWin();
    }
  }
}

function checkForMatch(topicIndex) {
  const isEqual = firstCard.dataset.framework === secondCard.dataset.framework;

  // TERNARTNY OPERATOR
  isEqual ? disableCards() : unflipCards(topicIndex);

}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards(topicIndex) {
  boardLocked = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  
    resetBoard()
  }, 1000);
  
  generateQuestion(topicIndex);
}

function generateQuestion(topicIndex) {
  const memoryGameField = document.querySelector('.memory-game');

  const questionsWrapper = document.createElement('div');
  questionsWrapper.classList.add('question-wrapper');
  const questionTitle = document.createElement('h3');
  questionTitle.classList.add('question-title');
  const questionBody = document.createElement('p');
  questionBody.classList.add('questin-body');
  const answerWrapper = document.createElement('div');
  answerWrapper.classList.add('answer-wrapper');

  const randomNum = Math.floor(Math.random() * questions[topicIndex].length);

  questionTitle.innerHTML = `${questions[topicIndex][randomNum].title}`;
  questionBody.innerHTML = `${questions[topicIndex][randomNum].body}`;
  questionsWrapper.appendChild(questionTitle);
  questionsWrapper.appendChild(questionBody);

  for (let i = 0; i < 4; i++) {
    const answerBtn = document.createElement('button');
    answerBtn.classList.add('answer-btn');
    answerBtn.innerHTML = questions[topicIndex][randomNum].answers[i];

    answerWrapper.appendChild(answerBtn);

    answerBtn.addEventListener('click', () => {
      checkRightAnswer(i, topicIndex, randomNum);
    });
  }
  
  questionsWrapper.appendChild(answerWrapper);
  memoryGameField.classList.add('blockEvents');
  body.appendChild(questionsWrapper);
}

function checkRightAnswer(index, topicIndex, randomNum) {
  const questionsWrapper = document.querySelector('.question-wrapper');
  const memoryGameField = document.querySelector('.memory-game');
  const timer = document.querySelector('.timer-wrapper');

  if (index === questions[topicIndex][randomNum].correctAnswer) {
    questionsWrapper.remove();
    memoryGameField.classList.remove('blockEvents');
  } else {
    questionsWrapper.remove();
    memoryGameField.classList.remove('blockEvents');
    if (time > 15) {
      time -= 15;
    } else {
      time = 0;
      checkWin();
    }
    const penaltyTime = document.createElement('p');
    penaltyTime.classList.add('penalty-time');
    penaltyTime.innerHTML = '\n- 0:15'
    timer.append(penaltyTime);
    setTimeout(() => {
      penaltyTime.remove();
    }, 2000)
  }
}

function resetBoard() {
  hasFlippedCard = boardLocked = false;
  firstCard = secondCard = null;
}

function checkWin() {
  const cards = document.querySelectorAll('.memory-card');
  let flag = false;
  cards.forEach(e => {
    if (!e.classList.contains('flip')) {
      flag = true;
    }
  })

  if (!flag) {
    clearInterval(timer);
    const winWrapper = document.createElement('div');
    winWrapper.classList.add('popup-wrapper');
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.innerHTML = 'Играть снова';
    const winTitle = document.createElement('span');
    winTitle.innerHTML = 'Вы Выиграли!!!🥳🤪🎉';
    winWrapper.appendChild(winTitle);
    winWrapper.appendChild(homeButton);
    homeButton.addEventListener('click', generateTopics);
    body.appendChild(winWrapper);
  }
}

