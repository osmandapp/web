import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net';
import styles from './Table.module.css';

function applyStyle() {
    $('.dataTables_paginate').addClass('pagination');
    $('.paginate_button').addClass('pagination__link');
    $('.paginate_button').wrap('<span class="pagination__item"></span>');
    $('.paginate_button.current').parent('span').addClass('pagination__item--active');
}

export default function Table({tableColumns, tableData}) {
    const el = useRef(null);
    const [dt, setDT] = useState(null);
    const [showOnPage, setShowOnPage ] = useState(50);
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
            drawCallback: function (settings) {
                applyStyle();
            },
            "dom": "tp"
        });
        // tbl.columns.adjust().draw();
        setDT(tbl);
    }, [tableColumns, tableData]);
    if (dt) {
        if (filter) {
            dt.search(filter).draw();
        }
        dt.page.len(showOnPage).draw();
    }
    return <>
        <div className={styles.table}>
            <nav className="navbar">
                    <div className="navbar__items">
                        <div className="navbar__item dropdown dropdown--hoverable">
                            <a className="navbar__link">{'Show ' + showOnPage}</a>
                            <ul className="dropdown__menu">
                                { showOnPageList.map( e => {
                                    return <li className="dropdown__link" 
                                        key={e} onClick={() => setShowOnPage(e)}>{e}</li>
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="navbar__items navbar__items--right">
                        <form>
                            <div className="navbar__search">
                                <input className="navbar__search-input" placeholder="Search" 
                                    onChange={e => setFilter(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                
            </nav>
            <table ref={el} cellSpacing="0" className="" width="100%">
            </table>
        </div>
        
    </>;
}
