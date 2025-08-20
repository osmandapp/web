import React, { useRef, useEffect, useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GiveawayContent from '../components/content/Giveaway.mdx';
import Table from '../components/Table';
import BrowserOnly from '@docusaurus/BrowserOnly';

// - TODO CSS

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

var locationSearch = null;

export default function Giveaway() {
    const host = 'https://osmand.net' 
    //const host = 'http://localhost:8080' 
    const { siteConfig } = useDocusaurusContext();
    const [tableData, setTableData] = useState([]);
    const [series, setSeries] = useState([]);
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [selectedRnd, setSelectedRnd] = useState(null);
    const [subscribeFlag, setSubscribeFlag] = useState(false);
    const [userMessage, setUserMessage] = useState(null);

    const [email, setEmail] = useState(false);
    const [android, setAndroid] = useState(true);
    const [readMore, setReadMore] = useState(false);

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

    const updateGiveawayRound = (rnd) => {
        rnd.roundParticipants = rnd.participants.split(',');
        rnd.winnersCount = rnd.winner.split(',').length;
        // rnd.seed - 16x radix, rnd.seedInteger - 10-radix
        setSelectedRnd(rnd);
        let tableData = [];
        for (var ri = 0; ri < rnd.roundParticipants.length; ri++) {
            tableData.push({
                hashcode: rnd.roundParticipants[ri],
                status: rnd.winner == rnd.roundParticipants[ri] ? 'Winner' : 'Participated',
                date: ''
            });
        }
        setTableData(tableData);
    }
    const participateWithEmail = async () => {
        // Encode the email to handle special characters like '+'
        const encodedEmail = encodeURIComponent(email);
        const res = await fetch(host + '/api/giveaway-subscribe?email=' + encodedEmail +
            '&os=' + (android ? 'android' : 'ios'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());
        setUserMessage(res.message);
        setSubscribeFlag(false);
    };

    const loadSerie = async (args) => {
        if (args) {
            const serie = await fetch(host + '/api/giveaway' + args, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json());
            setSelectedSeries(serie);
            if (serie?.message) {
                setUserMessage(serie.message);
            }
            setTableData(serie.users);
        }
        setSelectedRnd(null);
    };

    const loadSeries = async () => {
        // promocodes {name: "2022-01-iOS", rounds: 20, status: "FINISHED",…}
        const series = await fetch(host + '/api/giveaway-series', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());
        setSeries(series.seriesList);
        var args = null;
        if (locationSearch && locationSearch != '') {
            args = locationSearch;
        } else if (series.seriesList?.length > 0) {
            args = "?series=" + series.seriesList[0].name;
        }
        if (args) {
            loadSerie(args);
        }
    }
    
    useEffect(() => {
        loadSeries();
    }, []);
    // const TableComponent = React.memo((tableColumns, tableData) => <Table tableColumns={tableColumns} tableData={tableData} />, 
    //     [tableColumns, tableData]);
    const TableComponent = React.memo(Table,[tableColumns, tableData]);
    // Table tableColumns={tableColumns} tableData={tableData} />
    return <Layout
        title='OsmAnd Giveaway'
        description={siteConfig.tagline}>
        <main>
            <BrowserOnly>{() => {
                locationSearch = window.location.search;
                return <></>
            }}
            </BrowserOnly>
            <div className='container padding-vert--md'>
                <h1 className='hero__title'>OsmAnd Giveaways</h1>
                <p className="hero__subtitle">Participate and win free promocode for OsmAnd on Google Play &amp; App Store.</p>
                {userMessage && <h2>{'⚠️' + userMessage}</h2>}
                {!subscribeFlag && <div className='margin-vert--md'>                    
                    <button className="button button--primary button--outline button--lg margin-right--md margin-top--md" onClick={() => setSubscribeFlag(true)}>
                        Participate
                    </button>
                    <button className="button button--secondary button--outline button--lg margin-top--md" onClick={() => setReadMore(!readMore)}>
                        {!readMore ? 'Read more' : 'Hide'}
                    </button>
                </div>
                }
                {subscribeFlag && <div className='margin-vert--md'>
                    <input className="button button--lg margin-right--md margin-top--md" placeholder='Enter your email' type="email" name="email" required 
                        style={{ color: 'var(--ifm-font-color-base)'}} onChange={e => setEmail(e.target.value) }>
                    </input>
                    <div className="dropdown dropdown--hoverable margin-right--md margin-top--md">
                        <button className="button button--lg button--link">{android ? 'Android' : 'iOS'}</button>
                        <ul className="dropdown__menu">
                            <li><a className="dropdown__link" onClick={() => setAndroid(true)}>Android</a></li>
                            <li><a className="dropdown__link" onClick={() => setAndroid(false)}>iOS</a></li>
                        </ul>
                    </div>
                    <button className={
                        "button button--primary button--outline button--lg margin-right--md margin-top--md" + (isValidEmail(email) ? "" : " disabled") }  
                                onClick={() => participateWithEmail() }>
                        Subscribe
                    </button>
                </div>
                }
                {readMore && <GiveawayContent />}
                <h3>Giveaway series</h3>
                {selectedSeries &&
                    <div>
                        <p >
                            <span>{'Overview for ' + selectedSeries.series + (selectedRnd ? (' - ' + selectedRnd.message) : '')}</span>
                            <span id="overview-id" style={{ color: 'black', float: 'right' }}></span>
                        </p>
                        <div className="row">
                            <div className="col col--3">
                                <b>{selectedRnd ? selectedRnd.winnersCount : selectedSeries.winners}</b> Winners
                            </div>
                            <div className="col col--3">
                                <b>{selectedRnd ? selectedRnd.roundParticipants.length : selectedSeries.participants}</b> Participants
                            </div>
                            {!selectedRnd && <div className="col col--6">
                                <b>{selectedSeries.rounds.length + ' / ' + selectedSeries.totalRounds}</b> Rounds
                            </div>
                            }
                            {selectedRnd && <div className="col col--6">
                                <div>
                                    <div className="dropdown dropdown--hoverable">
                                    <a
                                        href={"https://www.blockchain.com/btc/block/" + selectedRnd.seed} target="_blank">{
                                            "...." + selectedRnd.seed.substring(52)}</a>
                                    <ul className="dropdown__menu">
                                        <li className="dropdown__link">{"Bitcoin hash block " + selectedRnd.seed + "  16-radix"}</li>
                                    </ul>
                                    </div>
                                    {"\u00A0→\u00A0" + selectedRnd.roundParticipants.length + " = "}
                                    <a target="_blank" href={"https://www.wolframalpha.com/input/?i=(0x0" + selectedRnd.seed +
                                        + " mod " + selectedRnd.roundParticipants.length +
                                        +")+%2B+1+%3D"}>
                                        {ordinal_suffix_of(selectedRnd.selection + 1) + " is Winner"}
                                    </a>
                                </div>
                                <span>Random seed by Bitcoin block hash</span>
                            </div>
                            }
                        </div>
                    </div>
                }
                
                <div className="row margin-vert--md">
                    <div className="dropdown dropdown--hoverable col col--3">
                        <a className="navbar__link">{'Serie - ' + (selectedSeries ? selectedSeries.series : '')}</a>
                        <ul className="dropdown__menu">
                            {series.map(e => {
                                return <li className="dropdown__link"
                                    key={e.name} onClick={() => loadSerie("?series=" + e.name)}>{e.name}</li>
                            })
                            }
                        </ul>
                    </div>
                    {selectedSeries && 
                        <div className="dropdown dropdown--hoverable col col--3">
                            <a className="navbar__link">{selectedRnd ? selectedRnd.message : 'Overall'}</a>
                            <ul className="dropdown__menu">
                                <li className="dropdown__link"
                                    key={'-1'} onClick={() => setSelectedRnd(null)}>Overall</li>
                                {selectedSeries.rounds.map(rnd => {
                                    return <li className="dropdown__link"
                                        key={rnd.roundId} onClick={() => updateGiveawayRound(rnd)}>{rnd.message}</li>
                                })
                                }
                            </ul>
                        </div>
                    }
                </div>
                {
                    <TableComponent tableColumns={tableColumns} tableData={tableData} />
                }
            </div>
        </main>
    </Layout>;
}
