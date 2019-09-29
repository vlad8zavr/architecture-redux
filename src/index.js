
    
import { searchFile } from './actions/actions';
import { reducer } from './reducer/reducer';
import { initState } from './initState/initState';
import Store from './store/store';
import View from './view/view';


(function() {
    document.addEventListener("DOMContentLoaded", ready);
})();

function ready() {

    const fileList = [].slice.call(document.querySelectorAll('.content-area__item'));
    const input = document.querySelector('.current-path__input');

    const store = new Store(reducer, initState);
    const view = new View(fileList, store);

    input && input.addEventListener('change', event => {

        store.dispatch(searchFile(event.target.value));
        view.render();
    })
}

