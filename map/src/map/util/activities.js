import capitalize from 'lodash-es/capitalize';
import activities from '../../resources/activities.json';

export const UNIDENTIFIED_TRACKS_KEY = 'nospeed';
export const ACTIVITY_SHORT = 'garbage_short';
export const ACTIVITY_SPARSE = 'garbage_sparse';
export const ACTIVITY_ERROR = 'error';
const ACTIVITY_REJECTED = 'garbage';
const ACTIVITY_TELEPORT = 'garbage_teleport';

// tracks the classifier leaves out, off by default
export const IGNORED_ACTIVITIES = [
    { id: ACTIVITY_SHORT, name: 'web:ignored_short' },
    { id: ACTIVITY_SPARSE, name: 'web:ignored_sparse' },
    { id: ACTIVITY_ERROR, name: 'web:ignored_error' },
    { id: UNIDENTIFIED_TRACKS_KEY, name: 'web:ignored_no_timing' },
];

const DEFAULT_ACTIVITY_COLOR = '#666666';

const GROUP_COLORS = {
    driving: '#1976d2', // car
    motorcycling: '#f8931d', // motorcycle
    foot: '#d90139', // pedestrian
    winter_sport: '#ffacdf', // ski
    cycling: '#9053bd', // bicycle
    water_sport: '#08b5ff', // boat
    air_sports: '#2f6e80', // line
    other: DEFAULT_ACTIVITY_COLOR,
};

const ACTIVITY_TO_GROUP = {};
activities.groups.forEach((group) => {
    (group.activities || []).forEach((activity) => {
        ACTIVITY_TO_GROUP[activity.id] = group.id;
    });
});

export function getActivityColor(activity) {
    const group = GROUP_COLORS[activity] ? activity : ACTIVITY_TO_GROUP[activity];
    return GROUP_COLORS[group] || DEFAULT_ACTIVITY_COLOR;
}

const ACTIVITY_KEYS = Object.fromEntries([
    ...activities.groups.map((g) => [g.id, `web:activity_group_${g.id}`]),
    ...activities.groups.flatMap((g) => g.activities.map((a) => [a.id, `web:activity_${a.id}`])),
    ...IGNORED_ACTIVITIES.map((a) => [a.id, a.name]),
    // the server returns these with the No timing tracks
    [ACTIVITY_REJECTED, 'web:ignored_no_timing'],
    [ACTIVITY_TELEPORT, 'web:ignored_no_timing'],
]);

// the shown name of a stored activity or group: its translation, or the id as words for one the list does not know
export function activityLabel(id, t) {
    const key = ACTIVITY_KEYS[id];

    return key ? t(key) : capitalize(id.replace(/_/g, ' '));
}
