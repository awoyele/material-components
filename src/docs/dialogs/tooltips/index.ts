import Component from 'vue-class-component';

import tooltip from '../../../mixins/tooltip';

import mdButton from '../../../components/button';

@Component({
    components: {
        mdButton
    },
    mixins: [
        tooltip
    ],
    template: require('./tooltips.html')
})
export default class Tooltips {
}

