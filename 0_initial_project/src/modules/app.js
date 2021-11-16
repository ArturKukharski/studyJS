import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list";

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

export default class App {
  #donate
  #donateList

  constructor () {
    this.#donate = new DonateForm()
    this.#donateList = new DonateList()
  }
  run () {
    document.body.append(this.#donate.render(), this.#donateList.render(mockDonates))
  }
}