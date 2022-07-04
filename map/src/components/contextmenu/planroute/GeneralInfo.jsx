import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useMap} from "react-leaflet";

const GeneralInfo = ({newRoute, pointsList, setPointsList}) => {

    const map = useMap();

    const [distance, setDistance] = useState(0);

    map.on("editable:drawing:clicked", e => {

        newRoute && pointsList.push({lat: e.latlng.lat, lng: e.latlng.lng})

        let list = pointsList.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.lat === value.lat && t.lng === value.lng
                ))
        )
        setPointsList([...list]);
    });


    map.on("editable:vertex:deleted", e => {
        if (newRoute) {
            for (let i = 0; i < pointsList.length; i++) {
                if (pointsList[i].lat === e.latlng.lat && pointsList[i].lng === e.latlng.lng) {
                    pointsList.splice(i, 1);
                    break;
                }
            }
        }
        setPointsList([...pointsList]);
    });

    map.on("editable:drawing:move", e => {
        if (newRoute && e.oldLatLng) {
            for (let i = 0; i < pointsList.length; i++) {
                if (pointsList[i].lat === e.oldLatLng.lat && pointsList[i].lng === e.oldLatLng.lng) {
                    pointsList.splice(i, 1);
                    break;
                }
            }
            pointsList.push({lat: e.latlng.lat, lng: e.latlng.lng});
            let list = pointsList.filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t.lat === value.lat && t.lng === value.lng
                    ))
            )
            setPointsList([...list]);
        }
    });

    useEffect(() => {
        let dist = 0;
        if (pointsList.length > 1) {
            for (let index = 0; index < pointsList.length; ++index) {
                if (index === 0) {
                    pointsList[index].dist = 0
                } else {
                    let d = getDistance(pointsList[index].lat, pointsList[index].lng, pointsList[index - 1].lat, pointsList[index - 1].lng);
                    dist += d;
                    pointsList[index].dist = dist;
                }
            }
            setDistance(pointsList[pointsList.length - 1].dist);
        } else {
            setDistance(0);
        }
    }, [pointsList]);

    useEffect(() => {
        setPointsList([...pointsList]);
    }, [distance]);

    const getDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6372.8; // for haversine use R = 6372.8 km instead of 6371 km
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        //double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        //return R * c * 1000;
        // simplyfy haversine:
        return (2 * R * 1000 * Math.asin(Math.sqrt(a)));
    }

    const toRadians = (angdeg) => {
        return angdeg / 180.0 * Math.PI;
    }

    return (<Typography marginLeft={"20px"} variant="subtitle1" color="inherit">
            {"points: " + pointsList.length}<br/>
            {"distance: " + Math.trunc(distance) + " m"}
        </Typography>
    );
};

export default GeneralInfo;