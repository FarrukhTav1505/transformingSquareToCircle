const trSquare = document.querySelectorAll('.square')
console.log(trSquare);

trSquare.forEach(item => {
    item.addEventListener('click', () => {
          item.classList.toggle('circle')
    })
})