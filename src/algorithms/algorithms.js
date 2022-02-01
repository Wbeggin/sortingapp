// code for merge sort
// https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial/blob/master/src/sortingAlgorithms/sortingAlgorithms.js
// rest done by me @Wbeggin

export const mergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  const mergeSortHelper = (
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) => {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  const doMerge = (
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }


  export const quickSort = (array) => {
    const animations = []
    quickSorter(array, 0, array.length - 1, animations)
    return animations
  }

  const quickSorter = (arr, low, high, animations)  => {

    if (low < high) {
 
      // pi is partitioning index, arr[p]
      // is now at right place
      let pi = partition(arr, low, high, animations);

      // Separately sort elements before
      // partition and after partition
      quickSorter(arr, low, pi - 1, animations);
      quickSorter(arr, pi + 1, high, animations);
      
  }
  }

  const partition = (arr, low, high, animations)  => {
    
  // pivot
    let pivot = arr[high]
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1)

    for (let j = low; j <= high - 1; j++) {

        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
            // Increment index of
            // smaller element
            i++
            if (arr[i] != 'undefined' && arr[j] != 'undefined') {

              animations.push([i, j])
              animations.push([i, j])

              animations.push([j, arr[i]])

              animations.push([i, j])
              animations.push([i, j])
              animations.push([i, arr[j]])

            }
            swap(arr, i, j)
        }
    }

    if (arr[i] != 'undefined' && arr[high] != 'undefined') {
      animations.push([i+1, high])
      animations.push([i+1, high])
      animations.push([i+1, arr[high]])
      
      animations.push([i+1, high])
      animations.push([i+1, high])
      animations.push([high, arr[i+1]])
    }

    swap(arr, i + 1, high)
    return (i + 1)
}


const swap = (arr, i, j) =>  {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



  export const bubbleSort = (array) => {
    const animations = []
    if (array.length === 1) return array
    bubbleSortHelper(array , animations)
    return animations 
  }
  
  const bubbleSortHelper =  (
  mainArray,
  animations,
) => {

    for (let i = 0; i < mainArray.length; i++) {
        
        for (let j = 0; j < (mainArray.length-i-1); j++) {
            
            if (mainArray[j] > mainArray[j+1]) {
                animations.push([j, j+1])
                animations.push([j, j+1])
                var temp = mainArray[j]
                animations.push([j+1, temp])

                if (typeof mainArray[j+1] != undefined ) {
                    animations.push([j, j+1])
                    animations.push([j, j+1])
                    var temp2 = mainArray[j+1]
                    animations.push([j, temp2])
                }
                mainArray[j] = mainArray[j+1]
                mainArray[j+1] = temp 
               
            }
            /*
            else{
                var temp = mainArray[j]
                animations.push([j, j+1])
                animations.push([j, j+1])
                animations.push([j, temp])
            }
            */
        } 
    }
    return animations
}


