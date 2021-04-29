$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu, .header").toggleClass("active");
    $(".body").toggleClass("lock");
  });
  $(".header__buffer").click(function (event) {
    $(".header__burger, .header__menu, .header").removeClass("active");
    $(".body").removeClass("lock");
  });

  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
  
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if(input.classList.contains('_phone')) {
        if(phoneTest(input)) {
          formAddError(input);
          error++;
        }
      }
      if(input.classList.contains('_name')) {
        if(nameTest(input)) {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function phoneTest(input) {
    return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(input.value);
  }
  function nameTest(input) {
    return !/^([A-zА-яЁё]+\s?)+$/.test(input.value);
  }
});
