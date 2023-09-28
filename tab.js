let button = $('.tab-button') // 변수에 담아서 쓰는게 성능 상 좋다

for(let i = 0; i<2; i++) {
    $(button).eq(i).click(function(){
        $(button).removeClass('orange');
        $(button).eq(i).addClass('orange');
        $(button).removeClass('show');
        $(button).eq(i).addClass('show');
    })
}