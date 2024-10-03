src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">

document.getElementById('ContactButton').addEventListener('click', function() {
    var container = document.getElementById('expandableContainer');
    container.classList.toggle('expanded');
});