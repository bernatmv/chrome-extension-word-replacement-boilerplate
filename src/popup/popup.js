document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('something');
  checkPageButton.addEventListener('click', function() {
    alert(`Do something alert!`)
  }, false);
}, false);