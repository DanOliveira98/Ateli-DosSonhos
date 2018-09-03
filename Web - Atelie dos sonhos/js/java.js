
    document.querySelector('#ball-1').addEventListener('click', alterarSlide)
    document.querySelector('#ball-2').addEventListener('click', alterarSlide)
    document.querySelector('#ball-3').addEventListener('click', alterarSlide)
    document.querySelector('#ball-4').addEventListener('click', alterarSlide)

    function alterarSlide(event) {
      var element = event.target
      document.querySelectorAll('.ball').forEach(function(i) {
        i.classList.remove('active')
      })
      document.querySelectorAll('img').forEach(function(i) {
        i.classList.remove('active')
        if (i.id.includes(element.id.split('-')[1])) {
          i.classList.add('active')
        }
      })
      
      element.classList.add('active')
    }