var fmt = require("format-number");

export function splitSeconds(seconds) {
    let sec = seconds % 60;
    return {
        min: parseInt(seconds / 60),
        sec: fmt({ padLeft: 2, round: 1, padRight: 1})(sec)
    }
}
