import { PageContactUs } from "./PageContactUs.js";
import { PageHome } from "./PageHome.js";
import { PageServices } from "./PageServices.js";
import { PageTeam } from "./PageTeam.js";

export class Layout {
    constructor() {
        this.pagesData = [
            {
                text: 'Home',
                content: PageHome,
                backgroud: 'white',
            },
            {
                text: 'Services',
                content: PageServices,
                backgroud: 'pink',
            },
            {
                text: 'Team',
                backgroud: 'wheat',
                content: PageTeam,
            },
            {
                backgroud: 'grey',
                text: 'Contact us',
                content: PageContactUs,
            },
        ];
        this.render()
    }

    header() {

        let navHTML = '';
        for (const link of this.pagesData) {
            navHTML += `<button class="link">${link.text}</button>`
        }
        return `
            <header class="container main-header">
                <div class="row">
                    <div class="col-12 main-header-contnet">
                        <img class="logo" src="./img/icon.ico" alt="Logo">
                        <nav class="hidden visible-sm-flex main-nav">
                            ${navHTML}
                        </nav>
                    <div>
                <div>
            </header>`;
    }

    headerEvents() {
        const buttonsDOM = document.querySelectorAll('.main-header-contnet .link');
        const mainDOM = document.querySelector('main.container')
        const titleDOM = document.querySelector('head title')
        for (let i = 0; i < buttonsDOM.length; i++) {
            const buttonDOM = buttonsDOM[i];
            buttonsDOM[i].addEventListener('click', () => {
                mainDOM.innerHTML = (new (this.pagesData[i].content)).render()
                document.body.style.background = this.pagesData[i].backgroud;
                titleDOM.textContent = this.pagesData[i].text;
            })
        }
    }

    main() {

        const HTML = `
            <main class="container">
            ${(new PageHome).render()}
            </main>`;
        return HTML;
    }

    footer() {
        const HTML = '<footer class="container">&copy; Copyright 2024</footer>';
        return HTML;
    }

    render() {
        const HTML = this.header() + this.main() + this.footer();
        const DOM = document.getElementById('app');

        DOM.insertAdjacentHTML('beforeend', HTML);
        this.headerEvents()
    }
}