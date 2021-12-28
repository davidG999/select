const getTemplate = () => {
  return /* html */`
  <div class="select__input" data-type="input">
    <span data-type="text">Text</span>
    <i class="fa fa-chevron-down" data-type="arrow"></i>
  </div>
  <div class="select__dropdown">
    <div class="select__list">
      <li class="select__item"> Content </li>
      <li class="select__item"> Content </li>
      <li class="select__item"> Content </li>
      <li class="select__item"> Content </li>
      <li class="select__item"> Content </li>
      <li class="select__item"> Content </li>
      <li class="select__item"> Content </li>
    </div>
  </div>
  `
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);

    this.#render()
    this.#setup()
  }

  #render() {
    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate()
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
  }

  clickHandler(event) {
    const { type } = event.target.dataset

    if (type === 'input' || type === 'arrow' || type === 'text') {
      this.toggle()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.style.transform = 'rotate(-180deg)'
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.style.transform = 'rotate(0deg)'
  }

  destroy() {
    this.$el.removeEevntListener('click', this.clickHandler)
  }
}