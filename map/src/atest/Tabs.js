import React, { useState, useEffect } from 'react';
import './Tabs.css'; // Import the CSS for styling

/**
 * Main Tabs component that manages the active tab state and persistence.
 * It iterates its children (expected to be TabItem components)
 * to build the tab buttons and content panels.
 * @param {object} props
 * @param {string} props.groupId - Unique identifier for this tab group (used for localStorage key).
 * @param {React.ReactNode} props.children - TabItem components.
 */
function Tabs({ groupId, children }) {
    const localStorageKey = `docusaurus.tabs.${groupId}`;

    // Collect all TabItem children and their relevant props
    const tabItemsData = React.Children.map(children, child => {
        // Ensure child is a valid React element and specifically a TabItem
        if (React.isValidElement(child) && child.type === TabItem) {
            return {
                value: child.props.value,
                label: child.props.label,
                isDefault: !!child.props.default, // Docusaurus uses 'default' prop directly. Coerce to boolean.
                attributes: child.props.attributes || {}, // Spread additional HTML attributes onto content div
                content: child.props.children // The actual content to be displayed
            };
        }
        return null; // Ignore non-TabItem children if any
    }).filter(Boolean); // Filter out any nulls that might result from non-TabItem children

    // State to hold the currently active tab's value
    const [activeTabValue, setActiveTabValue] = useState(() => {
        let storedValue = null;
        try {
            // Attempt to retrieve saved tab value from localStorage
            storedValue = localStorage.getItem(localStorageKey);
        } catch (error) {
            console.error("Error reading from localStorage:", error);
            // Fallback in case localStorage access fails, but don't block render
        }

        // Determine the initial active tab:
        // 1. Stored value (if valid and exists in current tabs data)
        // 2. Default tab (if specified with the 'default' prop on a TabItem)
        // 3. First available tab (if no stored or default)
        if (storedValue && tabItemsData.some(item => item.value === storedValue)) {
            return storedValue;
        }

        const defaultTab = tabItemsData.find(item => item.isDefault);
        if (defaultTab) {
            return defaultTab.value;
        }

        if (tabItemsData.length > 0) {
            return tabItemsData[0].value;
        }

        return undefined; // No tabs found or no valid initial state could be determined
    });

    // Effect to persist the active tab value to localStorage whenever it changes
    useEffect(() => {
        if (activeTabValue !== undefined) {
            try {
                localStorage.setItem(localStorageKey, activeTabValue);
            } catch (error) {
                console.error("Error writing to localStorage:", error);
            }
        }
    }, [activeTabValue, localStorageKey]);

    return (
        <div className="tabs-container">
            {/* Render Tab Buttons */}
            <div className="tab-list" role="tablist">
                {tabItemsData.map(item => {
                    const isActive = activeTabValue === item.value;
                    return (
                        <button
                            key={item.value} // Unique key for list rendering
                            className={`tab-button ${isActive ? 'active' : ''}`}
                            onClick={() => setActiveTabValue(item.value)}
                            role="tab"
                            aria-selected={isActive}
                            // Link button to its corresponding panel for accessibility
                            aria-controls={`${groupId}-${item.value}-panel`}
                            id={`${groupId}-${item.value}-tab`}
                            tabIndex={isActive ? 0 : -1} // Only active tab is tabbable for keyboard navigation
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>

            {/* Render Tab Content Panels */}
            <div className="tab-content-container">
                {tabItemsData.map(item => {
                    const isActive = activeTabValue === item.value;
                    return (
                        <div
                            key={item.value} // Unique key for list rendering
                            className={`tab-panel ${isActive ? 'active' : ''}`}
                            role="tabpanel"
                            // Link panel to its corresponding button for accessibility
                            aria-labelledby={`${groupId}-${item.value}-tab`}
                            id={`${groupId}-${item.value}-panel`}
                            hidden={!isActive} // Hide element from screen readers when not active
                            {...item.attributes} // Spread the additional attributes here!
                        >
                            {/* Render children (content) only if this panel is active
                                This prevents rendering hidden content, which can be a performance benefit */}
                            {isActive && item.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/**
 * TabItem component (a child of Tabs).
 * This component does not render anything directly on its own.
 * Instead, it serves as a declarative way to pass props (value, label, default, children, attributes)
 * to its parent `Tabs` component, which then uses these props to construct the UI.
 * @param {object} props
 * @param {string} props.value - Unique identifier for this tab.
 * @param {string} props.label - Text displayed on the tab button.
 * @param {boolean} [props.default] - If true, this tab is the default active tab.
 * @param {object} [props.attributes] - Additional HTML attributes to apply to the content div.
 * @param {React.ReactNode} props.children - Content to be displayed when this tab is active.
 */
function TabItem({ value, label, default: isDefaultProp, attributes, children }) {
    // This component conceptually represents the tab, but its rendering is handled
    // by the parent Tabs component. It primarily serves as a container for props.
    // It renders null because the parent Tabs component is responsible for
    // rendering the actual button and panel based on the collected TabItem props.
    return null;
}

export { Tabs, TabItem }; // Export both Tabs and TabItem