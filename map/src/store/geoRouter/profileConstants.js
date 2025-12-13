export const PROFILE_CAR = 'car';
export const PROFILE_TRUCK = 'truck';
export const PROFILE_MOTORCYCLE = 'motorcycle';
export const PROFILE_BICYCLE = 'bicycle';
export const PROFILE_PEDESTRIAN = 'pedestrian';
export const PROFILE_HORSEBACK_RIDING = 'horsebackriding';
export const PROFILE_BOAT = 'boat';
export const PROFILE_SKI = 'ski';
export const PROFILE_MOPED = 'moped';
export const PROFILE_TRAIN = 'train';
export const PROFILE_LINE = 'line';
export const PROFILE_RESCUETRACK = 'rescuetrack';
export const PROFILE_RESCUETRACK_EMERGENCY = 'rescuetrack-emergency';

export const PROFILE_GROUPS = {
    main: [
        PROFILE_CAR,
        PROFILE_TRUCK,
        PROFILE_MOTORCYCLE,
        PROFILE_BICYCLE,
        PROFILE_PEDESTRIAN,
        PROFILE_HORSEBACK_RIDING,
        PROFILE_BOAT,
        PROFILE_SKI,
        PROFILE_MOPED,
        PROFILE_TRAIN,
    ],
    line: [PROFILE_LINE],
    rescue: [PROFILE_RESCUETRACK, PROFILE_RESCUETRACK_EMERGENCY],
};

export const DEFAULT_VISIBLE_PROFILES = [PROFILE_CAR, PROFILE_BICYCLE, PROFILE_PEDESTRIAN, PROFILE_MOTORCYCLE];

// Route points keys
export const ROUTE_POINTS_START = 'route.points.start';
export const ROUTE_POINTS_FINISH = 'route.points.finish';
export const ROUTE_POINTS_VIA = 'route.points.viaPoints';
export const ROUTE_POINTS_AVOID_ROADS = 'route.points.avoidRoads';
export const ROUTE_POINTS_VIA_INPUTS_COUNT = 'route.points.viaInputsCount';
