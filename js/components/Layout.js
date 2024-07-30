import { PageContactUs } from "./PageContactUs.js";
import { PageHome } from "./PageHome.js";
import { PageServices } from "./PageServices.js";
import { PageShopAddNew } from "./PageShopAddNew.js";
import { PageShopList } from "./PageShopList.js";
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
                backgroud: 'grey',
                text: 'Shop List',
                content: PageShopList,
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
            {
                backgroud: 'grey',
                text: 'Add new',
                content: PageShopAddNew,
                extraMenuStyle: 'btn',
            },
        ];
        this.DOM = document.getElementById('app');
        this.mainDOM = null;

        this.render();
        this.headerEvents();

        new this.pagesData[5].content(this.mainDOM);
    }

    header() {

        let navHTML = '';
        for (const link of this.pagesData) {
            const style = link.extraMenuStyle ? link.extraMenuStyle : '';
            navHTML += `<button class="link ${style}">${link.text}</button>`
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
        this.mainDOM = document.querySelector('main.container')
        for (let i = 0; i < buttonsDOM.length; i++) {
            buttonsDOM[i].addEventListener('click', () => {
                const pageClass = this.pagesData[i].content;
                new pageClass(this.mainDOM);
            })
        }
    }

    main() {
        return `
            <main class="container">
                Empty Content
            </main>`;
    }

    footer() {
        return '<footer class="container">&copy; Copyright 2024</footer>';
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}