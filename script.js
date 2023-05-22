$(document).ready(function(){
    if (window.location.pathname === "/index.html"){
        alert('seja bem vindo')
    }
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });
    
    var imagens = [    './img/img-car-1.jpg',    './img/img-car-2.jpg',    './img/img-car-3.jpg',    './img/img-car-4.jpg', './img/img-car-5.jpg', './img/img-car-6.jpg', './img/img-car-7.jpg', './img/img-car-8.jpg', './img/img-car-9.jpg', './img/img-car-10.jpg'   ];
    var Index = 0;
    var time = 1500;
    function slideShow() {
        document.getElementById('image-car').src = imagens[Index];
        Index++;
        if (Index == imagens.length) {
            Index = 0;
        }
        setTimeout(slideShow, time);
    } 
    slideShow();
    
    var typed = new Typed(".typing", {
        strings:["Poderes", "Produtos", "Colecionáveis","Novidades","e diversos outros"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings:["", "", "","",""],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-3", {
        strings: [" ", "", "", "", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    
    
    $('.carousel').owlCarousel({
        margin:20,
        loop:false,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

function validar(){
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if (usuario=="" && email =="" && senha ==""){
        alert("preencha os campos, varifique se não deixou nada em branco")
    }else{
        window.open('ecomerce.html')
        window.location.href = "ecomerce.html";
    }
}
function validarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let sobrenome = document.getElementById("sobrenome").value
    let mensagem = document.getElementById("mensagem").value

    if (nome=="" && email =="" && sobrenome=="" && mensagem==""){
        alert("preencha os campos, verifique se não deixou nada em branco")
    }else{
        alert("Mensagem enviada com sucesso!")
    }
}
document.getElementById("btn-cadastro").addEventListener("click", abrirPaginaCadastro);
function abrirPaginaCadastro() {
    window.open('cadastro.html');
};
