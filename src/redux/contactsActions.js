import shortid from 'shortid';

export const addContact = contact => ({
    type: 'phonebook/addContact',
    payload: { id: shortid.generate(), ...contact },
});

export const deleteContact = id => ({
    type: 'phonebook/deleteContact',
    payload: id,
});

export const addToFilterState = filter => ({
    type: 'phonebook/addToFilterState',
    payload: filter,
});

export const isThereThisContact = name => ({
    type: 'phonebook/isThereThisContact',
    payload: name.toLowerCase(),
});

export const findContact = filter => ({
    type: 'phonebook/findContact',
    payload: filter,
});

