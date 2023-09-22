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

/**
 * Param: key <String> path to option, fox example 'route.hidePoints'
 * Param: val <Function>|<Any> new value or function (oldVal) => return newVal
 */
export function setOption(key, val) {
    const exist = key.split('.').reduce((a, k) => a !== undefined && a[k], this.options);
    if (exist === undefined) {
        console.error('setOption() option not found:', key);
        return undefined;
    }
    this.flushState((o) =>
        key
            .split('.')
            .reduce(
                (a, k, i, path) =>
                    i === path.length - 1 ? (a[k] = typeof val === 'function' ? val(a[k]) : val) : a[k],
                o.options
            )
    );
    return val;
}
