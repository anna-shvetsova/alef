const addChild = ({name, age}) => {
    const id = Date.now().toString();
    return {
        type: 'ADD_CHILD',
        payload: {id, name, age}
    }
}

const updateChild = ({id, field, value}) => {
    return {
        type: 'UPDATE_CHILD',
        payload: {id, field, value}
    }
}

const removeChild = (id) => {
    return {
        type: 'REMOVE_CHILD',
        payload: id
    }
}

const updateParent = ({field, value}) => {
    return {
        type: 'UPDATE_PARENT',
        payload: {field, value}
    }
}

const saveForm = () => {
    return {
        type: 'SAVE_FORM'
    }
}

const changeTabIndex = (idx) => {
    return {
        type: 'CHANGE_TAB_INDEX',
        payload: idx
    }
}

export {
    addChild,
    updateChild,
    removeChild,
    updateParent,
    saveForm,
    changeTabIndex
}