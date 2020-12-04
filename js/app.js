import owlCarousel from 'owl.carousel'

document.addEventListener('DOMContentLoaded', () => {

	$('.adress__list').owlCarousel({
		loop:true,
		dots: true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1,
						center:true
				},
				600: {
					items:2
				},
				1200: {
					items:4
				}
    }
	})

	$('.news__list').owlCarousel({
		loop:true,
		dots: true,
    // margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
	})

})
