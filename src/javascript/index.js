import Cookie from './cookie'

const MathApi = {
  add: () => {
    const button = document.querySelector('.js-button-add')

    button.addEventListener('click', Cookie.add('Math', this.getAttribute('name')))
  },

  remove: () => {
    const button = document.querySelector('.js-button-remove')

    button.addEventListener('click', () => {
      this.remove()
    })
  },
}

export default MathApi
