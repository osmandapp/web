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

            const dateRegex =
                /\|date=(?:{{Original upload date\|)?(.*?)(?:}}|,|\n)|\|Date=(?:{{original upload date\|)?(.*?)(?:}}|,|\n)|\|date=(.*?)(?:\n|,)|\|Date=(.*?)(?:\n|,)/i;
            const authorRegex =
                /\|author=(?:\[.*?\s(.*?)\]|(?!{{unknown\|author}})(.*?)|{{(?:Creator|creator):(.*?)}}|{{user at project\|(.*?)\|.*?}}|\[\[User:.*?\|(.*?)\]\])(?:\n|,)|\|Author=(?:{{user at project\|(.*?)\|.*?}}|{{(?:Creator|creator):(.*?)}}|(?!{{unknown\|author}})(.*?)|\[\[User:.*?\|(.*?)\]\]|https:\/\/www\.flickr\.com\/people\/.*?\s(.*?))(?:\n|,)/i;
            const licenseRegex =
                /\|license={{(cc-by-sa-\d+\.\d+|cc-by-\d+\.\d+)\|.*?}}|\|permission=(cc-by-sa-\d+\.\d+)|{{Self\|.*?\|(CC-BY-SA-\d+\.\d+)\|.*?}}|{{self\|(cc-by-sa-\d+\.\d+)}}|{{(cc-by-\d+\.\d+)}}|{{(RCE-license)}}|{{(RCE license)}}/i;

            // Matching the data with the regex
            const dateMatch = data.match(dateRegex);
            const authorMatch = data.match(authorRegex);
            const licenseMatch = data.match(licenseRegex);

            // Extracting and cleaning up the matches
            const date = dateMatch
                ? (dateMatch[1] || dateMatch[2] || dateMatch[3] || dateMatch[4] || '').trim()
                : photo.properties.date;
            let author = authorMatch
                ? (
                      authorMatch[1] ||
                      authorMatch[2] ||
                      authorMatch[3] ||
                      authorMatch[4] ||
                      authorMatch[5] ||
                      authorMatch[6] ||
                      authorMatch[7] ||
                      authorMatch[8] ||
                      authorMatch[9] ||
                      ''
                  ).trim()
                : photo.properties.author;
            const license = licenseMatch
                ? (
                      licenseMatch[1] ||
                      licenseMatch[2] ||
                      licenseMatch[3] ||
                      licenseMatch[4] ||
                      licenseMatch[5] ||
                      licenseMatch[6] ||
                      ''
                  ).trim()
                : photo.properties.license;

            // Additional processing to clean up the author and license
            if (author && author.startsWith('[[') && author.endsWith(']]')) {
                author = author.split('|').pop().replace(']]', '');
            } else if (author && author.startsWith('{{') && author.endsWith('}}')) {
                const authorParts = author.split('|');
                if (authorParts.length > 2) {
                    author = authorParts.slice(1, -1).join('|').replace('}}', '').trim();
                } else {
                    author = authorParts[1].replace('}}', '').trim();
                }
            } else if (author && author.startsWith('[') && author.includes(' ')) {
                author = author.substring(author.indexOf(' ') + 1, author.indexOf(']')).trim();
            }

            return {
                ...photo,
                properties: {
                    ...photo.properties,
                    date: date || photo.properties.date,
                    author: author || photo.properties.author,
                    license: license || photo.properties.license,
                },
            };
        } catch (error) {
            console.error('Failed to fetch photo properties:', error);
        }
    }
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
