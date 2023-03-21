function superbowlWin(record) {
    function didWin(element) {
        return (element.result === "W")
    }
    let result = record.find(didWin)
    if ( result === undefined){
        return result
    } else {
        return result.year
    }
}