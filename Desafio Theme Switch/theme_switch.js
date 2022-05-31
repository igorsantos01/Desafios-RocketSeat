const checkbox = document.querySelector('input[type=checkbox]')
const background = document.querySelector('.light')
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        background.classList.replace('light','dark')
    } else {
        background.classList.replace('dark','light')
    }
});
