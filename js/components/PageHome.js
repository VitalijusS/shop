export class PageHome {
    constructor(DOM) {
        this.DOM = DOM;
        this.render();
    }
    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Home Page</h1>
                    <p>Here is out services!</p>
                </div>
            </section>
            <section class="row">
                <div class="col-12 col">
                    <h2>Design</h2>
                    <p>Here is out services!</p>
                </div>
            </section>
            
        `;
    }
}