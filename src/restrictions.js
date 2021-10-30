const fieldTypes = {
    name: {
        label: 'Имя',
        errorText: 'Имя должно быть задано',
        validate: (val) => val.trim().length > 0
    },
    age: {
        label: 'Возраст',
        errorText: 'Целое число начиная с 0',
        validate: (val) => {
            val = val.trim();
            return parseInt(val).toString().length === val.length && parseInt(val) >= 0
        }
    }
}

const isFormOk = (form) => {
    const { parent, children } = form;
    const { name, age } = parent;

    return fieldTypes.name.validate(name) && fieldTypes.age.validate(age)
        && children.every(el => {
            const { name, age } = el;
            return fieldTypes.name.validate(name) && fieldTypes.age.validate(age)
        });
}

export { fieldTypes, isFormOk }