$(function () {
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)

  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--active')
  })

  $('.footer__col--slide').on('click', function () {
    $(this).next().slideToggle()
  })

  // $('.burger').on('click', function (e) {
  //   e.preventDefault()
  //   $('.burger').toggleClass('burger--active')
  // })
})