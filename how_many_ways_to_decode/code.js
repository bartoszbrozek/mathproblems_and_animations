let mapping = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

let data3 = '1' // 1 | 1=>1
let data2 = '12' // 1, 2, 3 | 2=>3
let data1 = '123' // 1, 2, 3, 12, 23| 3=>5
let data = '1234' // 1, 2, 3, 4, 12, 23, 34, 123, 234 | 4=>9
let data5 = '12345' // 1, 2, 3, 4, 5, 12, 23, 34, 45, 123, 234, 345, 1234, 2345 | 5 => 14

function getNumberOfWaysToDecodeMsg(msg) {
    let arrMsg = msg.split('')
    let result = []
    let endIndex = arrMsg.length

    for (i = 1; i <= arrMsg.length; i++) {
        for (startIndex = 0; startIndex < i; startIndex++) {
            if (i === 1) {
                temp = arrMsg.join('')
            } else {
                endIndex = (arrMsg.length - i) + startIndex + 1
                temp = arrMsg.slice(startIndex, endIndex).join('')
            }

            if (parseInt(temp) <= mapping.length + 1) {
                result.push(temp)
            }
        }
    }

    return result.length
}

let result = getNumberOfWaysToDecodeMsg(data3)

console.log(result)
