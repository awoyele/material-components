import Component from 'vue-class-component';

import docNavbarLeft from './left-align';
import docNavbarRight from './right-align';
import docNavbarCenter from './center-align';
import docNavbarActiveItems from './active-items';
import docNavbarFixed from './fixed';
import docNavbarDropdown from './dropdown';
import docNavbarIconLinks from './icon-links';
import docNavbarButtons from './buttons';
import docNavbarSearch from './search';
import docNavbarMobileCollapse from './mobile-collapse';

@Component({
    components: {
        docNavbarLeft,
        docNavbarRight,
        docNavbarCenter,
        docNavbarActiveItems,
        docNavbarFixed,
        docNavbarDropdown,
        docNavbarIconLinks,
        docNavbarButtons,
        docNavbarSearch,
        docNavbarMobileCollapse
    },
    template: require('./navbars.html')
})
export default class Navbars {
    data() {
        return {
            api: [
                {
                    name: "Navbar",
                    api: require('../../components/navbar/navbar-api.json')
                },
                {
                    name: "Nav item",
                    api: require('../../components/nav-item/nav-item-api.json')
                },
                {
                    name: "Side nav",
                    api: require('../../components/sidenav/sidenav-api.json')
                }
            ],
            snippets: {
                navbarRight: require('./right-align/navbars.snippet.html'),
                navbarLeft: require('./left-align/navbars.snippet.html'),
                navbarCenter: require('./center-align/navbars.snippet.html'),
                navbarActiveItems: require('./active-items/navbars.snippet.html'),
                navbarFixed: require('./fixed/navbars.snippet.html'),
                navbarDropdown: require('./dropdown/navbars.snippet.html'),
                navbarIconLinks: require('./icon-links/navbars.snippet.html'),
                navbarButtons: require('./icon-links/navbars.snippet.html'),
                navbarSearch: require('./search/navbars.snippet.html'),
                navbarMobileCollapse: require('./mobile-collapse/navbars.snippet.html')
            },
            src: [
                {
                    name: "Navbar",
                    script: require("!!html!highlightjs?lang=ts!../../components/navbar/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/navbar/navbar.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/navbar/navbar.scss')
                },
                {
                    name: "Navbar item",
                    script: require("!!html!highlightjs?lang=ts!../../components/nav-item/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/nav-item/nav-item.html')
                },
                {
                    name: "Side nav",
                    script: require("!!html!highlightjs?lang=ts!../../components/sidenav/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/sidenav/sidenav.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/sidenav/sidenav.scss')
                }
            ]
        }
    }
}