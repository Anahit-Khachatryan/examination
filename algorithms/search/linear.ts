console.log('linear')
let linearSearch = (list: Array<number>, value: number) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i
        }
    }
    return -1
}

const list = [1,2,4,5,98,7]
console.log(linearSearch(list, 100))

// All the javascript search methods like find, indexOf etc. are using Linear Search. 
// This is the simplest way of searching. Given an array, we look at every element to 
// find what we are looking for. We check one item at a time starting from the beginning of 
// the array or end of the array.
// O(n)