export class PageShopList {
    constructor(DOM) {
        this.DOM = DOM;
        this.render();
        this.listEvents();
    }

    delete(rowDOM, buttonDOM) {
        const currentId = rowDOM.id;
        const localData = JSON.parse(localStorage.getItem('itemList'));
        const data = localData.filter(item => item.id !== currentId);
        localStorage.setItem('itemList', JSON.stringify(data));
        rowDOM.remove();
    }
    amountAdd(rowDOM, buttonDOM) {
        const amountChange = +buttonDOM.dataset.step;
        const amountDOM = rowDOM.querySelector('span');
        const currentId = rowDOM.id;
        const localData = JSON.parse(localStorage.getItem('itemList'));
        const data = localData.map(item => item.id === currentId ? item.amount = { ...item, amount: item.amount + amountChange } : item);
        localStorage.setItem('itemList', JSON.stringify(data));
        amountDOM.textContent = data.filter(item => item.id === currentId)[0].amount;

    }
    amountMinus(rowDOM, buttonDOM) {
        const amountChange = +buttonDOM.dataset.step;
        const amountDOM = rowDOM.querySelector('span');
        const currentId = rowDOM.id;
        const localData = JSON.parse(localStorage.getItem('itemList'));
        const data = localData.map(item => item.id === currentId ?
            item.amount = { ...item, amount: item.amount - amountChange > 0 ? (item.amount - amountChange) : 0 } : item);
        localStorage.setItem('itemList', JSON.stringify(data));
        amountDOM.textContent = data.filter(item => item.id === currentId)[0].amount;


    }
    listEvents() {
        const rowsDOM = this.DOM.querySelectorAll('tbody > tr');
        // const funclist = [this.amountMinus, this.amountAdd, this.delete];
        const funcList = {
            'minus': this.amountMinus,
            'plus': this.amountAdd,
            'delete': this.delete,
        };

        for (const rowDOM of rowsDOM) {
            const buttonsDOM = rowDOM.querySelectorAll('button');


            for (const buttonDOM of buttonsDOM) {
                buttonDOM.addEventListener('click', () => funcList[buttonDOM.dataset.method](rowDOM, buttonDOM))
            }
            // buttonsDOM[0].addEventListener('click', () => this.amountMinus(rowDOM))
            // buttonsDOM[1].addEventListener('click', () => this.amountAdd(rowDOM))
            // buttonsDOM[2].addEventListener('click', () => this.delete(rowDOM))
        }
    }

    render() {
        const data = JSON.parse(localStorage.getItem('itemList'));
        let HTML = '';
        if (data) {
            for (const item of data) {
                HTML += `
                <tr id="${item.id}">
                    <td>${item.title}</td>
                    <td>
                        <button data-method="minus" data-step="10" >-10</button>
                        <button data-method="minus" data-step="1" >-1</button>
                        <span>${item.amount}</span>
                        <button data-method="plus" data-step="1" >+1</button>
                        <button data-method="plus" data-step="10" >+10</button>
                    </td>
                    <td>
                        <button data-method="delete" data-step="1" >Delete</button>
                    </td>
                </tr>
                `
            }
        }

        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Shop list page</h1>
                    <p>Here is you list</p>
                </div>
            </section>
            <section class="row">
                <table class="col-12">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Amount</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${HTML}
                    </tbody>
                </table>
            </section>
        `;
    }
}