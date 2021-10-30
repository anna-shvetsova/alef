import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { fieldTypes } from '../restrictions';

const InputField = ({ id, fieldType, value }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const onFieldChange = useCallback((event) => {
        const { value } = event.target;

        const isOK = fieldTypes[fieldType].validate(value);
        setError(!isOK);
        setHelperText(isOK ? '': fieldTypes[fieldType].errorText);

        if (id === '') {
            dispatch({
                type: 'UPDATE_PARENT',
                payload: { field: fieldType, value: value.trim() }
            });
        } else {
            dispatch({
                type: 'UPDATE_CHILD',
                payload: { id, field: fieldType, value: value.trim() }
            });
        }
    }, [dispatch, id, fieldType]);

    if (!id) { id = '' };

    return (
        <TextField
            id={`${fieldType}${id}`}
            label={fieldTypes[fieldType].label}
            variant='outlined'
            size='small'
            onChange={onFieldChange}
            value={value}
            error={error}
            helperText={helperText}
            margin='normal'
        />
    )
}

export default memo(InputField);