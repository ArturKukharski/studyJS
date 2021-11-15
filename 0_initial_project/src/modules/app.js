import { DonateForm } from "./donate-form"
export default class App {
  #donate
  constructor () {
    this.#donate = new DonateForm()
  }
  run () {
    document.body.append(this.#donate.render())
  }
}