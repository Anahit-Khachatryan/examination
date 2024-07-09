function selectionSort(array: Array<number>) {
   const length = array.length;
   for (let i = 0; i < length; i++) {
    let minIndex = i;
     for (let j = i+1; j < length; j++) {
        if (array[j] < array[minIndex]) {
            minIndex = j;
        }
     }
     console.log('minIndex', minIndex)
     console.log('i', i)

      if (minIndex !== i) {
        console.log('array.i', array[i]);
        console.log('array[minIndex]', array[minIndex]);
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
      }
   }
   return array
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr))


// In this approach, the code implements selection sort by iterating through the array, 
// finding the smallest element, and swapping it with the current element. 
// Finally, it returns the sorted array.
// Selection - O(n^2) - selects the smallest (or biggest) element from the unsorted portion of the array and swaps it with the first (or last) unsorted element.
// https://www.geeksforgeeks.org/sorting-algorithms-in-javascript/