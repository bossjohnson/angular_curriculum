document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName('input')[0].addEventListener('input', function() {
        var inputText = this.value;
        document.getElementById('changeMe').innerText = inputText;
    });
});
