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
            const currentId = rowsDOM[i].id;

            buttonsDOM[2].addEventListener('click', () => {
                const localData = JSON.parse(localStorage.getItem('itemList'));
                const data = localData.filter(item => item.id !== currentId);
                localStorage.setItem('itemList', JSON.stringify(data));
                rowsDOM[i].remove();
            })
            buttonsDOM[0].addEventListener('click', () => {
                const localData = JSON.parse(localStorage.getItem('itemList'));
                if (localData.filter(item => item.id === currentId)[0].amount > 1) {
                    const data = localData.map(item => item.id === currentId ?
                        item.amount = { ...item, amount: item.amount - 1 } : item);
                    localStorage.setItem('itemList', JSON.stringify(data));
                    amountDOM.textContent = data.filter(item => item.id === currentId)[0].amount;
                }
            })
            buttonsDOM[1].addEventListener('click', () => {
                const localData = JSON.parse(localStorage.getItem('itemList'));
                const data = localData.map(item => item.id === currentId ? item.amount = { ...item, amount: item.amount + 1 } : item);
                localStorage.setItem('itemList', JSON.stringify(data));
                amountDOM.textContent = data.filter(item => item.id === currentId)[0].amount;

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