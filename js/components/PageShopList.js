export class PageShopList {
    constructor(DOM) {
        this.DOM = DOM;
        this.render();
    }
    render() {
        let HTML = '';
        const data = [
            { title: 'Pomidoras', ammount: 2 },
            { title: 'Agukas', ammount: 2 },
            { title: 'Grietine', ammount: 1 },
        ]
        for (const item of data) {
            HTML += `
            <tr>
                <td>${item.title}</td>
                <td>${item.ammount}</td>
                <td>Action</td>
            </tr>
            `
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