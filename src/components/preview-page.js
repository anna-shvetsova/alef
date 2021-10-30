import React, { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@material-ui/core';

const PreviewPage = () => {
    const { parent, children } = useSelector(state => state.preview);

    return (
        <Fragment>
            <Box pt={3} pb={0.5}>
                <Typography component='h2' >
                    <Box sx={{ fontWeight: 'bold' }}>Персональные данные</Box>
                </Typography>
                <Typography component='p'>{parent}</Typography>
            </Box>
            <Box pt={3} pb={0.5}>
                <Typography component='h2'>
                    <Box sx={{ fontWeight: 'bold' }}>Дети</Box>
                </Typography>
                {
                    children.map(el => {
                        const { id, child } = el;
                        return <Typography key={id} component='p'>{child}</Typography>
                    })
                }
            </Box>
        </Fragment>
    )

}

export default memo(PreviewPage);