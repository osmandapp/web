import waitForIdle from './waitForIdle.mjs';
import { FINAL_IDLE } from '../settings.mjs';

/**
 * Action: finalIdleWait(props)
 */
export default async function test(props) {
    await waitForIdle(props, { idle: FINAL_IDLE });
}
