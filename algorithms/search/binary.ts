function binarySearch(array: Array<number>, targetValue: number) {
  let left  = 0;
  let right  = array.length - 1;
  let mid

  while(left <= right) {
    mid = Math.floor((left + right) / 2);

    if (array[mid] === targetValue) {
        return mid;
    } else if(array[mid] < targetValue) {
        left = mid + 1;
    } else {
        right = mid - 1
    }
}
  return -1

}

const list1 = [2,3,4,5,6,7,8,9,10];
console.log(binarySearch(list1, 8))

// binary search is much faster. But it only works in sorted data.
// How it works
// Because the array is sorted we pick the middle point of the array. 
// After setting the middle point we will check if the value we are looking for is greater 
// then or less then our midpoint. If The Value is greater then the midpoint that means our 
// value is on the right side of our midpoint so we don't need left (or less then side) so we
//  ditch the left side and look in the right side. We will keep doing that until we find our value.
// O(log n)
//  log(n)
//  log a n - ayn tivn e a -n inch astijan barzracnem

//  big O - qayleri hajordakanutyun else, orinak erb grenk array[5] - sa O(1)