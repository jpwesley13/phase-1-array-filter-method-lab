function findMatching(drivers, cb){
    const returnedDrivers = drivers.filter(function(driver){
        return cb.toLowerCase() === driver.toLowerCase()
    })
    return returnedDrivers;
}

function fuzzyMatch(drivers, string){
    let letters = string.length
    const tDrivers = drivers.filter(
        function(firstTwo){
            return string === firstTwo.substring(0,letters)
    })
    return tDrivers
}

function matchName(drivers, match){
    const matchingDrivers = drivers.filter(
        function(driver){
            return match === driver.name;
        }
    )
    return matchingDrivers;
}