Webpack + TypeScript starter
---

![example](https://juristr.com/blog/assets/imgs/meetup-intro-angular2/transpiling.png)

Это далеко не самый сложный starter kit. Цель его состоит в том, чтобы получить простейшую возможную настройку для работы с Webpack и TypeScript. Развернув себе этот репозиторий, вы сможете дополнить теми инструментами, которые вам нужны, например, SASS-компиляцию, Gzip, Brotli-компрессию, дополнить тестами свое окружение.

## Features

- [x] Webpack
- [x] TypeScript compilation
- [x] ts-lint
- [x] Webpack Development Server
- [x] Karma and Jasmine test execution

## How to use

Просто склонируйте репозиторий, а дальше:

```bash
# Переходим в директорию с проектом
$ cd <your-project-name>

# Удаляем `.git` директорию

# Установка зависимостей
$ npm i
$ # or
$ yarn

# Запуск сборки приложения и веб-сервера:
$ npm serve

# Сборка приложения без минификации: 
$ npm run build

# Сборка приложения с минификацией: 
$ npm run build:prod

# Запуск тестов
$ npm run test
```
