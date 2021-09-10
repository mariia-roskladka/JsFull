  export function setButton(buttonText) {
      return (document.querySelector('body').innerHTML = `<button>${buttonText}</button>`);
  }

  // export function setButton(buttonText) {
  //   return (document.querySelector('body').textContent = `<button>${buttonText}</button>`);
  // }
  setButton('Button');