// Add min. 2 digits
function getTime()  {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("display-time").innerHTML = time;
}