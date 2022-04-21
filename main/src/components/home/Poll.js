import styles from './Poll.module.css';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import boxStyles from './Box.module.css';


export default function Poll({id}) {
    let pollHost = "https://osmand.net";
    const [title, setTitle] = useState('OsmAnd Poll');
    const [pollId, setPollId] = useState('');
    const [answers, setAnswers] = useState([]);

    const [results, setResults] = useState(null);
    const [ansId, setAnsId] = useState(null);

 
    const updateVotes = (votes) => {
        let allVotes = 0;
        Object.values(votes).forEach(e => {
            allVotes += e;
        });
        if (allVotes == 0) {
            allVotes = 1;
        }
        let r = [];
        Object.values(votes).forEach(mv => {
            r.push({ perc: Math.round(mv * 100 / allVotes), votes: mv })
        });
        setResults(r);
    };
    const showResults = async () => {
        const votes = await fetch(`${pollHost}/api/poll-results?pollId=${pollId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());
        updateVotes(votes);
    }

    const submitResult = async () => {
        if (!ansId) {
            alert('Please select any answer to submit');
            return;
        }
        const votes = await fetch(`${pollHost}/api/poll-submit?pollId=${pollId}&ansId=${ansId}`, {
            method: 'POST', 
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json());
        updateVotes(votes);
    }

    useEffect(() => {
        const loadPoll = async (e) => {
            const idReq = id ? `pollId=${id}` : '';
            const res = await fetch(`${pollHost}/api/latest-poll?${idReq}`, { 
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json());
            if (res.id) {
                setTitle(res.title);
                setPollId(res.id);
                setAnswers(res.answers);
            }
        }
        loadPoll();
    }, []);
    return (
        <div className={clsx(styles.poll, boxStyles.box, 'shadow--md')}>
            <h3>{title}</h3>
            <hr />
            <div>
                {answers.map(answer => {
                    return <div className={styles.pollAnswer} key={answer.ind}>
                            {!results && <span>
                                <input type="radio" id={answer.id} value={answer.ind} name={pollId} 
                                    onChange={() => setAnsId(answer.ind)} />
                            </span>}
                            <label htmlFor={answer.id}>
                                <span>{answer.value}</span>
                                {results && results[answer.ind] && <>
                                    <br />
                                    <span>
                                        <span className={styles.pollAnswerPercent}>{' ' + results[answer.ind].perc + '%'}</span>
                                        <span>{' (' + results[answer.ind].votes +' votes)'}</span>
                                    </span>
                                </>}
                            </label>
                            {results && results[answer.ind] && <div className={styles.pollAnswerProgressBg}>
                                <div className={styles.pollAnswerProgressFg} style={{ width: results[answer.ind].perc }}></div>
                            </div>}
                        </div>
                })}
            </div>
            {!results && <div className={styles.pollButtons}>
                <input className='button button--primary poll-submit' type="button" value="Submit" onClick={submitResult}/>
                <input className='button button--secondary poll-results' type="button" value="Results" onClick={showResults} />
            </div>}
        </div>
    );
};


