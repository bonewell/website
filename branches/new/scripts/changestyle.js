/**
 * ����� ��� ����� ����� �����
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
style_id=1;
//������ �������� ����� �� ����
style_id = getCookie("sid");
change(style_id);
function loadstyle()
{
   style_id = getCookie("sid");
   var obj = document.getElementById("mystyle");
   obj.value=style_id;
}
function changestyle()
{
   var obj = document.getElementById("mystyle");
   style_id=obj.value;
   document.cookie="sid="+style_id+"; path=/; expires=Fri, 31-Dec-2032 00:00:00 GMT";
   change(style_id);
}