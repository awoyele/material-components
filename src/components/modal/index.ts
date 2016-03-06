// todo better animation    
import Component from 'vue-class-component';
import leanOverlay from '../lean-overlay';

require('./modal.scss');
var template = require('./modal.html');

const ESC = 27;

@Component({
    props: {
        "class": {
            type: String,
            required: false,
            "default": ""
        },
        bottom: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    components: {
        leanOverlay
    },
    events: {
        'modal::open': function () {
            this.open();
        },
        'modal::close': function () {
            this.close();
        }
    },
    template: template
})
export default class Modal {
    private active: boolean;
    private bottom: boolean;
    private class: string;

    data() {
        return {
            active: false
        }
    }

    ready() {
        var self = this;
        window.document.addEventListener('keydown', function(evt: any) {
            evt = evt || window.event;
            if (evt.keyCode == ESC) {
                self.close();
            }
        });
    }

    get computedStyle() {
        if (this.active) {
            return this.bottom ? {
                'z-index': 1003,
                'display': 'block',
                'opacity': 1,
                'bottom': '0px'
            } : {
                'z-index': 1003,
                'display': 'block',
                'top': '10%'
            }
        }
        return null;
    }

    get computedClasses() {
        var classes = '';
        if (this.class) {
            classes += this.class;
        }
        if (this.bottom) {
            classes += ' ';
            classes += 'bottom-sheet';
        }
        return classes;
    }

    get transition() {
        return this.bottom ? 'modal-bottom' : 'modal';
    }

    open() {
        if (!this.active) {
            this.active = true;
        }
    }

    close() {
        if (this.active) {
            this.active = false;
        }
    }
}