function getFirstRecurringChar(str) {
    let arrStr = str.split('')
    let charsFound = []
    let result = null

    for (let i=0; i < arrStr.length; i++) {
        if (charsFound.indexOf(arrStr[i]) > 0) {
            charsFound.push(arrStr[i])
        } else {
            return arrStr[i]
        }
    }

    return null
}


$("#submitForm").click(()=> {
    let str = $("#txt").val()
    let result = getFirstRecurringChar(str)
    
    console.log(result)
})
