const MathApi = {
  add: () => {
    const button = document.querySelector('.js-button-add');

    button.addEventListener('click', () => {
      this.innerText = 'Carregando...';
    });
  },
};

export default MathApi;
