import { TestIgnored } from '../TestIgnored.mjs';

export default function test(ignore = true) {
    if (ignore) {
        throw new TestIgnored('Test has been ignored');
    }
}
