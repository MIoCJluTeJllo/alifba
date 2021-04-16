export const mixArray = (array) => array.sort(() => .5 - Math.random())

export const getFirstNFromItem = (N, item, array) => {
    const returnArray = []
    const startIndex = array.indexOf(item)
    for (let i = startIndex; i < startIndex + N; i++){
        returnArray.push(array[i % array.length])
    }
    return returnArray
}