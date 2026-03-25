import React, { useState, useEffect } from 'react';
import { TabContext, TabList } from '@mui/lab';
import PersistentTabPanel from './PersistentTabPanel';
import styles from './tabpanels.module.css';
import ThickDivider from '../../../frame/components/dividers/ThickDivider';

export default function TabPanels({ tabsObj }) {
    const [value, setValue] = useState(tabsObj?.defaultTab);

    useEffect(() => {
        if (tabsObj?.defaultTab) {
            setValue(tabsObj.defaultTab);
        }
    }, [tabsObj?.defaultTab]);

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
                    onChange={(e, newValue) => setValue(newValue)}
                >
                    {tabsObj.tabList}
                </TabList>
                <ThickDivider />
                <div className={styles.contentScroller}>
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
