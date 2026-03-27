import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { TabContext, TabList } from '@mui/lab';
import PersistentTabPanel from './PersistentTabPanel';
import styles from './tabpanels.module.css';
import ThickDivider from '../../../frame/components/dividers/ThickDivider';

export default function TabPanels({ tabsObj, scrollAreaHandlers }) {
    const [value, setValue] = useState(tabsObj?.defaultTab);

    const contentScrollerRef = useRef(null);
    const { onContentScroll, onScrollAreaLayout, onScrollAreaContextChange } = scrollAreaHandlers;

    useEffect(() => {
        if (tabsObj?.defaultTab) {
            setValue(tabsObj.defaultTab);
        }
    }, [tabsObj?.defaultTab]);

    useLayoutEffect(() => {
        const el = contentScrollerRef.current;
        if (el) {
            onScrollAreaLayout(el);
        }
    }, [value]);

    if (!tabsObj || tabsObj.tabList.length === 0) {
        return null;
    }

    return (
        <TabContext value={value}>
            <div className={styles.tabPanelsRoot}>
                <TabList
                    className={styles.mainTabs}
                    variant="scrollable"
                    scrollButtons="auto"
                    onChange={(e, newValue) => {
                        onScrollAreaContextChange();
                        setValue(newValue);
                    }}
                >
                    {tabsObj.tabList}
                </TabList>
                <ThickDivider />
                <div ref={contentScrollerRef} className={styles.contentScroller} onScroll={onContentScroll}>
                    {Object.values(tabsObj.tabs).map((item) => (
                        <PersistentTabPanel key={'tabpanel-track:' + item.key} selectedTabId={value} tabId={item.key}>
                            {item}
                        </PersistentTabPanel>
                    ))}
                </div>
            </div>
        </TabContext>
    );
}
