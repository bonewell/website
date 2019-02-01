/**
 * Скрип с цитатами для главной страницы
 */

function loadquote() {
   var quotes = [
      {"text":"Музыка - источник радости мудрых людей", "author":"Сюнь-Цзы"},
      {"text":"Знать - чтобы предвидеть, предвидеть - чтобы обладать силой", "author":"О. Конт"},
      {"text":"Самолет - это набор элементов, каждый из которых по своей природе стремится упасть на землю, но ценой совместных непрерывных усилий преодолевает эту тенденцию.", "author":"Г. Буч"}
   ];

   var i = Math.floor((Math.random() * quotes.length));

   $('#main p#quote').ready(function () {
      $('#main p#quote').html(quotes[i]["text"]);
   });
   $('#main p#author').ready(function () {
      $('#main p#author').html(quotes[i]["author"]);
   })
}