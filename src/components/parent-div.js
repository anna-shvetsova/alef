import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Box } from '@material-ui/core';
import InputField from './input-field';

const ParentDiv = () => {
    const parent = useSelector(state => state.form.parent);

    return (
        <Box pt={3} pb={0.5}>
            <Typography component='h2'>
                <Box sx={{ fontWeight: 'bold' }}>Персональные данные</Box>
            </Typography>
            <Grid container direction='column'>
                <InputField fieldType='name' value={parent.name} />
                <InputField fieldType='age' value={parent.age} />
            </Grid>
        </Box>
    )
}

export default memo(ParentDiv);