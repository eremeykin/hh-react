### Задание 

В свободном дизайне, сделать простое приложение, которое содержит поле ввода и две кнопки.
Поле ввода принимает строку request ID, по первой кнопке возвращается список логов разных сервисов, которые необходимо вывести на экран пользователя. 
Логи должны сгрупированы по сервисам `hh-xmlback`, `hh-session` и т.д. 
Вторая кнопка `feelinglucky` возвращает request ID, по которому можно осуществить поиск и так же вывести список логов.

Скриншот дизайн =):

![react-homework](https://user-images.githubusercontent.com/3080207/52326883-21ac9780-29fb-11e9-94dd-83d528ea9bf1.png) для примерного понимания, как может выглядеть результат

## API

`/api/feelinglucky` - возвращает `{ rid: "1549341230310eb804464227c82c7fc9" }`. 
Это захардкоженый request ID.

`/api/logs?rid=${rid}` - возвращает список логов, по переданному rid/

### `yarn`

Устанавливает зависимости

### `yarn build`

 Собирает проект в `build` папку.
 
### `yarn start`
Запускает сервер статики и API. Доступен в браузере по URL [http://localhost:9200](http://localhost:9200)

### Дока по сборке
Проект сделан с помощью: [Create React App](https://github.com/facebook/create-react-app).
