import { CURRENCY as currency } from '../core/constants/setttings'

export class DonateList {
  #container
  #donates

  constructor(donates) {
    this.#container = document.createElement('div')
    this.#container.className = 'donates-container'
    this.#donates = donates
  }

  createDonateElement (container, donates) {
    donates.map(donate => {
      const donateItem = document.createElement('div')
      donateItem.className = 'donate-item'
      donateItem.innerText = `${donate.date} - `

      const amount = document.createElement('b')
      amount.innerText = `${donate.amount}${currency}`

      donateItem.append(amount)
      container.append(donateItem)
    });    
  }

  updateDonates(donates) {
    const donateItems = document.querySelector('.donates-container__donates')
    donateItems.innerHTML = ''
    this.createDonateElement(donateItems, donates)
  }

  render() {
    const donateTitle = document.createElement('h2')
    donateTitle.className = 'donates-container__title'
    donateTitle.innerText = 'Список донатов'

    const donateItems = document.createElement('div')
    donateItems.className = 'donates-container__donates'

    this.createDonateElement(donateItems, this.#donates)
    this.#container.append(donateTitle, donateItems)
    return this.#container
  }
}