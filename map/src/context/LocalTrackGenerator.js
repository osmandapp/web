function generate(ctx) {
    let name = createName(ctx);
    let points = createPoints();
    return {name: name, points: points}
}

function createName(ctx) {
    let name = new Date().toDateString();
    let count = 0;
    ctx.localClientsTracks.forEach(t => {
        if (t.name.split(' - ')[0] === name) {
            count++;
        }
    })
    if (count > 0) {
        name = name + ' - ' + count;
    }

    return name;
}

function createPoints() {
    let points = [];
    let prevPoint;
    for (let i = 1; i <= 10; i++) {
        let lat;
        let lng;
        if (!prevPoint) {
            lat = Math.floor(Math.random() * (Math.floor(48.305) - Math.ceil(51.543))) + Math.ceil(51.543);
            lng = Math.floor(Math.random() * (Math.floor(37.749) - Math.ceil(24.664))) + Math.ceil(24.664);
        } else {
            lat = Math.floor(Math.random() * (Math.floor(prevPoint.lat - 2) - Math.ceil(prevPoint.lat + 2))) + Math.ceil(prevPoint.lat + 2);
            lng = Math.floor(Math.random() * (Math.floor(prevPoint.lng - 2) - Math.ceil(prevPoint.lng + 2))) + Math.ceil(prevPoint.lng + 2);
        }
        prevPoint = {lat: lat, lng: lng};
        points.push({lat: lat, lng: lng})
    }

    return points;
}


const LocalTrackGenerator = {
    generate
};

export default LocalTrackGenerator;