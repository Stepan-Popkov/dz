// Пример 1: Изменение текста элемента
// Получаем ссылку на кнопку и параграф
const changeTextButton = document.getElementById('changeTextButton');
const myParagraph = document.getElementById('myParagraph');

// Добавляем слушатель события 'click' к кнопке
changeTextButton.addEventListener('click', () => {
    // Изменяем текстовое содержимое параграфа
    myParagraph.textContent = 'Текст был изменен с помощью JavaScript!';
    myParagraph.style.backgroundColor = '#d1ecf1'; // Дополнительно меняем фон
    myParagraph.style.borderColor = '#bee5eb';
});

// Пример 2: Добавление/удаление класса
const myBox = document.getElementById('myBox');

myBox.addEventListener('click', () => {
    // Метод classList.toggle() добавляет класс, если его нет, и удаляет, если он есть
    myBox.classList.toggle('highlight');

    // Опционально: меняем текст в зависимости от наличия класса
    if (myBox.classList.contains('highlight')) {
        myBox.textContent = 'Выделено!';
    } else {
        myBox.textContent = 'Нажми меня!';
    }
});

// Пример 3: Работа с атрибутами изображения
const myImage = document.getElementById('myImage');
const toggleImageButton = document.getElementById('toggleImageButton');

let isImage1 = true; // Флаг для отслеживания текущего изображения

toggleImageButton.addEventListener('click', () => {
    if (isImage1) {
        // Устанавливаем новый src и alt для второй картинки
        myImage.setAttribute('src', 'img/img2.jpeg');
        myImage.setAttribute('alt', 'Описание картинки 2');
    } else {
        // Возвращаем исходный src и alt
        myImage.setAttribute('src', 'img/img1.png');
        myImage.setAttribute('alt', 'Описание картинки 1');
    }
    // Инвертируем флаг
    isImage1 = !isImage1;
});

// Пример 4: Добавление элементов в список
const listItemInput = document.getElementById('listItemInput');
const addListItemButton = document.getElementById('addListItemButton');
const myList = document.getElementById('myList');

addListItemButton.addEventListener('click', () => {
    const newItemText = listItemInput.value.trim(); // Получаем текст из инпута, удаляем пробелы по краям

    // Проверяем, что текст не пустой
    if (newItemText !== '') {
        // 1. Создаем новый элемент <li>
        const newListItem = document.createElement('li');

        // 2. Устанавливаем текстовое содержимое для нового элемента
        newListItem.textContent = newItemText;

        // 3. Добавляем новый элемент в конец списка <ul>
        myList.appendChild(newListItem);

        // Очищаем поле ввода
        listItemInput.value = '';
    } else {
        alert('Пожалуйста, введите текст для нового элемента списка.');
    }
});
 const square = document.getElementById('square');
    square.addEventListener('click', () => {
      square.classList.toggle('moved'); // переключение класса при клике
    });

// Дополнительный пример: изменение стилей напрямую (можно показать, но лучше использовать классы)
// Например, при наведении на заголовок секции
document.querySelectorAll('.example-section h2').forEach(heading => {
    heading.addEventListener('mouseover', () => {
        heading.style.color = '#dc3545'; // Красный при наведении
    });

    heading.addEventListener('mouseout', () => {
        heading.style.color = '#007bff'; // Исходный синий при убирании курсора
    });
});
