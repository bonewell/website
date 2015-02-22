/*
 * AXAH - Ajax for xhtml
 */


//object detection to return the correct object depending upon broswer type. Used by the getAXHA(); function.
function getNewHttpObject() {
    var objType = false;
    try {
        objType = new ActiveXObject('Msxml2.XMLHTTP');
    } catch(e) {
        try {
            objType = new ActiveXObject('Microsoft.XMLHTTP');
        } catch(e) {
            objType = new XMLHttpRequest();
        }
    }
    return objType;
}

//Function used to update page content with new xhtml fragments by using a javascript object, the dom, and http.
function getAXAH(url,elementContainer){
	document.getElementById(elementContainer).innerHTML = '<blink class="redtxt">Loading...<\/blink>';
	var theHttpRequest = getNewHttpObject();
	theHttpRequest.onreadystatechange = function() {processAXAH(elementContainer);};
	theHttpRequest.open("GET", url);
	theHttpRequest.send(false);

		function processAXAH(elementContainer){
		   if (theHttpRequest.readyState == 4) {
			   if (theHttpRequest.status == 200) {
				   document.getElementById(elementContainer).innerHTML = theHttpRequest.responseText;
			   } else {
				   document.getElementById(elementContainer).innerHTML="<p><span class='redtxt'>Error!<\/span> HTTP request return the following status message:&nbsp;" + theHttpRequest.statusText +"<\/p>";
			   }
		   }
		}

}