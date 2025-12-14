const images = document.querySelectorAll('img');
images.forEach(img => {
    img.onclick = function() {
        this.style.border = '10px solid red';
        setTimeout(() => {
            this.style.border = '';
        }, 1000);
    };
});
