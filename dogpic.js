function getDogPic(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if ((this.readyState === 4 && this.status === 200) || this.status === 304) {
            let myObj = JSON.parse(this.responseText);
            document.getElementById("placeholder").src = myObj.message;
        }
    };
    xmlhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
}