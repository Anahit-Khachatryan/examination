function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        console.log('key', key)
        let j = i - 1;
        console.log('j', j)
           
        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            console.log('arr[j + 1]', array[j + 1])
            j = j - 1;
            console.log('j while', j)
        }
        array[j + 1] = key;
        console.log('arr arr[j+1', array[j + 1])
    }
    return array;
}

// Example usage:
let arr1 = [12, 11, 13, 5, 6];
// key = 11
// arr[j] = 12

console.log(insertionSort(arr1));

// Insertion - O(n^2) - builds the sorted array one element at a time by comparing each element with 
// the rest of the array.