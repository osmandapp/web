import openMapAndWaitLoaded from '../actions/openMapAndWaitLoaded.mjs';

export default async function test(props) {
    await openMapAndWaitLoaded(props);
}
