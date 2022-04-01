import styles from './Poll.module.css';
import React from 'react';
import clsx from 'clsx';
import boxStyles from './Box.module.css';


export default function Poll() {
    // let pollTitle = "[[${poll.title}]]";
    // let pollId = "[[${poll.id}]]";
    // let pollDiv = $('[data-pollid~="' + pollId + '"]');
    // // pollDiv.find('h3').text("Update " + pollDiv.find('h3').text());
    // const loadResults = function (votes) {
    //     let allVotes = 0;
    //     Object.values(votes).forEach(e => {
    //         allVotes += e;
    //     });
    //     if (allVotes == 0) {
    //         allVotes = 1;
    //     }
    //     pollDiv.find('.poll-submit').css('display', 'none');
    //     pollDiv.find('.poll-radio-button').css('display', 'none');
    //     pollDiv.find('.poll-vote').css('display', '');
    //     pollDiv.find('.poll-vote').each(function (ind, e) {
    //         let aid = $(e).attr('data-answerid');
    //         let mv = votes[aid] ? votes[aid] : 0;
    //         $(e).children('span').eq(0).html('&nbsp;' + Math.round(mv * 100 / allVotes) + '%');
    //         $(e).children('span').eq(1).html('&nbsp;(' + mv + ' votes)');
    //     });
    //     pollDiv.find('.poll-vote-progress').css('display', '');
    //     pollDiv.find('.poll-vote-progress').each(function (ind, e) {
    //         let aid = $(e).attr('data-answerid');
    //         let mv = votes[aid] ? votes[aid] : 0;
    //         $(e).children('div').eq(0).css('width', Math.round(mv * 100 / allVotes) + '%');
    //     });
    // };
    // pollDiv.find('.poll-submit').click(function () {
    //     // pollDiv.find('.poll-submit').css('display', 'none');
    //     let ansId = $('input[type="radio"][name="' + pollId + '"]:checked').val();
    //     $.ajax({
    //         url: "/api/poll-submit?pollId=" + pollId + "&ansId=" + ansId,
    //         method: 'POST'
    //     }).done(function (data) {
    //         loadResults(data);
    //     });
    // });
    // pollDiv.find('.poll-results').click(function () {
    //     $.ajax({
    //         url: "/api/poll-results?pollId=" + pollId,
    //     }).done(function (data) {
    //         loadResults(data);
    //     });
    // });

    return (
        <div data-pollid="${poll.id}" className={`${styles.poll} ${boxStyles.box}`}>
            <h3 text="${poll.title}">Question</h3>
            <hr />
            <div>
                <div each="answer: ${poll.answers}" className={styles.pollAnswer}>
                    <span class="poll-radio-button">
                        <input type="radio" id="${answer.id}" value="${answer.ind}" name="${poll.id}" />
                    </span>
                    <label for="${answer.id}">
                        <span text="${answer.value}">Answer 1</span>
                        <br />
                        <span class="poll-vote" className={clsx('display: none')} data-answerid="${answer.id}">
                            <span className={styles.pollAnswerPercent}>&nbsp;0%</span>
                            <span>&nbsp;(0 votes)</span>
                        </span>
                    </label>
                    <div className={styles.pollAnswerProgressBg}
                        class="poll-vote-progress" data-answerid="${answer.id}">
                        <div className={styles.pollAnswerProgressFg}></div>
                    </div>
                </div>
            </div>
            <div className={styles.pollButtons}>
                <input className={styles.pollSingleButton} type="button" class="poll-submit" value="Submit" />
                <input className={styles.pollSingleButton} type="button" class="poll-results" value="Results" />
            </div>
        </div>
    );
};


