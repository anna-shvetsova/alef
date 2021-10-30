const reducer = (state, action) => {

    const initialState = {
        curTabIndex: 0,
        form: {
            parent: {
                name: '',
                age: ''
            },
            children: []
        },
        preview: {
            parent: '',
            children: []
        }
    }

    if (!state) return initialState;

    switch (action.type) {
        case 'ADD_CHILD':
            return addChild(state, action.payload);
        case 'UPDATE_CHILD':
            return updateChild(state, action.payload);
        case 'REMOVE_CHILD':
            return removeChild(state, action.payload);
        case 'UPDATE_PARENT':
            return updateParent(state, action.payload);
        case 'SAVE_FORM':
            return saveForm(state);
        case 'CHANGE_TAB_INDEX':
            return { ...state, curTabIndex: action.payload };
        default:
            return state
    }

}

const addChild = (state, { id, name, age }) => {
    return {
        ...state,
        form: {
            ...state.form,
            children: [
                ...state.form.children,
                {
                    id,
                    name,
                    age
                }
            ]
        }
    }
}

const updateChild = (state, { id, field, value }) => {
    if (!id) return state;
    const idx = state.form.children.findIndex(el => el.id === id);
    const child = state.form.children[idx];
    const updatedChild = { ...child };
    updatedChild[field] = value;
    return {
        ...state,
        form: {
            ...state.form,
            children: [
                ...state.form.children.slice(0, idx),
                updatedChild,
                ...state.form.children.slice(idx + 1)
            ]
        }
    }
}

const removeChild = (state, id) => {
    if (!id) return state;
    const idx = state.form.children.findIndex(el => el.id === id);
    return {
        ...state,
        form: {
            ...state.form,
            children: [
                ...state.form.children.slice(0, idx),
                ...state.form.children.slice(idx + 1)
            ]
        }
    }
}

const updateParent = (state, { field, value }) => {
    const updatedParent = { ...state.form.parent };
    updatedParent[field] = value;
    return {
        ...state,
        form: {
            ...state.form,
            parent: updatedParent
        }
    }
}

const saveForm = (state) => {
    const { form, preview } = state;

    const getYears = (num) => {
        let res = num.trim();
        switch (parseInt(num.slice(-1))) {
            case 1:
                return `${res} год`;
            case 2: case 3: case 4:
                return `${res} года`;
            default:
                return `${res} лет`;
        }
    };

    const getExcerpt = ({ name, age }) => {
        return `${name}, ${getYears(age)}`;
    };

    const getExcerpts = (arr) => {
        return arr.map(el => {
            return {
                id: el.id,
                child: getExcerpt(el)
            }
        });
    };

    return {
        ...state,
        preview: {
            ...preview,
            parent: getExcerpt(form.parent),
            children: getExcerpts(form.children)
        }
    }
}

export default reducer;