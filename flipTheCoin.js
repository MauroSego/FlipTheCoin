var boton = document.getElementById('boton');
var texto = document.getElementById('numerito');
var $cara = document.getElementById('cara');
var $seca = document.getElementById('seca');

boton.addEventListener('click', flip)


function flip(){
  var tiros = parseInt(texto.value)
  if (tiros < 5000){
    var cara = 0;
    var seca = 0;
    for(i = 0; i < tiros; i++){
      var num = Math.random();
      if(num >= 0.5){
        cara++
        $cara.textContent = cara
      } else{
        seca++
        $seca.textContent = seca
      }
    }
    if(cara > seca){
      alert('ganó cara')
    } else if(cara == seca){
      alert('empate')
    }else{
      alert('Ganó seca')
    }
  } else{
    alert('Muchos tiros pueden ralentizar tu PC. Elegí menos');
  }
}
