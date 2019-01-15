function getCommonSubseq(s1, s2) {
    let s1Arr = s1.split('')
    let s2Arr = s2.split('')

    let result = []
    let occurences = []

    s1Arr.forEach(s1 => {
        if (typeof occurences[s1] === 'undefined') {
            occurences[s1] = 1
        } else {
            occurences[s1]++
        }
        
    })

    s1Arr.forEach(s1 => {
        s2Arr.forEach(s2 => {
            if (s1 === s2 && occurences[s1] > 0) {
                result.push(s1)
                occurences[s1]--

                s2Arr.splice(s2Arr.indexOf(s2), 1)
            }
        })
    })

    return result
}

$("#submitForm").click(() => {
    let sub1 = $("#sub1").val()
    let sub2 = $("#sub2").val()

    result = getCommonSubseq(sub1, sub2)

    console.log(result)
})
