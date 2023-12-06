var rightSquare = document.getElementById('rightSquare');
var leftSquare = document.getElementById('leftSquare');
var isScrolling;

// preciso corrigir essa função para que a animação vá e volte de acordo com a rolagem
window.addEventListener('scroll', ()=>{ 
  var rect = rightSquare.getBoundingClientRect();
  var scrollPosition = window.scrollY||window.pageYOffset;
  

  if(scrollPosition > rect.top){
    leftSquare.classList.add('arcAnimate');
    leftSquare.classList.remove('moveBack')
  }else{
    leftSquare.classList.remove('arcAnimate')
    leftSquare.classList.add('moveBack')
  }
})





