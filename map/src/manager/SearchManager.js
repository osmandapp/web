import { apiGet } from '../util/HttpApi';

export const WIKI_IMAGE_BASE_URL = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

export async function fetchPhotoProperties(photo) {
    if (!photo.properties.date || !photo.properties.author || !photo.properties.license) {
        const imageTitle = photo.properties.imageTitle;
        const url = `/wiki/File:${imageTitle}?action=raw`;
        try {
            const response = await apiGet(url, {
                apiCache: true,
            });
            const data = response.data;

            const parseWikiText = (wikiText) => {
                const lines = wikiText.split('\n');
                let author = 'Unknown';
                let date = 'Unknown';
                let license = 'Unknown';

                lines.forEach((line) => {
                    // Parse date
                    if (
                        line.includes('|date={{Original upload date|') ||
                        line.includes('|Date={{original upload date|')
                    ) {
                        date = line.split('{{original upload date|')[1].split('}}')[0];
                    } else if (line.includes('|date=') || line.includes('|Date=')) {
                        date = line.split('=')[1].trim().split(' ')[0];
                    }

                    // Parse author
                    if (line.includes('|author=')) {
                        if (line.includes('{{unknown|author}}')) {
                            author = 'Unknown';
                        } else if (line.includes('[[')) {
                            author = line.split('[[')[1].split(']]')[0].split('|')[1];
                        } else if (line.includes('{{Creator:')) {
                            author = line.split('{{Creator:')[1].split('}}')[0];
                        } else if (line.includes('{{creator:')) {
                            author = line.split('{{creator:')[1].split('}}')[0];
                        } else if (line.includes('{{user at project|')) {
                            author = line.split('{{user at project|')[1].split('|')[0];
                        } else if (line.includes('[https://')) {
                            author = line.split('[https://')[1].split(']')[0].split(' ')[1];
                        } else {
                            author = line.split('|author=')[1].trim();
                        }
                    } else if (line.includes('|Author=')) {
                        if (line.includes('{{unknown|author}}')) {
                            author = 'Unknown';
                        } else if (line.includes('{{user at project|')) {
                            author = line.split('{{user at project|')[1].split('|')[0];
                        } else if (line.includes('[https://')) {
                            author = line.split('[https://')[1].split(']')[0].split(' ')[1];
                        }
                    }

                    // Parse license
                    if (line.includes('|license=')) {
                        license = line.split('|license=')[1].split('|')[0].split('}')[0];
                    } else if (line.includes('|permission=')) {
                        license = line.split('|permission=')[1].split('|')[0].split('}')[0];
                    } else if (line.includes('{{Self|')) {
                        const parts = line.split('{{Self|')[1].split('|');
                        license = parts.find((part) => part.startsWith('CC-BY') || part.startsWith('cc-by'));
                    } else if (line.includes('{{cc-by-')) {
                        license = line.split('{{')[1].split('}}')[0];
                    } else if (line.includes('{{RCE-license}}')) {
                        license = 'RCE-license';
                    } else if (line.includes('{{RCE license}}')) {
                        license = 'RCE license';
                    }
                });

                return {
                    author,
                    date,
                    license,
                };
            };

            const parsedData = parseWikiText(data);

            return {
                ...photo,
                properties: {
                    ...photo.properties,
                    date: parsedData.date !== 'Unknown' ? parsedData.date : photo.properties.date,
                    author: parsedData.author !== 'Unknown' ? parsedData.author : photo.properties.author,
                    license: parsedData.license !== 'Unknown' ? parsedData.license : photo.properties.license,
                },
            };
        } catch (error) {
            console.error('Failed to fetch photo properties:', error);
            return photo;
        }
    }
    return photo;
}

/**
 * Examples:
 * Date:
 * |date={{Original upload date|2015-04-15}} => 2015-04-15
 * |Date={{original upload date|2006-11-05}} => 2006-11-05
 * |date=2011-10-08 => 2011-10-08
 * |Date=2009-12-06 23:11 => 2009-12-06 23:11
 * |date=1940-05 => 1940-05
 *
 * Author:
 * |author=[https://web.archive.org/web/20161031223609/http://www.panoramio.com/user/4678999?with_photo_id=118704129 Ben Bender] => Ben Bender
 * |author={{Creator:Johannes Petrus Albertus Antonietti}} => Johannes Petrus Albertus Antonietti
 * |author={{creator:Johannes Petrus Albertus Antonietti}} => Johannes Petrus Albertus Antonietti
 * |author=[[User:PersianDutchNetwork|PersianDutchNetwork]] => PersianDutchNetwork
 * |Author={{user at project|MelvinvdC|wikipedia|nl}} => MelvinvdC
 * |Author=[https://www.flickr.com/people/13088710@N02 Jos van Zetten] from Amsterdam, the Netherlands => Jos van Zetten
 * |author={{unknown|author}} => 'Unknown'
 *
 * License:
 * |license={{cc-by-sa-3.0|Author Name}} => cc-by-sa-3.0
 * |permission=cc-by-sa-3.0 => cc-by-sa-3.0
 * == {{int:license-header}} ==
 * {{Self|author={{user at project|MelvinvdC|wikipedia|nl}}|GFDL|CC-BY-SA-2.5|migration=relicense}} => CC-BY-SA-2.5
 * {{self|cc-by-sa-3.0}} => cc-by-sa-3.0
 * {{cc-by-2.0}} => cc-by-2.0
 * {{RCE-license}} => RCE-license
 * {{RCE license}} => RCE license
 */
