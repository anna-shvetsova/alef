import React, { Fragment, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { changeTabIndex } from '../actions';
import FormPage from './form-page';
import PreviewPage from './preview-page';

const App = () => {
    const curTabIndex = useSelector(state => state.curTabIndex);
    const dispatch = useDispatch();

    const onTabChange = useCallback((event, newTabIndex) => {
        dispatch(changeTabIndex(newTabIndex));
    }, [dispatch]);

    return (
        <Fragment>
            <AppBar position="static">
                <Tabs value={curTabIndex} onChange={onTabChange} centered>
                    <Tab label="Форма" />
                    <Tab label="Превью" />
                </Tabs>
            </AppBar>
            <TabPanel value={curTabIndex} index={0}>
                <FormPage />
            </TabPanel>
            <TabPanel value={curTabIndex} index={1}>
                <PreviewPage />
            </TabPanel>
        </Fragment>
    );
}

const TabPanel = ({ children, value, index }) => {
    return <div hidden={value !== index}>{children}</div>;
}

export default memo(App);
