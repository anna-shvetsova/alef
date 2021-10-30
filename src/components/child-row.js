import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { removeChild } from '../actions';
import InputField from './input-field';

const ChildRow = ({ id, name, age }) => {
    const dispatch = useDispatch();

    const onRemoveClick = useCallback(() => {
        dispatch(removeChild(id));
    }, [dispatch, id]);

    return (
        <Grid container direction='row' justifyContent='space-between'>
            <InputField id={id} fieldType='name' value={name} />
            <InputField id={id} fieldType='age' value={age} />
            <Button onClick={onRemoveClick}>Удалить</Button>
        </Grid>
    )
}

export default memo(ChildRow);