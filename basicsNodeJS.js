// npm -v - проверка версии
// npm init - установка пакета
// npm i express установка пакета express
// вариант npm install express --save // нам необходимо сохранить пакет как зависимость для нашего проекта
//  npm i nodemon --save-dev - пакет чтобы постоянно перезагружал сервер
// node_modules можно удалить - восстановление express и nodemon просто:
// в терминале: npm i (установит все что прописано в package.json (dependencies))

// запуск в браузере http://localhost:3000/ - выдает ошибку Cannot GET / мы не можем получить рут роут 

// npm i ejs - пакет для html

// const now = new Date().toLocaleString()
// console.log(now)
// // запуск node index.js
// console.log(Math.random())

const fs = require('fs') // работа с файлами - использование модуля fs - подключение через обращение к конструкции require
const data = `
    Hello from node.js
    Its random txt
`

fs.writeFileSync('nodejs.txt', data) // создание файла 

const result = fs.readFileSync('nodejs.txt',{encoding: 'utf-8'}) // чтение в синхронном режиме - если убрать Sync то будет в асинхронном режиме
console.log(result)
// используется для использования webpack
console.log(__dirname) // глобальная переменная __dirname - путь до текущей папки
console.log(__filename)