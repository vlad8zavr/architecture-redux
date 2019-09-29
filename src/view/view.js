
export default class View {
    constructor(el, store){
        this.el = el;
        this.store = store; 
    }


    render() {
        this.el.forEach(item => {
            let key = item.querySelector('.content-area__text').textContent.trim();
            let isVisible = this.store.getState()[key].visible;
            if (isVisible) {
                if (item.classList.contains('content-area__item_visible_false')) {
                    item.classList.remove('content-area__item_visible_false');
                    item.classList.add('content-area__item_visible_true');
                }
            }
            else {
                if (item.classList.contains('content-area__item_visible_true')) {
                    item.classList.remove('content-area__item_visible_true');
                    item.classList.add('content-area__item_visible_false');
                }
            }
        })
    }

}