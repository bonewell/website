/**
 * Скрип для смены стиля сайта
 */
function getCookie(name) {
   var cookie = " " + document.cookie;
   var search = " " + name + "=";
   var setStr = null;
   var offset = 0;
   var end = 0;
   if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset != -1) {
         offset += search.length;
         end = cookie.indexOf(";", offset)
         if (end == -1) {
            end = cookie.length;
         }
         setStr = unescape(cookie.substring(offset, end));
      }
   }
   return(setStr);
}
function change(sid)
{
   var obj = document.getElementById("style");
   if (sid==3)
   {
      obj.href="styles_home.css";
   }
   else if (sid==2)
   {
      obj.href="styles.css";
   }
   else
   {
      obj.href="styles_wood.css";
   }
}
function citata_set()
{
   var obj_c = document.getElementById("citata");
   var obj_a = document.getElementById("author");
   if (obj_c && obj_a) {
      var x = Math.floor(Math.random()*(citata.length));
      obj_c.innerHTML = citata[x].text;
      obj_a.innerHTML = citata[x].author;
   }
}
style_id=1;
//читаем значение стиля из куки
style_id = getCookie("sid");
change(style_id);
function loadstyle()
{
   style_id = getCookie("sid");
   var obj = document.getElementById("mystyle");
   obj.value=style_id;
   citata_set();
}
function changestyle()
{
   var obj = document.getElementById("mystyle");
   style_id=obj.value;
   document.cookie="sid="+style_id+"; path=/; expires=Fri, 31-Dec-2032 00:00:00 GMT";
   change(style_id);
}