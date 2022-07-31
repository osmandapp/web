
function getTrackList(files) {
    return (!files ? [] :
        Object.values(files).filter((item) => item.local === true));
}

const LocalTrackUtils = {
    getTrackList
};

export default LocalTrackUtils;