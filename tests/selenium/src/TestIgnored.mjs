export class TestIgnored extends Error {
    constructor(message) {
        super(message);
        this.name = 'TestIgnored';
    }
}
