import * as remx from 'remx';
const initialState = {
    items: []
};

const state = remx.state(initialState);

const getters = remx.getters({

    getItems() {
        return state.items;
    }

});

const setters = remx.setters({

    setItems(items){
        state.items = items;
    },

    addItem(item){
        state.items = [...state.items, item];
    }

})

export const itemsStore = {
    ...getters,
    ...setters
};
