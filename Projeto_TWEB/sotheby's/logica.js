  
// INICIO FUNÇÃO SIDE MENU
function openNav() {
    document.getElementById("mySidenav").style.width = "450px"; /* muda a largura do menu ao abrir */
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; /* muda a largura do menu ao fechar */
  }
// FIM FUNÇÃO SIDE MENU

document.getElementsByClassName("search").style.display="none";

// INICIO FUNÇÃO PT-EURO MENU
  function dropdown() {
    document.getElementById("pt-euro").classList.toggle("show");
  }


// INICIO GALERIAS
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Galerias");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//INICIO GALERIA 2
var slideIndex = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlides2 (n) {
  showSlides2(slideIndex = n);
}
function showSlides2 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 3
var slideIndex = 1;
showSlides3(slideIndex);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

// Thumbnail image controls
function currentSlide3 (n) {
  showSlides3(slideIndex = n);
}
function showSlides3 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 4
var slideIndex = 1;
showSlides4(slideIndex);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

// Thumbnail image controls
function currentSlide4 (n) {
  showSlides4(slideIndex = n);
}
function showSlides4 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias4");
  var dots = document.getElementsByClassName("dot4");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 5
var slideIndex = 1;
showSlides5(slideIndex);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex += n);
}

// Thumbnail image controls
function currentSlide5 (n) {
  showSlides5(slideIndex = n);
}
function showSlides5 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias5");
  var dots = document.getElementsByClassName("dot5");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 6
var slideIndex = 1;
showSlides6(slideIndex);

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex += n);
}

// Thumbnail image controls
function currentSlide6 (n) {
  showSlides6(slideIndex = n);
}
function showSlides6 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias6");
  var dots = document.getElementsByClassName("dot6");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 7
var slideIndex = 1;
showSlides7(slideIndex);

// Next/previous controls
function plusSlides7(n) {
  showSlides7(slideIndex += n);
}

// Thumbnail image controls
function currentSlide7 (n) {
  showSlides7(slideIndex = n);
}
function showSlides7 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias7");
  var dots = document.getElementsByClassName("dot7");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 8
var slideIndex = 1;
showSlides8(slideIndex);

// Next/previous controls
function plusSlides8(n) {
  showSlides8(slideIndex += n);
}

// Thumbnail image controls
function currentSlide8 (n) {
  showSlides8(slideIndex = n);
}
function showSlides8 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias8");
  var dots = document.getElementsByClassName("dot8");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 9
var slideIndex = 1;
showSlides9(slideIndex);

// Next/previous controls
function plusSlides9(n) {
  showSlides9(slideIndex += n);
}

// Thumbnail image controls
function currentSlide9 (n) {
  showSlides9(slideIndex = n);
}
function showSlides9 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias9");
  var dots = document.getElementsByClassName("dot9");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//INICIO GALERIA 10
var slideIndex = 1;
showSlides10(slideIndex);

// Next/previous controls
function plusSlides10(n) {
  showSlides10(slideIndex += n);
}

// Thumbnail image controls
function currentSlide10 (n) {
  showSlides10(slideIndex = n);
}
function showSlides10 (n) {
  var i;
  var slides = document.getElementsByClassName("Galerias10");
  var dots = document.getElementsByClassName("dot10");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.getElementById('voltar').addEventListener('click',voltar);
function voltar(){
  document.getElementById("form-id").style.display = "block";
  document.getElementById("zonas1").style.display = "none";
  document.getElementById("zonas2").style.display = "none";
  document.getElementById("zonas3").style.display = "none";
  document.querySelector('.voltar').style.display ="none";
  document.querySelector('.financiamento').style.display ="none";
  document.getElementById("re").style.display = "none";

  
} 

document.getElementById('text').addEventListener('click',showform);
function showform(){
  document.getElementById("form-id").style.display = "block";
  document.getElementById('text').style.display = "none";
  
}          

document.querySelector('.bt').addEventListener('click',showresult);
function showresult(){
  document.getElementById("zonas1").style.display = "inline-block";
  document.getElementById("zonas2").style.display = "inline-block";
  document.getElementById("zonas3").style.display = "inline-block";
  document.getElementById("re").style.display = "flex";
  document.getElementById("form-id").style.display = "none";
  document.querySelector(".voltar").style.display ="block";
  document.querySelector(".financiamento").style.display ="block";
}

document.getElementById("zonas1").addEventListener('mouseover',options1);
function options1(){
  document.getElementById('options1').style.display = "block";
}

document.getElementById("zonas1").addEventListener('mouseout',options1out);
function options1out(){
  document.getElementById('options1').style.display = "none";
}

document.getElementById("zonas2").addEventListener('mouseover',options2);
function options2(){
  document.getElementById('options2').style.display = "block";
}

document.getElementById("zonas2").addEventListener('mouseout',options2out);
function options2out(){
  document.getElementById('options2').style.display = "none";
}

document.getElementById("zonas3").addEventListener('mouseover',options3);
function options3(){
  document.getElementById('options3').style.display = "block";
}

document.getElementById("zonas3").addEventListener('mouseout',options3out);
function options3out(){
  document.getElementById('options3').style.display = "none";
}


          var form = document.getElementById("form-id");
          form.addEventListener('submit', function (event) {
              event.preventDefault();
          });

            var calc_zona1 = 0;
            var calc_zona2 = 0;
            var calc_zona3 = 0;

          document.getElementById("calc").addEventListener("click", function () {
          
              var tipologia = document.getElementById("tipologia").value;
              var area_util = parseInt(document.getElementById("area").value);
              var idade_imovel = parseInt(document.getElementById("idade").value);
              var tergaragem = document.getElementById("garagem").checked;
              var proxTP = document.getElementById("transportes").checked;
              
          
              var c1;
              var c2;
              var c3;
          
              var preco_zona1 = 1200;
              var preco_zona2 = 2000;
              var preco_zona3 = 2500;
          
          
              if (idade_imovel > 0 && idade_imovel <= 5){c1 = 1;}
              else if(idade_imovel > 5 && idade_imovel <= 10){c1 = 0.95;}
              else if(idade_imovel > 10){c1 = 0.9;}
          
              if (tergaragem == true){c2 = 1;}
              else{c2 = 0.95;}
          
              if (proxTP == true){c3 = 1;}
              else{c3 = 0.9;}
          
              calc_zona1 = area_util * preco_zona1 * c1 * c2 * c3;
              calc_zona2 = area_util * preco_zona2 * c1 * c2 * c3;
              calc_zona3 = area_util * preco_zona3 * c1 * c2 * c3;
          
              

              document.getElementById("calc_zona1").innerHTML = "<h2>Zona 1</h2>" + calc_zona1.toLocaleString() + "€";
              document.getElementById("calc_zona2").innerHTML = "<h2>Zona 2</h2>" + calc_zona2.toLocaleString() + "€";
              document.getElementById("calc_zona3").innerHTML = "<h2>Zona 3</h2>" + calc_zona3.toLocaleString() + "€";


              document.getElementById("options1").innerHTML = "<p>€/m²: " + preco_zona1 + "€" + "<p>Área: " + area_util + "m²" + "<p>Tipologia: " + "T" + tipologia + "<p>Idade: " + idade_imovel + "anos";  
              document.getElementById("options2").innerHTML = "<p>€/m²: " + preco_zona2 + "€" + "<p>Área: " + area_util + "m²" + "<p>Tipologia: " + "T" + tipologia + "<p>Idade: " + idade_imovel + "anos";
              document.getElementById("options3").innerHTML = "<p>€/m²: " + preco_zona3 + "€" + "<p>Área: " + area_util + "m²" + "<p>Tipologia: " + "T" + tipologia + "<p>Idade: " + idade_imovel + "anos";
              
          });
      
document.getElementById("financiamento").addEventListener("click", function () {


var spread = Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1 * 100);
var anos = 12 * Math.floor(Math.random() * (20 - 1 + 1) ) + 1;

console.log("spread: " + spread);
console.log("anos: " + anos);

var juro1 = Math.round(0.5 + spread);
var juro2 = Math.round(0.5 + spread);
var juro3 = Math.round(0.5 + spread);


var entrada1 = 0.3 * calc_zona1;
var entrada2 = 0.3 * calc_zona2;   
var entrada3 = 0.3 * calc_zona3;


var emprestimo1 = calc_zona1 - entrada1;
var emprestimo2 = calc_zona2 - entrada2;          
var emprestimo2 = calc_zona3 - entrada3;


var mensal1 = Math.round(emprestimo1 / anos * juro1 * spread);
var mensal2 = Math.round(emprestimo2 / anos * juro2 * spread);
var mensal3 = Math.round(emprestimo3 / anos * juro2 * spread); 


document.getElementById("financiamento1").innerHTML = mensal1;
document.getElementById("info1").innerHTML = juro1 + "-" + anos + "-" + spread;
document.getElementById("financiamento2").innerHTML = mensal2;
document.getElementById("info2").innerHTML = juro2 + "-" + anos + "-" + spread;
document.getElementById("financiamento3").innerHTML = mensal3;
document.getElementById("info3").innerHTML = juro3 + "-" + anos + "-" + spread;
                          
});