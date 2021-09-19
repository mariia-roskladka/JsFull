  /* ===> 1 <=== */

  /*
   * successPromise должен зарезолвить число 67
   * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise -- object
   */

  const successPromise = new Promise((resolve) => {
      resolve(67);
  });

  /*
   * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
   * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
   */

  successPromise.then((number) => {
      console.log(number * number);
  });

  /*
   * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
   * текст вывелся в консоль?
   * подумайте почему
   * потому что мы получили данные, а этот код должен ловить ошибку при исполнении промиса
   * и работать будет если не сработал метод then
   */
  successPromise.catch(() => {
      console.log("I am an error");
  });