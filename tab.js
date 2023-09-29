// for (let i = 0; i < $('.tab-button').length; i++){

//     $('.tab-button').eq(i).on('click', function(){
//       탭열기(i)
//     })
  
//   };
  

    $('.list').click(function(e){
        // if(e.target == querySelectorAll('.tab=button')[0]) {
        //     탭열기(0);
        // }
        // if(e.target == querySelectorAll('.tab=button')[1]) {
        //     탭열기(1);
        // }
        // if(e.target == querySelectorAll('.tab=button')[2]) {
        //     탭열기(2);
        // }

        탭열기(e.target.dataset.id); // 한 줄로 가능

    })
  
  function 탭열기(구멍){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(구멍).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(구멍).addClass('show');
  }