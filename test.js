
// const subscribers = [
//   { name: 'user1',  isCloseFriend: true},
//   { name:'user2',  isCloseFriend: false},
//   { name:'user3',  isCloseFriend: false},
//   { name:'user4',  isCloseFriend: true},
//   { name: 'user5',  isCloseFriend: true},
// ]
// // перебираємо масив обьектів  FOR

// for (let i = 0; i < subscribers.length; i++) {
//   console.log(subscribers[i]);
// }


// перебираємо масив обьектів FOR OF

// for (const item of subscribers) {
//   console.log(item);
// }
//
// const icon = '5';
// console.log(typeof icon);  тип обекту
// Number(icon);              перевести рядок у число
// console.log(typeof Number(icon));



// const obj = {
//   name: 'Vitaly',
//   age: 18,
//   sex: 'male',
// }
// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }


// ............приведення до квадрата елементів масиву

// const arrNumber = [
//   1, 2, 3, 4, 5];

// function squareArr(arr) {
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * arr[i];
  
//   }
//   return arr;
// }
// console.log(squareArr(arrNumber))


// const friends = ['Mango', 'Orange', 'Kiwi', 'Poly'];

// // довжина масиву
// console.table(friends);
// console.log(friends.length);

// //знайти значення останнього індексу
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// //перезапише елумент масиву МаНГО

// friends[0] = 'jkljlkjkj';
// console.log(friends);

// const friends = ['Mango', 'Orange', 'Kiwi', 'Poly'];

// перебор массиву по індексу
// for (let i = 0; i < friends.length; i++){
  // додасть 25 до манго орандж...
  // friends[i] += '25';
// виводить індекс
  // console.log(i); 
  // виводить елемент
  // console.log(friends[i]);
// }

// використовуємо коли не треба робити математичні дії і не треба перезаписувати (змунювати) індекс
// for (const friend of friends) {
//   console.log(friend)

// }
// console.log(friends)


// ..................... порахувати загальну сумму в корзині

// const cart = [54, 36, 95, 15, 7, 34,55,79,125];
 
// let totalCart = 0;

// for (let i = 0; i <= cart.length - 1; i++ ) {
//  totalCart += cart[i];
// }
// консоль лог виводимо після циклу
// console.log(totalCart);
 // інший спосіб через FOR OF

// for (const item of cart) {
//   totalCart += item;
// }
//  console.log(totalCart);

// .................порахувати сумму усіх парних чисел

// const numbers = [54, 36, 95, 15, 7, 34, 55, 79, 125, 2];

// let totalNumberTwo = 0;

// for (let i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
  // запис число ділеться на 2 без остачі.тобто воно четне !==0 якщо не четное
  // if (numbers[i] % 2 === 0) {
  //   console.log('четное');
// сумма всіх парних чиесл в масиві
//     totalNumberTwo += numbers[i];
//   }

// }

// ІШШИЙ СПОСІБ КРАЩИЙ

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('четное');
//     totalNumberTwo += number;
//   }
// }


// console.log(totalNumberTwo)

// ...............Скрипт пошуку логіна loginToFind

// const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';
// let message = '';

// console.log(logins)

// СПОСІБ 1 якщо loginToFind === тобто згайдений,цикл завершуеться break

// for (let i = 0; i < logins.length; i++){
  // змінна login для індексу масиву
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = "Find";
//     break;
//   } 
//       message = 'Sorry'; 
// }
// console.log(message)

// СПОСІБ 2 спочатку призначаемо що login не знайдений (message =' Sorry').далі перезаписуемо якщо знайдений тоді message = 'Find;

// const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';
// let message = 'Sorry';

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = 'Find';
//     break;
//   }
// }
// console.log(message)

// СПОСІБ 3 тернарний оператор
// const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';

// const message = logins.includes(loginToFind) ? 'Find' : 'Sorry';

//  console.log(message)

// ......НАПИСАТИ СКРИПТ САМОГО МАЛЕНЬКОГО ЧИСЛА В МАСИВІ. Припускаемо що є найменше число це перший елемент. і порівнюємо його з усіма елементами.якщо
// елемент буде менший,тоді він стає найменшим. і так до кінця цилу перебирання. number це наступне число з яким порівнюімо перший елемент

// const numbers = [12, 8, 3, 99, 7, 2];
// //  змінна для наменшого числа
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min)

// ......НАПИСАТИ СКРИПТ ЯКИЙ ОБЄДНУЄ ВСІ ЕЛЕИЕНТИ МАСИВА В РЯДОК ЧЕРЕЗ "," JoIN / FOR

// const friends = ['Mango', 'Orange', 'Kiwi', 'Poly'];

// СПОСІБ 1 FOR

// створюємо string пустий так само як був total
// let string = '';
 
// for (const friend of friends) {
//   string += friend + ',';
// }
  //  метод стринг тому що внас строка. поп не підійде бо він для массиву
//   string = string.slice(0, string.length -1);
// console.log(string);

// СПОСІБ 2 JOIN просто розбиваемо масив через розділювач ","

// const string = friends.join(',');
// console.log(string);


// ...........Напиши скрипт який смінює верхній на нижній регістр і назад

//  СПОСІБ 1

// const string = "JavaScript"
// створюємо нову змінні де будемо записувати новий=створений=перевернутий рядок
// let invertedString = '';

// потрібно перебрати масив,розбити по символьно .SPLIT метод строки
// const letters = string.split('');
// // перебираємо розбиту строку і порівнюємо регістри
// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     // console.log(letter);
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
// }

 
// }

// console.log(invertedString);

// СПОСІБ  2 КРАЩИЙ тернарний оператор
// let invertedString = '';
// const letters = string.split('');

// for (const letter of letters) {

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString)

// ............................CУММА ЕЛЕМЕНТІВ 2 МАСИВІВ

// const array1 = [5, 10, 16, 7, 33];
// const array2 = [15, 9, 7, 4];

// let total = 0;
// // зєднуємо 2 масива в один
// const numbers = array1.concat(array2);
// // перебираємо створений масив і плюсуємо тотал з елементом number масива
// for (const number of numbers) {
//   total += number;
// }

// console.log(total);


// ..........................КОЛЕКЦІЯ КАРТОЧОК В ТРЕЛО

// const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];

// ..........видалення елементів по індексу. спочатку треба знайти індекс карти якої треба
// видалити
// const cardToRemove = 'card3';
// const indexCard = cards.indexOf(cardToRemove);
// // видаляємо елемент метод splice
// cards.splice(indexCard, 1);

// console.log(cards)

// ............додаємо карточку по індексу в кінець метод push/ в середину метод splice

// const cardToInsert = 'card6';

// методом splise додали в середину card6
// cards.splice(3, 0, cardToInsert);

// методом push додали card6 в кфнець масиву
// cards.push(cardToInsert);
// console.log(cards);
 
//  .................ЗАМІНИТИ,ОБНОВИТИ КАРТОЧКУ В МАСИВУ

// const cardToUpdate = 'card70';
// //  замінюємо карточку з індексом 1 на карту card70
// cards.splice(1, 1, cardToUpdate)
// console.log(cards)

// .......замінити карточку сard 3
// const cardToUpdate = 'card3';
// // знайдемо її індекс в масиві
// const index = cards.indexOf(cardToUpdate);
// console.log(index);

// // далі замінюємо методом splice
// cards.splice(index, 1, 'new card');
// console.log(cards)


// / . ФУНКЦІЇ ........................................

// ...............ФУНКЦІЯ МАЄ МАСИВ ЦІН (items) (ЧИСЕЛ) І ПОВЕРТАЄ ЇХ СУМУ

// const cart = [20, 90, 7, 63, 40, 15, 3, 27];
// let total = 0;

// const calculateTotalPrice = function (items) {
//   console.log(items);
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   // total обовязкого всередені функції
//   return total;
// }
// console.log(calculateTotalPrice([5, 10, 15, 20]));

// ...............ФУНКЦІЯ ЩО ПЕРЕБИРАЄ І ЛОГУЄ МАСИВ. RETURN не потрібно. така умова задачі

// const logItems = function (items) {

//   for (const item of items) {
//     console.log(item);
//   }

// }

// logItems (['Mango', 'Orange', 'Kiwi', 'Poly']);
// logItems([1, 2, 3, 4]);


// ...............функція для  пошуку логіна loginToFind

//  const logins = ['hklhh', 'vvvvvvvvvv', 'jh;akda', 'pppppppp'];
// const loginToFind = 'vvvvvvvvvv';

// const message = logins.includes(loginToFind) ? 'Find' : 'Sorry';

//  console.log(message)

// const findLogin = function (allLogins, loginToFind) {
  
//   console.log(allLogins);
//   console.log(loginToFind);

//   let message = 'Sorry';
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = 'Find'
//     }
//   }
//   return message;
// }


// console.log(findLogin(logins, 'qqqqqqqqqqqqq'))

// СПОСІБ 2 ЧЕРЕЗ ТЕРНАРНИЙ ОПЕРАТОР

// const findLogin = function (allLogins, loginToFind) {

//   const message = allLogins.includes(loginToFind) ? 'Find' : 'Sorry';
//   return message;
// }
// ще проще зразу return замість message
  // return message = allLogins.includes(loginToFind) ? 'Find' : 'Sorry'; 
  
// console.log(findLogin(logins, 'qqqqqqqqqqqqq'))

// ФУНКЦІЯ ЯКА ШУКАЄ НАЙМЕНЬШЕ ЧИСЛО В МАСИВІ

// const numbers = [3, 5, 45, 0, 15];
// розпаковка масива в числа методом ...spred
// const x = Math.min(...numbers);
// console.log(numbers)
// console.log(x)

// СПОСІБ 2, ДОВШИЙ
// припустимо що перший елемент в масиві є найменше число
// let smallNumber = numbers[0];
// перебираємо масив
// for (const number of numbers) {
//   if (number < smallNumber) {
//     smallNumber = number;
//   }
// }

// console.log(smallNumber)

// .................ФУНКЦІЯ ЯКА  ЗМІНЮЄ РЕГІСТР ЛІТКРИ НА ПРОТИЛЕЖНИЙ
// function change(string) {

  
  // створюємо зміну де розбиваємо рядок по символом 
  // const letters = string.split('');
  // створюємо змінну куди буде повертатися новий змінений рядок
  // let updateString = '';
  // перебираємо масив

  // for (const letter of letters) {
  //   const isInLowerCase = letter === letter.toLowerCase();
  //   updateString += isInLowerCase
  //     ? letter.toUpperCase()
  //     : letter.toLowerCase();
  // }

  // return updateString
  // }
  // console.log(change('SSSSBBBBBmmmmmmTTTTT'))

  //  ЯК РАЗПАКУВАТИ ПСЕВДО МАСИВ В МАСИВ
  //  ставимо ...перед псевдо масивом/ в ...args запише всі елементи після a,b,c
// const fn = function (a, b, c, ...args){
    
//   }


//  .........НАПИШИ ФУНКЦІЮ ДЛЯ ДОДАВАННЯ БУДЬЯКОЇ КІЛЬКОСТІ ЧИСЕЛ

// const add = function(...args) {

//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(1, 10, 5, 7, 0, 3, 77));

// ..................НАПИШИ ФУНКЦІЮ filterNumber(array,[number1, ...]) ЯКА
// ПЕРШИЙ АРГУМЕНТ ПРИЙМАЄ МАСИВ ЧИСЕЛ
// ПІСЛЯ ПЕРШОГО АРГУМЕНТА БУДЕ БУДЬЯКА КІЛЬКІСТЬ АГРУМЕТІВ - ЧИСЕЛ
// ФУНКЦІЯ ПОВЕРТАЄ МАСИВ З АРГУМЕНТАМИ ПОЧИНАЮЧИ З ДРУГОГО
// 

// 

  // створюємо змінну де буде повертатися масив
  // const uniqueElement = [];
// потрібно перевірити чи включає масив array в args, або навпаки немає різниці
  // for (const element of array) {
  // перевіряємо чи є в args елементи масива array
    // if (args.includes(element)) {
      // цей елемент який збігається записуємо у новий масив
//       uniqueElement.push(element);

//     }
//   }
//   return uniqueElement;
//  }


// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));


//  .............ОБЕКТИ.........................

// const inputName = 'color';
// const inputValue = 'tomato';
// обект з значень змінних
// const colorPicker = {
//   [inputName]:inputValue,
// }
// color:'tomato'
// console.log(colorPicker)

// ......................................ПРИКЛАДИ МЕТОДІВ ОБЬЕКТА

// const playList = {
  // name: 'Супер плейліст',
  // rating: 5,
  // tracks: ['трек1', 'трек2', 'трек3'],
  // trackCount: 3,


  // ..............ЗМІНИТИ ІМЯ
  // changeName(newName) {
  //   this.name = newName;
  // },

  // ............ДОДАТИ НОВИЙ ТРЕК 
  // addTrack(track) {
  //   this.tracks.push(track);
   
    // tracks ['трек1', 'трек2', 'трек3', 'трек30']
  // },
    
 // .....................ОНОВИТИ  рейтинг
 
//   updateRatting(newRatting) {
//     this.rating = newRatting;

//  },
// .............ПОВЕРНУТИ ДОВЖИНУ ПЛЕЙЛІСТА З 4 ТРЕКІВ
  
// getTrackCount(){
  // довжина плейліста дорівнює кількості треків
  // return this.tracks.length;
  
// }
//  }
// playList.changeName('нове імя')
// playList.addTrack('трек30')
// console.log(playList)
// playList.updateRatting(4)
// console.log(playList)




// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// for (const key of keys) {
//   console.log(key)
//   console.log(feedback[key])

// totalFeedback += feedback[key]
  
// }
// console.log(totalFeedback)


// let totalValues = 0;

// const values = Object.values(feedback);
// for (const value of values) {
//   totalValues += value;
// }
// console.log(totalValues)



// .....................................................МАСИВ ОБЕКТІВ


// const friends = [
//   { name: 'Mango', online: false},
//   { name: 'Lemon', online: true},
//   { name: 'Orange', online: false},
//   { name: 'Melon', online: false},
//   { name: 'Poly', online: true},
//   { name: 'Apple', online: false},
// ]
// console.table(friends)
// Перебирамо

// for ( const friend of friends){
//   console.log(friend.name)

//   friends[2].bass = 666;
//   friend.ccc = 555;
  
// }
// console.table(friends)

// ................ШУКАЄМО ДРУГА ПО ІМЕНІ

// function findFriendByName (allFriendrs, friendName){
// for (const friend of allFriendrs){
//   console.log(friend.name)
//   if ( friend.name === friendName)
//   return 'yes';
// }
// return 'No'
  
// }

// console.log(findFriendByName(friends, 'Poly'));

// ...................ОТРИМАТИ ІМЕНА ВСІХ ДРУЗІВ, повернути в нвому масиві


// function getAllName(allFriendrs) {
//   const names = [];
  
//   for (const friend of allFriendrs){
//   names.push(friend.name);
//   }
//   return names;
// }
// console.log(getAllName(friends))

// .............................. ОТРИМАТИ  ІМЕНА ТИХ ДРУЗІВ ЯКІ ОНЛАЙН

// function getOnlineFriends (allFriendrs){
//   const friendOnline = [];

//   for (const friend of allFriendrs){
    
//     // якщо друг онлайн додаємо його у створений масив
//      if( friend.online){
//       friendOnline.push(friend);
//      }
//   }
  
  // повертаємо масив друзів онлайн
// return friendOnline;
// }
// console.log(getOnlineFriends(friends))

// ...................................ОТРИМАТИ МАСИВ ВСІХ ДРУЗІВ ЯКІ ОФЛАЙН

// function getOfflineFriends (allFriendrs) {

//   const friendOffline = [];

//   for (const friend of allFriendrs){
//     if ( !friend.online) {
//       friendOffline.push(friend);
//     }
//   }

// return friendOffline;
// }
// console.log(getOfflineFriends(friends))

//.................................ФУНКЦІЯ ПОВЕРТАЄ ОБЬЄКТ З 2 МАСИВАМИ З ОНЛАЙН І ОФЛАЙН ДРУЗЯМИ 

// function getFriendsByOnlineStatus(allFriends) {
// створюємо обьект з масивами де будуть збкрігатися списки друзів за статусом
// const friendsByStatus = { 
// online: [],
// offline: [],
// };

// for (const friend of allFriends){
// console.log(friend)
// if( friend.online){
//   friendsByStatus.online.push(friend);
// }
// friendsByStatus.offline.push(friend);
// }
// return friendsByStatus;
// }
// console.log(getFriendsByOnlineStatus(friends));


// ..........................SPRED зазпакока робиться копія або ссилка на масив

// const number = [1,2,6,40].concat([23,8,45,9], [66,1,0,7]);

// console.log(number)

// const numbers = [ ...[1,2,3],4,5];
// console.log(numbers)


// const temps = [1, 15, 20, 0, 16, 8];


// ............................МАСИВИ


//  пошук свмого маленького і селикого числа(температури)

// console.log(Math.max(temps))
// NaN
// console.log(Math.max(...temps))
//  20
// console.log(Math.min(...temps))
// 0

//  зєднуємо декілька масивів spred 

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [1, 10, 3];
// const nextWeekTemps = [19, 2, 3]

// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
// console.log(allTemps)

// ...........РАСПИЛЯЄМО ОБЄКТИ

// const defaultSettings = {
//   theme: 'light',
//   showNotification: true,
//   hideSidebar: false,
// }

// console.table(defaultSettings)

// const userSettings = {
//   showNotification: false,
//   hideSidebar: true,
// }

// зєднуємо розпаковкою настройки подефолду з новими настойками

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings
// }
// console.table(finalSettings)

// ..................ДЕСТРУКТУРИЗАЦІЯ ОБЄКТА

// const playlist = {
//   names: 'Супер плейліст',
//   rating: 5,
//   tracks: ['трек1', 'трек2', 'трек3'],
//   trackCount: 3,
// }

// const {
//   names,
//   rating,
//   tracks,
//   trackCount: numberOfTrack,
//   autor = 'user',
// } = playlist;

// console.log(numberOfTrack)

// const { names, rating, tracks, trackCount } = playlist;

// console.log(names, rating, tracks, trackCount);

// const { names, rating, tracks, trackCount,  } = playlist;

// ...................ГЛИБОКА ДИСТРУКТУРИЗАЦІЯ


// const profile = {
//   names: 'Hanna Kornytska',
//   tag: 'hhhhhhh',
//   location: 'Oslo',
//   avatar: 'https://gkhgghjb/mlk;jl///nkhhlkj',
//   status: {
//     followers: 5698,
//     views: 4827,
//     likes: 1208,
//   },
// };

// console.table(profile);

// const {
//   names,
//   avatar,
//   status: { followers, views, likes },
// } = profile;

// console.log(names, avatar, followers,views,likes)

// ....................ДЕСТРУКТИРИЗАЦІЯ МАСИВА

// const rgb = [256, 100, 80];

// const [a, b, c] = rgb;
// console.log(rgb)

// const authors = {
//   kiwi: 4,
//   poly: 6,
//   ajax: 5,
//   mango: 6,
// }

// const entries = Object.entries(authors);
// console.table(entries);
// перебираємо масив масивів після Object.entries
// for (const entry of entries) {
  
  // const name = entry[0];
  // const rating = entry[1];

  // або записати деструктивно

  // const [name, rating] = entry;

//   console.log(name, rating);
// }

// ................., REST (сбор)

// const profile = {
//   names: 'Hanna Kornytska',
//   tag: 'hhhhhhh',
//   location: 'Oslo',
//   avatar: 'https://gkhgghjb/mlk;jl///nkhhlkj',
//   status: {
//     followers: 5698,
//     views: 4827,
//     likes: 1208,
//   },
// };

//  якщо птрібно розділити обьект на основні парвметри і  всі останні зберегти окремо
// задаемо папаметри які потрібні,всі інші записуемо через ...(імя змінною довільне)
// const { names, tag, location, ...other } = profile;
// console.log(names, tag, location);
// console.log(other);

// ...............ПАТЕРН (ОБЬЕКТ НАСТРОІК) КОЛИ БАГАТО ПАРАМЕТРІВ У ФУНКІЇ
//  userProfile  це profile
// function showProfileInfo(userProfile) {
  // деструктиризація або записати замість (userProfile)
//   const { names, tag, location, avatar, status: { followers, views, likes } } = userProfile;
//   console.log(names, tag, location, avatar, followers, views, likes);
// }

// const profile = {
//   names: 'Hanna Kornytska',
//   tag: 'hhhhhhh',
//   location: 'Oslo',
//   avatar: 'https://gkhgghjb/mlk;jl///nkhhlkj',
//   status: {
//     followers: 5698,
//     views: 4827,
//     likes: 1208,
//   },
// };

// showProfileInfo(profile);

// ....................КОРЗИНА ТОВАРІВ

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//    },
//   add(product) {
//     // щоб додати новий ключ з властивістю в обьект створюємо змінну і в неї
//     //  додаємо всі продукти по дефолту ...product і пишемо новий quantity: 1
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }
//     this.items.push(newProduct);
//    },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i++) {
//       const item = this.items[i];
//       if (productName === item.name) {
//         this.items.splice(i, 1);
//       }
//   }
//    },
//   clear() { 
//     this.items = [];
//   },
//   countTotalPrice() { 
//     const { items } = this;
//     let total = 0;

//     for (const { price } of items) {
//       total += price;
//     }
//     return total
//   },
//   increaseQuantity(productName) { },
//   decreaseQuantity(productName) { },
// };


// cart.add({ name: 'orange', price: 50 });
// cart.add({ name: 'kiwi', price: 40 });
// cart.add({ name: 'kiwi', price: 40 });
// cart.add({ name: 'kiwi', price: 40 });

// console.table(cart.getItems())
// console.log('total', cart.countTotalPrice())
// cart.remove('orange');
// console.table(cart.getItems())




// ..... getItems() {} повертає ссилку на обькт
// ......add(product) {} додає обьект продукта в items
// ......remove(productName) {} повністю видалити продукт з обькту
//       перебираемо обьект через і томущо будемо видаляти продукт через splice ,а йому потрібен індекс
// ......CLEAR ОЧИЩАЄ КОРЗИНУ просто примвоюємо пустий масив до items і він очищається
// ......countTotalPrice РАХУЄ ЗАГАЛЬНУ СУМУ В ОБЬЕКТІ


// ....................CALL-BACK ФУНКЦІЇ
// call бек функція

// const filter = function (array,callback1) {

//   const filterArray = [];

//   for (const element of array) {
//     console.log(element);
//     console.log(callback1(element));

//     const passed = callback1(element);
//     if (passed) {
//   filterArray.push(element)
// }

//   }
//   return filterArray;
// }


// написати кол бек функцію яка буде повертати масив чисел по фільтру.
// функція повертає числа які бідьші та дорівнюють 3

// const callback1 = function (value) {
//   return value >= 3;
// }


// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1)


// функція  2 повертає числабульше і дорівнює 4
//  інлайн функція

// const r2 =  filter([1, 2, 3, 4, 5,6,7,8], function (value){
// return value >= 4;
// });
// console.log(r2)


// .....ЗАЧАЧА НАСТУПНА

// call бек функція

// const filter = function (array,callback1) {

//   const filterArray = [];

//   for (const element of array) {
//     console.log(element);
//     console.log(callback1(element));

//     const passed = callback1(element);
//     if (passed) {
//   filterArray.push(element)
// }

//   }
//   return filterArray;
// }


// const fruits = [
//   {name: 'kiwi', quantity: 200, isFresh:true},
//   {name: 'orange', quantity: 100, isFresh:false},
//   {name: 'apple', quantity: 700, isFresh:true},
//   {name: 'bananas', quantity: 250, isFresh:false},
// ];

// .........повернути масив фруктів у яких кідькість більша 150

// функція вищого рангу в якій використана колбек функця

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 150;
// }


// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3)

// ...........................ЗАМКНЕННЯ
// ФУНКЦІЯ  КОЛБЕК innerFunction ПРИ ВИЗОВІ БУДЕ МАТИ ДОСТУП ДО ЛОКАЛЬНИХ ЗМІННИХ ТІЄЇ ФУНКЦІЇ
//  ДЕ ЇЇ ВИЗИВАЛИ( БВТЬКІВСЬКА. ФУНКЦІЯ В ЯКІЙ ВОНА ЗНАХОДИТЬСЯ)

// const fnD = function(parametr){
//   const innerVariable = 'значення веутрішньоі функції fnD';

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVariable);
//     console.log('визов innerFunction');
//   }
//   return innerFunction;
// }
// const fnB = fnD(555);
// fnB();
// console.log(fnB);

// ЗАДАЧА ОКРУГЛЯТОР

// const floattingPoint = 3.658412;
// округляємо число до цілого
// const someInt = Math.round(floattingPoint);
// console.log(someInt)
// округляємо до потрібної кількості цифр після крапки і призводимо до числа
// const withDecimals = Number(floattingPoint.toFixed(2));
// console.log(withDecimals)

// НАПИШЕМО ФУНКЦІЮ ЯКА БУДЕ ОКРУГЛЯТИ ДО 2 КОЖНЕ ЧИСЛО ДЕ ЇЇ БУДУТЬ ВИКОРИСТОВУВАТИ

// const rounder = function(number, places) {
//   return Number(number.toFixed(places));
// }
// number - саме число яке округляють
// places - кількість чисел для округлення
//  визиваємо rounder і функція відпрацювує
// console.log(rounder(6.5666, 2));


//  функція замкнення для округлення 
// const rounder = function(places){
//   return function (number){
//     return  Number(number.toFixed(places));
//   }
// }
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(6.5666, 2));
// console.log(rounder3(10.5666, 2));

//.........................  СТРІЛОЧНІ ФУНКЦІЇ

// const add = function (a,b,c){
//   return a+b+c;
// }

// const add = (a,b,c) => {
//   return a+b+c;
// }

// const add = (a,b,c) => a+b+c;

// const add = (a,b,c) => ({array: 12})

// console.log(add(2,10,2));


// const numbers = [ 1,2,3,8,42];
//  звичайна функція 

// const greaterThenTwo = numbers.filter(function(num) {
//   return num > 2;
// })

// console.log(greaterThenTwo)
//  стрілка 

// const greaterThenOne= numbers.map(num => {
//   return num * 3;
// });
// console.log(greaterThenOne)
//  aбо ще коротше коли один ретерн

// const greaterThenOneTwo = numbers.map(num => num * 3);
// console.log(greaterThenOneTwo)

//  a - b відменшого до більшого, b - a навпаки від більшого до меншого
// const sorted = numbers.sort((a,b) => b - a);
// console.log(sorted)

//  звичайна запис функції
// const res = numbers.filter(function(num){
//   return num > 2;
// })
// .map(function(num) {
//   return num * 3;
// })
// .sort(function(a,b) {
//   return b - a;
// })
// console.log(res)

//  стрілка переписна функція

// const res = numbers
// .filter(num => num > 2)
// .map(num => num * 3)
// .sort((a,b) => b-a);

// console.log(res)

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},

// ] ;
// звичайна функція
// const onlineAndSorted = players.filter(function(player) {
//   return player.isOnline; 
// })
// .sort(function(prevPlayer, nextPlayer) {
//   return prevPlayer.rank - nextPlayer.rank;
// })
// console.log(onlineAndSorted) 

// стрілка

// const onlineAndSorted2 = players
// .filter( player => player.isOnline)
// .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank)
// console.log(onlineAndSorted2)

// звичайна функція треба збільшити кількість point кожного player на 10%

// const updatePlayers = players.map(function(player) {
//   return{
// ...player,
// points: player.points + player.points * 0.1,
//   };
// });
// console.table(updatePlayers)

// // стрілка

// const updatePlayers2 = players.map(player =>
//    ({...player, points: player.points + player.points * 0.1}));

//   console.table(updatePlayers2)

// ЗБІЛЬШИТИ КІЛЬКІСТЬ ГОДИН ПО ID

// const playerIdToUpdate = 'id-3';

// const updatePlayers = players.map(function(player){
//   if( player.id === playerIdToUpdate){
//     return {
  
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// })

// console.table(updatePlayers)

// стрілка

// const updatePlayers2 = players.map( player => {
//   return player.id === playerIdToUpdate 
//   ?{...player, timePlayed: player.timePlayed + 50}
//   : player;
// })

// console.table(updatePlayers2)
  
// ........................FOREACH МЕТОД ПЕРЕБИРАННЯ МАСИВУ( нічого не повертає)


// const numbers = [1, 5, 9, 42, 10, 6];


// number елемент масива. index індекс елемент масива. array ссилка на масив

// numbers.forEach(function (number, index, array) {
//   console.log(number)

//   // array[index] = 20;
// });
// console.log(numbers)

// .......................MAP...............

// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers)

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
// ]
// console.log(players)
//  масив з імен
// const playersName = players.map(player => player.name);
// console.log(playersName)
// // масив id
// const playerId = players.map(player => player.id);
//  console.log(playerId)

//  ЗБІЛЬШИТИ КІЛЬКУІСТЬ ПОІНТІВ НА 10% ( 1.1)

// const updatePoints = players.map(player => {
//   return {
//     ...player,
//     points: Math.round(player.points * 1.1),
//   }
// }
// );

// console.table(updatePoints)

//  ЗБІЛЬШИТИ КФЛЬКІСТЬ TIMEPLAYER У ОДНОГО З ГРАВЦІВ 'id-3'

// const playerIdToUpdate = 'id-3';

// const updateTimePlayer = players.map(player => {
//   return player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 33 }
//     : player;
  
// })
// console.table(updateTimePlayer)

// .....................FILTER

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
// ]
// console.log(players)

// OТРИМАТИ МАСИВ ВСІХ ГРАВЦІВ ОНЛАЙН деструктуризація

// const onlinePlayers = players.filter(({isOnline}) => isOnline)
// console.log(onlinePlayers)

// СПИСОК ГРАВЦІВ З ЧАСОМ БІЛЬШЕ 250

// const hardcorePlayers = players.filter(player => player.timePlayed > 250)
// console.table(hardcorePlayers)
// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getSortedFriends = users => {
//  return [...users].filter(
//    (friend, index, array) => array.indexOf(friend) === index)
// .sort((a,b) => a.localeCompare - b)
// };
// const result = getSortedFriends(users)
// console.log(result)

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
// ]
// console.table(players)

//  .........................FIND  ЗНАХОДТЬ ОДИН(перший) УНІУВЛЬНИЙ ЕЛЕМЕНТ
//  знайти унікальий елемент
// const playerIdToFind = 'id-5';

// const playerWithId = players.find(player => player.id === playerIdToFind)
// console.log(playerWithId)
// знайти гравця по імені

// const playerNameToFind = 'Orange';

// const playerNameUpdate = players.find(player => player.name === playerNameToFind)
// console.log(playerNameUpdate)

// ...................EVERY  AND  SOME

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
// ]
// console.table(players)

// const isAllOnline = players.every(player => player.isOnline);
// console.log(isAllOnline)

// const isAnyOnline = players.some(player => player.isOnline);
// console.log(isAnyOnline)

// .......................REDUCE..................


// const numbers = [50, 70, 40, 10];
// //  acc  тимчасова змінна в якій зберігається значення(результат) на кожній штераціі
// // number елемент масиву
// // 0 початкове значення з якого будуть відраховуватися умови функції 

// const total = numbers.reduce((acc, number) => {
//   // console.log(number)
//   // console.log(acc)
//   return acc + number;
// }, 0);
// console.log(total)

// ПОРАХУВАТИ ЗАГАЛЬНУ ЗАРПЛАТУ

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// //  спочатку витягаємо масив з зарплатами через Object.value, і на ньому вже визиваємо reduce
// const totalSalary =Object.values(salary)
//  .reduce((acc, value) => {
//    return acc + value;
//  })
// console.log(totalSalary)  

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
// ]

// // ПОРАХУВАТИ ЗАГАЛЬНУ КІЛЬКУСТЬ ГОДИН

// const totalTimePlayed = players.reduce((totalTime, player) => {
//   return totalTime + player.timePlayed
// }, 0)
// console.log(totalTimePlayed)


// const cart = [
//   {label: 'Apple', price: 300, quantity: 2},
//   {label: 'Kiwi', price: 100, quantity: 7},
//   {label: 'Ananas', price: 250, quantity: 5},
//   {label: 'Melon', price: 200, quantity: 3},
// ]

// ПОРАХУВАТИ СУММУ ТОВАРІВ КОРЗИНИ (сумма товара * кількість)

// const totalPriceCart = cart.reduce((totalPrice, item) =>
//   totalPrice + item.price * item.quantity
// , 0);
// console.log(totalPriceCart)

//  деструктуризую

// const totalPriceCart = cart.reduce((totalPrice, { price, quantity }) =>
//   totalPrice + price * quantity, 0);
// console.log(totalPriceCart)

// const tweets = [
//   {id: '000', likes: 3,  tags: ['js', 'node.js']},
//   {id: '001', likes: 8,  tags: ['html', 'css']},
//   {id: '002', likes: 10, tags: ['html', 'js', 'node.js']},
//   {id: '003', likes: 9,  tags: ['css', 'react']},
//   {id: '004', likes: 2,  tags: ['js', 'node.js', 'react']},
// ]

// ЗІБРАТИ ВСІ ТЕГИ tags

// const allTags = tweets.reduce((tags,tweet) => {
//   tags.push(...tweet.tags)
// return tags;
// }, []
// )
// console.log(allTags)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getSortedFriends = users =>
//     users.flatMap(user => user.friends)
//   .filter((friend,index,users) => users.indexOf(friend) === index)
// .sort((a,b) => a.localeCompare(b))

// console.log(getSortedFriends(users))

// ВАРІАНТ РІШЕННЯ ЧЕРЕЗ REDUCE AND CONCAT АЛЕ ЕЛЕМЕНТИ НЕ БУДУТЬ УНІКАЛЬНІ

// const getSortedFriends = users => {
//  return users.reduce((allFriendrs, user) => {
//   return  allFriendrs.concat(user.friends)
//   }, [])
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getSortedFriends(users))



    
// const tweets = [
//   {id: '000', likes: 3,  tags: ['js', 'node.js']},
//   {id: '001', likes: 8,  tags: ['html', 'css']},
//   {id: '002', likes: 10, tags: ['html', 'js', 'node.js']},
//   {id: '003', likes: 9,  tags: ['css', 'react']},
//   {id: '004', likes: 2,  tags: ['js', 'node.js', 'react']},
// ]

// СТАТИСТИКА ТЕГІВ

// const allTags = tweets.reduce((tags,tweet) => {
//   tags.push(...tweet.tags)
// return tags;
// }, []
// )
// console.log(allTags)

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc)
//   if (acc[tag]) {

//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// },   {})

// console.log(tagsStats)


// ...................................SORT
// const numbers = [1, 2, 7, 3, 10];
// numbers.sort();
// console.log(numbers);

// const text = ['N', 'i', 'T', 'd'];
// text.sort()
// console.log(text)


// const numbers = [1, 2, 7, 3, 10];
// //  сорттування на збільшення
// numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
// console.log(numbers)
// // сортоування на зменшення
// numbers.sort((firstNumber, secondNumber) => secondNumber - firstNumber);
// console.log(numbers)

// якщо оригінал масиву не портібно змінювати,робимо копіяю масиву методом ...spred

// const copy = [...numbers]
//   .sort((firstNumber, secondNumber) => secondNumber - firstNumber);
// console.log(copy)

// ...СОРТУВАННЯ СКЛАДНИХ ТИПІВ

// const players = [
//   {id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800},
//   {id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450},
//   {id: 'id-3', name: 'Orange', timePlayed: 720, isOnline: false, points: 40, rank: 100},
//   {id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true,  points: 65,rank: 650},
//   {id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false,  points: 75,rank: 200},
// ]
// сортуємо  по timePlayed

// const sorteByBestPlayers = [...players].sort((a, b) =>
//   a.timePlayed - b.timePlayed);
// console.log(sorteByBestPlayers)
  
// по алфавіту LOCALECOMPARE
// const byName = [...players].sort((a, b) =>
//   a.name.localeCompare(b.name));
//   console.log(byName)

//  ..........................fLATMAP

// const tweets = [
//   {id: '000', likes: 3,  tags: ['js', 'node.js']},
//   {id: '001', likes: 8,  tags: ['html', 'css']},
//   {id: '002', likes: 10, tags: ['html', 'js', 'node.js']},
//   {id: '003', likes: 9,  tags: ['css', 'react']},
//   {id: '004', likes: 2,  tags: ['js', 'node.js', 'react']},
// ]

// const listTags = tweets.map(tweet => tweet.tags);
// console.log(listTags)
// // деструктуризація
// const listAllTags = tweets.flatMap(({tags}) => tags);
// console.log(listAllTags)

// ....................ЛАНЦЮГИ АЛГОРИТМІВ

// const players = [
//   { id: 'id-1', name: 'Mango', timePlayed: 310, isOnline: true, points: 54, rank: 800 },
//   { id: 'id-2', name: 'Kiwi', timePlayed: 360, isOnline: true, points: 90, rank: 450 },
//   { id: 'id-3', name: 'Orange', timePlayed: 20, isOnline: false, points: 40, rank: 100 },
//   { id: 'id-4', name: 'Apple', timePlayed: 560, isOnline: true, points: 65, rank: 650 },
//   { id: 'id-5', name: 'Ananas', timePlayed: 120, isOnline: false, points: 75, rank: 200 },
// ];

//  ЗАДАЧА ВІДСОРТУВАРИТИ ПО РАНГУ ГРАВЦІВ ЯКІ ОНЛАЙН
// 1. ФІЛЬТРУЄМО ГРАВЦІВ ХТО ОНЛАЙН
// 2. СОРТУЄМО ПО РАГНУ

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((a, b) => a.rank - b.rank);

// console.table(onlineAndSorted);


//......................FINDINDEX

// // згайти індекс  першого елемента який відповідає умові( === 100)
// const findIndexPlayers = players.findIndex(player => player.rank === 100);
// console.log(findIndexPlayers)
// // 2

// // знайти шндекс першого елемента що відповідає умову ( > 500)
// const findIndex = players.findIndex(player => player.timePlayed > 500)
// console.log(findIndex)
// // 3


//  ..............CALL BACK
// ЗАВДАННЯ 
// createProduct(obj, callback)(обєкт товару.колбек).ФУНКЦІЯ СТВОРЮЄ СТВОРЮЄ ОБІЄКТ ТОВАРІ 
// ДОДАЄ ВЛАСТИВІСТЬ ID.ТА ВИКЛИКАЄ КОЛЛБЕК ПЕРЕДАЮЧИ ЙОМУ СТВОРЕНИЙ ОБЬІКТ
// ...logProduct(product) ЛОГУЄ НОВИЙ ОБЬЕКТ З ID В КОНСОЛЬ
// ...logTotalPrice(product) РАХУЄ ЗАГАЛЬНУ ВАРТІСТЬ ТОВАРУ

// Math.random().toString(36).substring(2)  РАНДОМНА СТРОКА ОБРІЗАНА ПІСЛЯ 2 СИМВОЛУ
  

// function logProduct(product) {
//   console.log(product);
// }
// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }


// function createProduct(obj, callback) {
//   // console.log(obj)
//   // console.log(callback)
//   let product = {
//     ...obj,
//     id: Math.random().toString(36).substring(2),
//   };
//   callback(product);
//   return product;
// }


// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'kiwi', price: 20, quantity: 5 }, logTotalPrice);


// ...................................THIS

// const fn = function () {
//   console.log('fn -> this', this)
// }
// fn()

// underfind
// const book = {
//   title: 'React for beginners',

//   showThis() {
//     console.log('showThis -> this', this);
//   },

//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis()
// const xThis = book.showThis;
// xThis()
// underfind
// const xTitle = book.showTitle;
// xTitle()


/////////......................ПОЧАТОК АВТОПЕРЕВІРКИ. МОДУЛЬ 1................//////////
/// TASK 1
// let productName = 'Droid';
// let pricePerItem = 2000;
// console.log(productName)
// console.log(pricePerItem)

// / TASK 2
// productName = 'Repair droid';
// pricePerItem = 3500;
// console.log(productName)
// console.log(pricePerItem)

// / TASK 3
// const topSpread = 160;
// let distance = 617.54;
// const login = 'mango935';
// let isOnline = true;
// const isAdmin = false;
// console.log(topSpread)
// console.log(distance)
// console.log(login)
// console.log(isOnline)
// console.log(isAdmin)

// / TASK 4
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// let totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice)

// / TASK 5
// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message)

// / TASK 6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFree = 50;

// let totalPrice = pricePerDroid * orderedQuantity + deliveryFree;
// console.log(totalPrice)
// const message = `You ordered droids worth ${totalPrice} credits.Delivery (${deliveryFree} credits) is included in total price `;
// console.log(message)

// /TASK 7
// function sayHi() {
//   console.log(`Hello,this is my first function!`);
// }
// sayHi();

// / TASK 8
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c} `);
// }
// add(15, 27, 10);

// / TASK 9
// function add(a, b, c) {
//   return a + b + c;
// };
// console.log(add(10,20,30))

// / TASK 10
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits `;
//   return message;
// }
// console.log(makeMessage(`Radar`, 6150))

// / TASK 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   return orderedQuantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));

// / TASK 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFree) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFree;
//   const message = `You ordered  droids worth ${totalPrice} credts.Delivery$(${deliveryFree} credits) is included in total price.`;
//   return message;
// }
// console.log(makeOrderMessage(2,100,50))

// / TASK 13
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(15));

// / TASK 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = `jqueryismyjam`;

//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch
// }
// console.log(isValidPassword(`mangodab265`));
// console.log(isValidPassword(`jqueryismyjam`));

// / TASK 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//    message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(20))
// console.log(checkAge(8))

// / TASK 16
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//   message ='Not enough gooods in stock'
//   } else {
//     message ='Ordered is processed,our manager will contact you'
// }
//   return message;
// }
// console.log(checkStorage(100,50))
// console.log(checkStorage(100,130))

// / TASK 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

//  a += 2;
// console.log(a)
// b -= 4;
// console.log(b)
// c *= 3;
// console.log(c)
// d /= 10;
// console.log(d)

// / TASK 18

// function makeTransction(pricePerDroid, orderedQuantity, customerCredits) {
//   let totalPrice = pricePerDroid * orderedQuantity;
//   let message;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds !`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   return message;
// }
// console.log(makeTransction(3000, 5, 23000));
// console.log(makeTransction(5000, 10, 8000));

// / TASK 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'wwwwwwwwwwww';
//   let message;
//   if (password === null) {
//     message = 'Canceled by user'
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!'
//   } else {
//     message = 'Access danied,wrong password!'
//   }
//   return message;
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('wwwwwwwwwwww'));

// / TASK 20
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//   message = 'There are no products in the order!'
//   } else if (ordered > available) {
//     message = 'You order is too large, there are not enough items in stock! '
//   } else {
//     message = 'The order is accepted, our manager will contact you'
//   };
//   return message;
// }
// console.log(checkStorage(100,50))
// console.log(checkStorage(100,130))
// console.log(checkStorage(70,0))

// / TASK 21
// function isNumberInRange(start, end, number) {
//   let isInRange = number >= start && number <= end;
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// / TASK 22
// function checkIfCanAccessContent(subType) {
//   let canAccessContent = subType === 'pro' || subType === 'vip';
//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('pro'));
// console.log(checkIfCanAccessContent('starter'));

// / TASK 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));

// / TASK 24
// function getDiscount(totalSpend) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLDEN_DISCOUNT = 0.1
    
//   let discount = 0;
//   if (totalSpend >= 50000) {
//     discount = GOLDEN_DISCOUNT;
//   } else if (totalSpend >= 20000 && totalSpend < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpend >= 5000 && totalSpend < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else  {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// / TASK 25
// function checkStorage(available, ordered) {
//   let message;
//   message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted,our manager will contact you';
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

// / TASK 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'wwwwwwwwwwww';
//   let message = '';
//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied,wrong password!'
//   return message;
// }
// console.log(checkPassword('wwwwwwwwwwww'));
// console.log(checkPassword('sjvdlhjklh'));

// / TASK 27
// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;
//     case 'professional':
//       price = 20;
//       break;
//     case 'organization':
//       price = 50;
//       break;
//   }
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));

// / TASK 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'wwwwwwwwwwwww';
//   let message;
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default: 
//       message = 'Access denied, wrong password!'
//   }
//   return message;
// }
// console.log(checkPassword('iiiiiiiiiii'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('wwwwwwwwwwwww'));

// / TASK 29
// function getShippingCost(country) {
//   let message;
//   let price;
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`; 
//       break;
//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = `Sorry,there is no delivery to your country`;
//   }
//   return message;
// };
// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Sweden'));

// / TASK 30
// function getNameLength(name) {
//   return  `Name ${name} is ${name.length} characters long`;
// }
// console.log(getNameLength('Poly'));
// console.log(getNameLength('Harambe'));
// console.log(getNameLength('Billy'));
// console.log(getNameLength('Joe'));

// / TASK 31
// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// / TASK 32
// function getSubstring(string, length) {
//   const substring = string.slice(string[0], length);
//   return substring;
// }
// console.log(getSubstring('Hello word', 3));
// console.log(getSubstring('Hello word', 6));
// console.log(getSubstring('Hello word', 11));

// / TASK 33
// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   return result;
// }
// console.log(formatMessage('Curabitur lagula sapien', 16));
// console.log(formatMessage('Curabitur lagula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpic a felis in nunc fringilla', 15));

// / TASK 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   return normalizedInput;
// };
// console.log(normalizeInput('Hello world'));
// console.log(normalizeInput('This ISNT SpaM'));
// console.log(normalizeInput('Big SALE'));

// / TASK 35
// function checForName(fullname, name) {
//   const result = fullname.includes(name);
//   return result;
// }; 
// console.log(checForName('Egor Kolbasov', 'Egor'));
// console.log(checForName('Egor Kolbasov','egor' ));

// / TASK 36
// function checkForSpam(message) {
//   let result;
//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result
// };
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('Get best sale offers now!'));

// / MODULE 2

// / TASK 1
// function checkAge(age) {

//   if (age >= 18) {
//     return  'You are an adult';
//   }
//   return 'You are minor';
  
// }
// console.log(checkAge(20));
// console.log(checkAge(8));

// / TASK 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'wwwwwwwwwwwww';
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access danied, wrong password';
// }
// console.log(checkPassword('mango'));
// console.log(checkPassword('wwwwwwwwwwwww'));

// / TASK 3
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty'
//   } if (ordered > available){
//     return 'Your order is too large,not enough goods in stock';
//   }
//    return ' The order is accepted,our manager contact you';
   
// };
// console.log(checkStorage(100,50));
// console.log(checkStorage(100,130));
// console.log(checkStorage(70,0));

// / TASK 4
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);

// / TASK 5
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// / TASK 6
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);

// / TASK 7
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// / TASK 8
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// / TASK 9
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// };
// console.log(getExtremeElements([1,2,3,4,5]));
// console.log(getExtremeElements(['Earth','Mars','Venus']));

// / TASK 10
// function splitMessage(message, delimiter) {
//   return message.split(delimiter);
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));

// / TASK 11
// function calculateEngravingPrice(message, pricePerWord) {
//   let totalPrice;
//   const messageAll = message.split(' ');
//   totalPrice = messageAll.length * pricePerWord;
//   return totalPrice;
// };
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));

// / TASK 12
// function makeStringFromArray(array, delimiter) {
//   return array.join(delimiter);
// };
// console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '));
// console.log(makeStringFromArray(['M' ,'a','n','g','o'], ''));

// / TASK 13
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
  
// };
// console.log(slugify('Arrays FOR begginers'));

// / TASK 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(2);
//   console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// / TASK 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// / TASK 16
// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   newArray = newArray > maxLength ? newArray : newArray.slice(0, maxLength)
  
//   return newArray;
// };
// console.log(makeArray(['Mango','Poly'],['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango','Poly','Houston'],['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea', 'Houston'], 0));

// / TASK 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i++)
// console.log(i);

// / TASK 18
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++){
//     total += i ;
//   }
//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal());

// / TASK 19
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// for (let i = 0; i < fruits.length; i++) {
//   if (i < 4) {
//     const fruit = fruits[i];
//     console.log(fruit);
//   }
// }

// / TASK 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i ++){
//     total += order[i];
//   };
//   return total;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// / TASK 21
// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longWord = words[words.length - 1];
//   console.log(longWord);
//   for (const element of words) {
//     if (element.length > longWord.length) {
//       longWord = element;
//     }
//   }
//   return longWord;
// };

// console.log(findLongestWord('the quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('google do a roll'));

// / TASK 22
// function createArrayOfNumbers(min, max) {
//   const array = [];
//   for (let i = min; i <= max; i++) {
//     array.push(i);
//   }
//   return array;
// };
// console.log(createArrayOfNumbers(1,3));
// console.log(createArrayOfNumbers(14,17));

// / TASK 23
// function filterArray(numbers, value) {
//   let array = [];
//   for (let i = 0; i <= numbers.length; i++) {
//     if ( [i] > value) {
//       array.push(i)
//     }
//   }
//   return array;
// };
// console.log(filterArray([1,2,3,4,5], 3));

// / TASK 24
// function checkFruit(fruit) {
//   const  fruits = ['apple', 'plum', 'pear', 'orange']
//   let check = fruits.includes(fruit) ? true : false;
// return check;
// };
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));

// / TASK 25
// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array1.includes(array2[i])) {
//       newArray.push(array2[i])
//     }

//     return newArray;
//   }
// };
// console.log(getCommonElements([1,2,3], [2,4]));

// / TASK 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   for ( const element of order) {
//     total += element;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// / TASK 27
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([1,2,3,4,5], 3));

// / TASK 28
// const a = 3 % 3;
// // console.log(a);
// const b = 4 % 3;
// // console.log(b);
// const c = 11 % 8;
// // console.log(c);
// const d = 12 % 7;
// // console.log(d);
// const e = 8 % 6;
// // console.log(e);

// / TASK 29
// function getEvenNumbers(start, end) {
//   const numbers = [];
//   for (let i = start; i < end; i++){
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// };
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));

// / TASK 30
// const start = 6;
// const end = 27;
// let numbers;
// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     numbers = i;
//     break;
//   }
// }
// console.log(numbers);

// / TASK 31
// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i++){
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// };
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));

// / TASK 32
// function includes(array, value) {
//   for (const element of array) {
//     if ( element === value )
//     return true;
//   }
//   return false;
// };
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(document);

const body = document.body;
console.log(body);
// пошук елеиента(класс в html)
const listWithClass = document.querySelector('.title');
console.log(listWithClass);

const text = document.querySelector(".text");
console.log(text.textContent);
