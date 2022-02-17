
async function fetchUtil(url, options) {

    const fetchData = async () => {
        return await fetch(url, options);
    };

    const response = await fetchData()
        .then(function(result) {
            return result;
        });

    if (response.redirected) {
        window.location.href = response.url;
    }

    return response;
}

async function fetchUtilLoad(url, options, setProgressVisible) {

    setProgressVisible(true);

    const fetchData = async () => {
        return await fetch(url, options);
    };

    const response = await fetchData()
        .then(function(result) {
            return result;
        });

    if (response.redirected) {
        setProgressVisible(false);
        window.location.href = response.url;
    }

    return response;
}

export default {
    fetchUtil,
    fetchUtilLoad
}