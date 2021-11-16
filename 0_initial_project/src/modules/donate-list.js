export class DonateList {
    #container
    constructor(){
        this.#container = document.createElement('div')
        this.#container.className = 'donates-container'
    }

    render(donates) {
        const donateTitle = document.createElement('h2')
        donateTitle.className = 'donates-container__title'
        donateTitle.innerText = 'Список донатов'

        const donateItems = document.createElement('div')
        donateItems.className = 'donates-container__donates'

        donates.forEach(donate => {
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.innerText = `${donate.date} - `

            const amount = document.createElement('b')
            amount.innerText = `${donate.amount}$`

            donateItem.append(amount)
            donateItems.append(donateItem)
        });
        
        this.#container.append(donateTitle, donateItems)
        return this.#container
    }
}