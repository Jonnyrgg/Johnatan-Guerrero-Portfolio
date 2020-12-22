window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel_list'),{
        slidesToShow: 1,
        draggable: true,
        dots: '.carousel_indicator',
        arrows: {
          prev: '.carousel_previous',
          next: '.carousel_next'
        } 
    });
});

window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel_list2'),{
        slidesToShow: 1,
        draggable: true,
        dots: '.carousel_indicator2',
        arrows: {
          prev: '.carousel_previous2',
          next: '.carousel_next2'
        } 
    });
});

window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel_list3'),{
        slidesToShow: 1,
        draggable: true,
        dots: '.carousel_indicator3',
        arrows: {
          prev: '.carousel_previous3',
          next: '.carousel_next3'
        } 
    });
});