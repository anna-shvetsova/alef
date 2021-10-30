import React, { memo, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import { addChild } from '../actions';
import ChildRow from './child-row';

const ChildrenDiv = () => {
    const [btnVisible, setBtnVisible] = useState(true);
    const children = useSelector(state => state.form.children);
    const dispatch = useDispatch();

    useEffect(() => {
        setBtnVisible(children.length < 5);
    }, [children.length]);

    const onAddChild = useCallback(() => {
        dispatch(addChild({ name: '', age: '' }));
    }, [dispatch]);

    return (
        <Box pt={3} pb={0.5}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography component='h2'>
                    <Box sx={{ fontWeight: 'bold' }}>Дети (макс. 5)</Box>
                </Typography>
                {btnVisible && <Button onClick={onAddChild}>Добавить ребенка</Button>}
            </Grid>
            {
                children.map(child => {
                    const { id, name, age } = child;
                    return <ChildRow key={id} id={id} name={name} age={age} />
                })
            }
        </Box>
    )
}

export default memo(ChildrenDiv);