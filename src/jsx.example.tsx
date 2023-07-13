import React, {createElement as e, useState} from 'react';

function App() {
    //return (
    // <h1>Hello</h1>
    //);
  
    //создаем локальное состояние (count - счетчик), благоданя синтаксису conct[] useState возвращает нам массив(кортеж)
    //0-й элемент массива мы заносим в константу count, 1-й эл массива в константу setCount и это функция позволяющая менять состояние count
    const [count, setCount] = useState(0)
    
    return e('div', {className: 'container'}, [
      // обратные ковычки ` для того, чтобы была возможность пользоваться шаблонизацией
      e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
      e('button', {
        className: 'py-2 px-4 border', 
        key: 2, 
        onClick: () => setCount(count + 1)
      }, 'Click me!')
    ])
  }
  