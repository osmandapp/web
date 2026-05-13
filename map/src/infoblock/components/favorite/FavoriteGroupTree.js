import FavoritesManager, { normalizeFavoritePointsGroupName } from '../../../manager/FavoritesManager';
import { hexToRgba } from '../../../util/ColorUtil';
import { collator } from '../../../context/AppContext';

export function buildGroupTree(groups, t) {
    const sorted = [...groups]
        .filter((g) => !g.sharedWithMe)
        .sort((a, b) => {
            if (a.name === FavoritesManager.DEFAULT_GROUP_NAME) return -1;
            if (b.name === FavoritesManager.DEFAULT_GROUP_NAME) return 1;
            return collator.compare(a.name, b.name);
        });

    const folderMap = {};

    // first pass — create entries for all real groups
    for (const group of sorted) {
        const pgName = normalizeFavoritePointsGroupName(group.name);
        const pg = group.pointsGroups?.[pgName];
        const isDefault = group.name === FavoritesManager.DEFAULT_GROUP_NAME;
        const parts = group.name.split('/');
        const displayName = isDefault ? t('shared_string_my_favorites') : parts[parts.length - 1];

        folderMap[group.name] = {
            name: group.name,
            displayName,
            color: pg?.color ? hexToRgba(pg.color) : '#888888',
            size: FavoritesManager.getGroupSize(group),
            group,
            subfolders: [],
        };
    }

    // second pass — create virtual entries for any missing intermediate folders
    for (const group of sorted) {
        if (group.name === FavoritesManager.DEFAULT_GROUP_NAME || !group.name.includes('/')) {
            continue;
        }
        const parts = group.name.split('/');
        for (let i = 1; i < parts.length; i++) {
            const ancestorName = parts.slice(0, i).join('/');
            if (!folderMap[ancestorName]) {
                folderMap[ancestorName] = {
                    name: ancestorName,
                    displayName: parts[i - 1],
                    color: '#888888',
                    size: 0,
                    group: null,
                    subfolders: [],
                    virtual: true,
                };
            }
        }
    }

    // third pass — attach subfolders to their parents
    const rootFolders = [];
    const allNames = Object.keys(folderMap).sort((a, b) => {
        if (a === FavoritesManager.DEFAULT_GROUP_NAME) return -1;
        if (b === FavoritesManager.DEFAULT_GROUP_NAME) return 1;
        return collator.compare(a, b);
    });

    for (const name of allNames) {
        const folder = folderMap[name];
        if (name === FavoritesManager.DEFAULT_GROUP_NAME || !name.includes('/')) {
            rootFolders.push(folder);
        } else {
            const parts = name.split('/');
            const parentName = parts.slice(0, -1).join('/');
            if (folderMap[parentName] && !folderMap[parentName].subfolders.some((f) => f.name === name)) {
                folderMap[parentName].subfolders.push(folder);
            }
        }
    }

    return rootFolders;
}

export function groupTreeToList(rootFolders) {
    const result = [];

    function collect(folder, level) {
        result.push({
            group: folder.group,
            displayName: folder.displayName,
            level,
            fullName: folder.name,
            virtual: folder.virtual,
        });
        for (const subfolder of folder.subfolders) collect(subfolder, level + 1);
    }
    for (const folder of rootFolders) collect(folder, 0);

    return result;
}
