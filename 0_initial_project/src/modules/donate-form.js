export class DonateForm {
  #container

  constructor () {
    this.#container = document.createElement('form')
    this.#container.className = 'donate-form'
  }

  render() {
    const totalAmount = document.createElement('h1')
    totalAmount.id = 'total-amount'
    totalAmount.innerText = '28$'

    const donateFormLabel = document.createElement('label')
    donateFormLabel.className = 'donate-form__input-label'
    donateFormLabel.innerText = 'Введите сумму в $'

    const donateFormInput = document.createElement('input')
    donateFormInput.className = 'donate-form__donate-input'
    donateFormInput.name = 'amount'
    donateFormInput.type = 'number'
    donateFormInput.max = '100'
    donateFormInput.min = '0'
    donateFormInput.required = true
    donateFormLabel.append(donateFormInput)

    const btnSubmit = document.createElement('button')
    btnSubmit.className = 'donate-form__submit-button'
    btnSubmit.type = 'submit'
    btnSubmit.innerText = 'Задонатить'
    
    this.#container.append(totalAmount, donateFormLabel, btnSubmit)

    return this.#container
  }
}