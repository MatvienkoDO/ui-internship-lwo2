const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

const errors = {
    noSuchContact: 'No such contact',
    noSuchProperty: 'No such property'
};

export function lookupProfile(firstName, prop) {
    const contact = contacts.find(contact => contact && contact.firstName === firstName);

    if(!contact) {
        return errors.noSuchContact;
    }

    if(prop in contact === false) {
        return errors.noSuchProperty;
    }

    return contact[prop];
}
