import React, { useRef, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GiveawayContent from '../components/content/Giveaway.mdx';
import Table from '../components/Table';

export default function Giveaway() {
    const host = 'https://osmand.net'
    const { siteConfig } = useDocusaurusContext();
    const [tableData, setTableData] = useState([]);
    const tableColumns = [
        {
            "data": "hashcode", "title": "Position",
            "render": function (data, type, row, meta) {
                return meta.row + 1;
            },
        },
        { "data": "hashcode", "title": "User"},
        { "data": "status", "title": "Status" },
        { "data": "date", "title": "Activation date"  }
    ];
    
    useEffect(() => {
        // /api/giveaway/series
        let dt = [];
        for(var i = 0; i < 123; i++) {
            dt.push({
                hashcode: '21'+i,
                status: i%5==0?'Winner':'Participant',
                date: 'Today'
            });
        }
        setTableData(dt);
    }, []);
    return <Layout
        title='OsmAnd Giveaway'
        description={siteConfig.tagline}>
        <main>
            <div className='container padding-vert--md'>
                <GiveawayContent />
                <Table tableColumns={tableColumns} tableData={tableData}/>
            </div>
        </main>
    </Layout>;
}
