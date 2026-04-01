import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { TabContext, TabList } from '@mui/lab';
import PersistentTabPanel from './PersistentTabPanel';
import styles from './tabpanels.module.css';
import ThickDivider from '../../../frame/components/dividers/ThickDivider';

export default function TabPanels({ tabsObj, scrollAreaHandlers }) {
    const [value, setValue] = useState(tabsObj?.defaultTab);

    const contentScrollerRef = useRef(null);
    const tabScrollTopByIdRef = useRef({});
    const { onContentScroll, onScrollAreaLayout, onScrollAreaContextChange } = scrollAreaHandlers;

    useEffect(() => {
        if (tabsObj?.defaultTab) {
            setValue(tabsObj.defaultTab);
        }
    }, [tabsObj?.defaultTab]);

    useLayoutEffect(() => {
        const el = contentScrollerRef.current;
        if (el) {
            const savedScrollTop = tabScrollTopByIdRef.current[value] ?? 0;
            if (el.scrollTop !== savedScrollTop) {
                el.scrollTop = savedScrollTop;
            }
            onScrollAreaLayout(el);
        }
    }, [value]);

    const handleContentScroll = useCallback(
        (event) => {
            if (value) {
                tabScrollTopByIdRef.current[value] = event.currentTarget.scrollTop;
            }
            onContentScroll(event);
        },
        [onContentScroll, value]
    );

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
                        const el = contentScrollerRef.current;
                        if (el && value) {
                            tabScrollTopByIdRef.current[value] = el.scrollTop;
                        }
                        onScrollAreaContextChange();
                        setValue(newValue);
                    }}
                >
                    {tabsObj.tabList}
                </TabList>
                <ThickDivider />
                <div ref={contentScrollerRef} className={styles.contentScroller} onScroll={handleContentScroll}>
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
