import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'
import * as SpecialFunctions from '../core/utils/index'


const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
]

export default class App {
  #donate
  #donateList

  constructor () {
    this.state = {
      donates: mockDonates,
      totalAmount: SpecialFunctions.calculateSumOfNumbers(mockDonates.map(donate => donate.amount))
    }
    this.#donate = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
    this.#donateList = new DonateList(this.state.donates) 
  }

  donateListUpdate () {
    this.#donateList.updateDonates(this.state.donates)
  }

  donateUpdateTotalAmount () {
    this.#donate.updateTotalAmount(this.state.totalAmount)
  }

  createNewDonate (newDonate) {
    this.state.donates.push(newDonate)
    this.state.totalAmount += +newDonate.amount
    this.donateListUpdate ()
    this.donateUpdateTotalAmount()
    // this.#donateList.updateDonates(this.#donates)
  }  

  run () {
    document.body.append(this.#donate.render(), this.#donateList.render())
  }
}