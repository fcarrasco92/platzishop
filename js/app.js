const $form = $('#suscribeForm');
const $formGroup = $form.find('.form-group');
const $formControl = $formGroup.find('.form-control');

$form.submit(function(ev){

	ev.preventDefault();
	const error = Math.random() > 0.5;

	$formGroup.removeClass().addClass('form-group');
	$formControl.removeClass().addClass('form-control');
	$formGroup.addClass( error ? 'is-invalid' : 'is-valid' );
	$formControl.addClass( error ? 'is-invalid' : 'is-valid' );
	$formGroup.find('.invalid-feedback, .valid-feedback').remove();

	var el;
	if(error){
		el = $('<div>', { html: 'Ha ocurrido un error' });
		el.addClass('invalid-feedback');
	}else{
		el = $('<div>', { html: 'Te enviaremos todas las novedades' });
		el.addClass('valid-feedback');
	}
	
	$formGroup.append(el);
});

function mostrarModal(){
	if(localStorage.noMostrarModal == undefined) {
        localStorage.noMostrarModal = false;
    }

    const noMostrarModal = JSON.parse(localStorage.noMostrarModal);
    
    if(!noMostrarModal) {
        $('#modalOferta').modal();
    }

    $('#btnNoRegistrar').click(function (ev) {
        localStorage.noMostrarModal = true;
    });
}

/*const button = $("#filtros-cambiar");
  
button.click(() => {
	//alert("Hola");
	if (button.hasClass('down')) {
	button.removeClass('down').addClass('up');
	button.html('Filtros <i class="fas fa-caret-up"></i>');
	} else {
	button.removeClass('up').addClass('down');
	button.html('Filtros<i class="fas fa-caret-down"></i>');
	}
});*/
const $filtrosToggle = $('#filtrosToggle');
$filtrosToggle.click(function (ev){
	
	ev.preventDefault();
	const $i = $filtrosToggle.find('i.fa');
	console.log($i);
	const isDown = $i.hasClass('fa-chevron-down')
	if(isDown){
		$i.removeClass('fa-chevron-down').addClass('fa-chevron-up');
	}else{
		$i.removeClass('fa-chevron-up').addClass('fa-chevron-down');
	}

})
$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue == settings.scrollTopPx || scrollValue > 70) {
         $('.navbar').addClass('navbar');
    } 
});