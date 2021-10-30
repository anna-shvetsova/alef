import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { saveForm, changeTabIndex } from '../actions';
import { isFormOk } from '../restrictions';
import ChildrenDiv from './children-div';
import ParentDiv from './parent-div';

const FormPage = () => {
    const form = useSelector(state => state.form);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        setBtnDisabled(!isFormOk(form));
    }, [form])

    const onSaveButton = useCallback(() => {
        dispatch(saveForm());
        dispatch(changeTabIndex(1));
    }, [dispatch]);

    return (
        <Fragment>
            <ParentDiv />
            <ChildrenDiv />
            <Box pt={3} pb={0.5}>
                <Button disabled={btnDisabled} color='primary' onClick={onSaveButton}>
                    Сохранить
                </Button>
            </Box>
        </Fragment>
    )
}

export default memo(FormPage);