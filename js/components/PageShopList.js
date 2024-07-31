export class PageShopList {
    constructor(DOM) {
        this.DOM = DOM;
        this.render();
        this.listEvents();
    }

    listEvents() {
        const rowsDOM = this.DOM.querySelectorAll('tbody > tr');
        for (let i = 0; i < rowsDOM.length; i++) {
            const buttonsDOM = rowsDOM[i].querySelectorAll('button');
            const amountDOM = rowsDOM[i].querySelector('span');

            buttonsDOM[2].addEventListener('click', () => {
                const idToRemove = rowsDOM[i].id;
                const localData = JSON.parse(localStorage.getItem('itemList'));
                const data = localData.filter(item => item.id !== idToRemove);
                localStorage.setItem('itemList', JSON.stringify(data));
                rowsDOM[i].remove();
            })
            buttonsDOM[0].addEventListener('click', () => {
                if (parseInt(amountDOM.textContent) > 1) {

                    amountDOM.textContent = parseInt(amountDOM.textContent) - 1;
                }
            })
            buttonsDOM[1].addEventListener('click', () => {
                amountDOM.textContent = parseInt(amountDOM.textContent) + 1;
            })

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
                        <button>-</button>
                        <span>${item.amount}</span>
                        <button>+</button>
                    </td>
                    <td>
                        <button>Delete</button>
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