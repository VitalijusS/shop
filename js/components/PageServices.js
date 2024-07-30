export class PageServices {
    constructor(DOM) {
        this.DOM = DOM;
        this.render();
    }
    render() {
        this.DOM.innerHTML = `
            <section class="row services-list">
                <div class="col-12">
                    <h1>Services Page</h1>
                    <div class="service">
                    <p>Here is out services!</p>
                </div>
            </section>
            <section class="row services-list">
                <div class="col-12 col">
                    <h2>Design</h2>
                    <div class="service">
                    <p>Here is out services!</p>
                </div>
                
            </section>
            <section class="row services-list">
                <div class="col-12 col">
                    <h2>Design</h2>
                    <div class="service">
                    <p>Here is out services!</p>
                </div>
            </section>
            <section class="row services-list">
                <div class="col-12 col">
                    <h2>Design</h2>
                    <div class="service">
                    <p>Here is out services!</p>
                </div>
            </section>
        `;
    }
}