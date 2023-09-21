export function getOption(key) {
    const val = key.split('.').reduce((a, k) => a !== undefined && a[k], this.options);
    val === undefined && console.error('getOption() option not found:', key);
    return val;
}

export function getOptionText(key) {
    const text = key.split('.').reduce((a, k) => a !== undefined && a[k], this.optionsText);
    text === undefined && console.error('getOptionText() option not found:', key);
    return text;
}

export function setOption(key, val) {
    const exist = key.split('.').reduce((a, k) => a !== undefined && a[k], this.options);
    if (exist === undefined) {
        console.error('setOption() option not found:', key);
        return undefined;
    }
    this.flushState((o) =>
        key.split('.').reduce((a, k, i, path) => (i === path.length - 1 ? (a[k] = val) : a[k]), o.options)
    );
    return val;
}
