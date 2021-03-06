import Component from 'vue-class-component';

@Component({
    template: require('./collection-list.html')
})
export default class CollectionList {
    private _slotContents: any;

    get headerSlot() {
        return 'header' in this._slotContents;
    }
}