import capitalize from 'lodash-es/capitalize';
import activities from '../../resources/activities.json';

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
]);

// the shown name of a stored activity or group: its translation, or the id as words for one the list does not know
export function activityLabel(id, t) {
    const key = ACTIVITY_KEYS[id];

    return key ? t(key) : capitalize(id.replace(/_/g, ' '));
}
