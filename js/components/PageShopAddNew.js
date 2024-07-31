export class PageShopAddNew {
    constructor(DOM) {
        this.DOM = DOM;
        this.formDOM = null;

        this.render();
        this.formEvents();
    }

    formEvents() {
        this.formDOM = this.DOM.querySelector('form');
        const titleDOM = document.getElementById('shop_add_title');
        const itemList = [];
        const localStorageData = localStorage.getItem('itemList');

        if (localStorageData) {
            const parsedLocalStorageDate = JSON.parse(localStorageData);
            itemList.push(...parsedLocalStorageDate);
        }
        this.formDOM.addEventListener('submit', e => {
            e.preventDefault();

            itemList.push(
                {
                    id: "item_" + Date.now(),
                    title: titleDOM.value,
                    amount: 1,
                }
            )
            localStorage.setItem('itemList', JSON.stringify(itemList));
        })
    }

    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Add new item</h1>
                    <p>Here is you list</p>
                </div>
            </section>

            <section class="row">
                <form class="col-12 form">
                <label>
                    <label for="shop_add_title">Title<label>
                    <input id="shop_add_title" type="text" value="">
                </label>
                <div>
                    <button type="submit">Add</button>
                </div>

                </form>
            </section>
        `;
    }
}