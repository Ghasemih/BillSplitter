import {itemsStore} from './items.store';

const items = [
    {
    itemName: "Item 1",
    price: 10,
    assignedPeople: ["Person A"],
    taxValue: 13,
    tipValue: 10
    },
    {
    itemName: "Item 2",
    price: 20,
    assignedPeople: ["Person A", "Person B"],
    taxValue: 13,
    tipValue: 10
    },
    {
    itemName: "Item 3",
    price: 30,
    assignedPeople: ["Person B"],
    taxValue: 13,
    tipValue: 10
    }
];

export function fetchItems(){
    itemsStore.setItems(items);    
}

export function addItem(item){
    itemsStore.addItem(item);
}


