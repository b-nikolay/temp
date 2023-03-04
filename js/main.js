

//----------------------Спойлер

  $('.faq__item-title',).click(function(event){ //---обращаемся к заголовку и вешаем событие клик
    if($('.faq__content').hasClass('one')){  //---проверяем есть ли класс one у блока 
      $('.faq__item-title').not($(this)).removeClass('active');//---убираем сласс active у всех, кроме нажатого
      $('.faq__item-text').not($(this).next()).slideUp(300); //---скрываем все открытые блоки с текстом, кроме того который следует за нажатым заголовком
    }
    $(this).toggleClass('active').next().slideToggle(300); //---анимируем блок с текстом 
  });

//----------------------Спойлер

//---------------Привязка формы к кнопки

var pass = document.querySelector('.homepage__form-input');
var cost = document.querySelector('.homepage__form-input1');
pass.addEventListener('input', changeBackground); //---вешаем слушатели на инпуты
cost.addEventListener('input', changeBackground);
function changeBackground() {

  if (pass.value !== '' && cost.value !== '') { //---если в инпуте есть символы 
    document.querySelector('.homepage__button').style.background = 'linear-gradient(-30deg, transparent 4%, #FC1624 4.5%)'; //---меняем цвет кнопки
    document.querySelector('.homepage__button').classList.add('active'); //--- и добавляем анимацию
  } else {//---если символов нет
    document.querySelector('.homepage__button').style.background = ''; //---цвет не меняем
    document.querySelector('.homepage__button').classList.remove('active'); //---анимацию убираем 
  }
}

//---------------Привязка формы к кнопки

