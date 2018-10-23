function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
if(getParameterByName("time") == null){
	location.replace("broken.html")
}
var time = Number(getParameterByName("time"));
console.log(getParameterByName("time"));
document.getElementById("time").innerHTML = time;
window.onload = function(){
	document.getElementById("redirect").innerHTML = `You will be redirected back to ${document.referrer} in`
	setInterval(function(){time -= 1;document.getElementById("time").innerHTML = time;if(time == 0){history.back()}},1000);
}
