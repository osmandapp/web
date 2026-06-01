function quizTrack(path) {
    try { navigator.sendBeacon('/api/quiz-stat/' + path); } catch(e) {}
}
