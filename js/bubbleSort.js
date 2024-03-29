// SOLUTION 1 : Non recursive
function bubbleSort(array) {
    let isNotSorted = true;
    while (isNotSorted){
        isNotSorted = false;

        for (let i = 0; i < array.length; i++) {
            let tmp;

            if (array[i] > array[i+1]) {
                tmp = array[i+1];
                array[i+1] = array[i];
                array[i] = tmp;

                isNotSorted = true;
            }
        }
    }

    return array;
}

// SOLUTION 2 : Using recursive
function bubbleSortRecursive(array) {
    let length  = array.length;
    let isNotSorted = true;
    let tmp;

    for (let i = 0; i < length; i++) {
        if (array[i] > array[i+1]) {
            tmp = array[i];
            array[i] = array[i+1];
            array[i+1] = tmp;

            isNotSorted = false;
        }
    }

    if (isNotSorted) {
        return array;
    } else {
        return bubbleSort(array);
    }
}

function bubbleSort2(array) {
    let isNotSorted = true;
    while (isNotSorted){
        isNotSorted = false;

        for (let i = 0; i < array.length; i++) {
            let tmp;

            if (array[i] > array[i+1]) {
                tmp = array[i+1];
                array[i+1] = array[i];
                array[i] = tmp;

                isNotSorted = true;
            }
        }
    }

    return array;
}

function bubbleSortMultidimention(array) {
    let isNotSorted = true;
    while (isNotSorted){
        isNotSorted = false;

        for (let i = 0; i < array.length - 1; i++) {
            let tmp;

            if ((array[i][1] > array[i+1][1]) || (array[i][1] === array[i+1][1] && array[i][2] > array[i+1][2])) {
                tmp = array[i+1];
                array[i+1] = array[i];
                array[i] = tmp;
                
                isNotSorted = true;
            }
        }
    }
    return array;
}

console.log(bubbleSortMultidimention(
                        [
                            [6,8,2],
                            [6,8,1],
                            [6,7,1]
                        ])
                    );

// console.log(bubbleSort([6,8,1,4,3,2,1]));
// console.log(bubbleSortRecursive([6,8,1,4,3,2,1]));