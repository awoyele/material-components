import Component from 'vue-class-component';

@Component({
    props: {
        right: {
            type: Boolean,
            required: false,
            "default": false
        },
        left: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    template: require('./icon.html')
})
export default class Icon {
}