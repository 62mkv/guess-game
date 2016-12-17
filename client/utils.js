export function splitSeconds(seconds) {
    let strsec = "" + seconds % 60;
    return {
        min: parseInt(seconds / 60),
        sec: ('00'+strsec).substring(strsec.length)
    }
}
