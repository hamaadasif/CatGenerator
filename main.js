var output = document.getElementById('output');
var button = document.querySelector('#button');
button.addEventListener('click', loadCat);

function loadCat() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var html = '<img src="' + data[0].url + '"width="300px">';
            output.innerHTML = html;
        }
    }
    ajax.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
    ajax.send();
}