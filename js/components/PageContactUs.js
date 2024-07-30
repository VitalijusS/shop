export class PageContactUs {
    constructor(DOM) {
        this.DOM = DOM;
        this.formDOM = null;
        this.render();
        this.formEvents();
    }

    formEvents() {
        this.formDOM = this.DOM.querySelector('form');
        const inputDOM = this.formDOM.querySelector('input');
        this.formDOM.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(inputDOM.value);
        })
    }
    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Contact Us Page</h1>
                    <p>Here is out services!</p>
                </div>
            </section>
            <section class="row services-list">
                <form class="col-12 col-md-6 col-lg-4">
                    <input type="text" value="">
                    <button type="submit">click me</button>
                </form>
            </section>
            `;
    }
}