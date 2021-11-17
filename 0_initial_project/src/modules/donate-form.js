import { CURRENCY as currency } from '../core/constants/setttings'
export class DonateForm {
  #container
  #totalAmount

  constructor (totalAmount, createNewDonate) {
    this.#container = document.createElement('form')
    this.#container.className = 'donate-form'
    this.#totalAmount = totalAmount
    this.newDonate = createNewDonate
  }

  updateTotalAmount(newAmount = 0) {
    this.#totalAmount = newAmount
    const totalAmount = document.querySelector('#total-amount')
    totalAmount.innerText = `${this.#totalAmount}${currency}`
    return this.#totalAmount = newAmount
  }

  render() {
    const totalAmount = document.createElement('h1')
    totalAmount.id = 'total-amount'
    totalAmount.innerText = `${this.#totalAmount}${currency}`

    const donateFormLabel = document.createElement('label')
    donateFormLabel.className = 'donate-form__input-label'
    donateFormLabel.innerText = `Введите сумму в ${currency}`

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
    btnSubmit.addEventListener('click', () => {
      if(donateFormInput.value){
        const newAmount = {amount: donateFormInput.value, date: new Date()} 
        donateFormInput.value = ''
        this.newDonate(newAmount)
      } 
    })
    
    this.#container.append(totalAmount, donateFormLabel, btnSubmit)
    return this.#container
  }

  
}