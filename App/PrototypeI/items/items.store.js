{
    "items": [{
            "itemName": "Item 1",
            "price": 10,
            "assignedPeople": ["Person A"],
            "taxValue": 13,
            "tipValue": 10
        },
        {
            "itemName": "Item 2",
            "price": 20,
            "assignedPeople": ["Person A", "Person B"],
            "taxValue": 13,
            "tipValue": 10
        },
        {
            "itemName": "Item 3",
            "price": 30,
            "assignedPeople": ["Person B"],
            "taxValue": 13,
            "tipValue": 10
        }
    ]
}
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

    setPosts(items){
        state.items = items;
    }

})

export const itemsStore = {
    ...getters,
    ...setters
};
