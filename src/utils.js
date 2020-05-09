function unifyWidth(raw, n = 8) {
    let grid = String(raw).split('');
    while (grid.length < n) {
        grid.unshift(' ');
    }
    if (grid.length > n) {
        grid = grid.slice(grid.length - n);
    }
    return grid.join('');
}

module.exports = {
    unifyWidth,
};
