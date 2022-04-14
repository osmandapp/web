import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import $ from 'jquery';

import styles from './Table.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function applyStyle() {
    $('.dataTables_paginate').addClass('pagination');
    $('.paginate_button').addClass('pagination__link');
    $('.paginate_button').wrap('<span class="pagination__item"></span>');
    $('.paginate_button.current').parent('span').addClass('pagination__item--active');
}

export default function Table({ tableColumns, tableData }) {
    const el = useRef(null);
    const [dt, setDT] = useState(null);
    const [showOnPage, setShowOnPage] = useState(50);
    const [filter, setFilter] = useState('');
    const showOnPageList = [10, 25, 50, 100];
    useEffect(() => {
        let tbl = $(el.current).DataTable({
            data: tableData,
            destroy: true,
            columns: tableColumns,
            paging: true,
            ordering: false,
            iDisplayLength: showOnPage,
            info: false,
            searching: true,
            autoWidth: false,
            drawCallback: function (settings) {
                applyStyle();
            },
            "dom": "tp"
        });
        tbl.columns.adjust().draw();
        setDT(tbl);
    }, [tableColumns, tableData]);
    if (dt) {
        //if (filter) {
        dt.search(filter).draw();
        dt.columns.adjust().draw();

        //}
        dt.page.len(showOnPage).draw();
    }
    if (ExecutionEnvironment.canUseDOM) {
        require('datatables.net');
    }
    return <>
        <div className={styles.tablediv}>
            <div className="row margin-vert--md">
                <div className="navbar__search margin-horiz--md" >
                    <input className="navbar__search-input" placeholder="Search"
                        onChange={e => setFilter(e.target.value)} align='left' />
                </div>
                <div className={"dropdown dropdown--hoverable " + styles.showmore}>
                    <a className={'navbar__link ' + styles.showmore}>{'Show ' + showOnPage}</a>
                    <ul className={'dropdown__menu ' + styles.showmore} >
                        {showOnPageList.map(e => {
                            return <li className="dropdown__link"
                                key={e} onClick={() => setShowOnPage(e)}>{e}</li>
                        })
                        }
                    </ul>
                </div>
            </div>
            <table ref={el} cellSpacing="0" className="margin-vert--md" width="100%">
            </table>
        </div>

    </>;
}
