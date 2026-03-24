import React, { useState, useEffect } from 'react';
import { TabContext, TabList } from '@mui/lab';
import PersistentTabPanel from './PersistentTabPanel';

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
            <TabList
                variant="scrollable"
                scrollButtons
                onChange={(e, newValue) => setValue(newValue)}
                sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
                {tabsObj.tabList}
            </TabList>
            <div>
                {Object.values(tabsObj.tabs).map((item) => (
                    <PersistentTabPanel key={'tabpanel-track:' + item.key} selectedTabId={value} tabId={item.key}>
                        {item}
                    </PersistentTabPanel>
                ))}
            </div>
        </TabContext>
    );
}
