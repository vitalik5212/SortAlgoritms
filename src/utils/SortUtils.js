const cloneArray = (array) => {
    let out =[];

    for (let i = 0; i < array.length; i++) {
        out.push(array[i]);
    }

    return out;
}

export const bubbleSort = (input) => {

    const array = cloneArray(input);

    for (let i = 0; i < array.length; i++) {

        let sorted = true;

        for (let i = 0; i < array.length - 1; i++) {

            if(array[i] > array[i + 1]) {
                sorted = false

                const tempValue = array[i];

                array[i] = array[i + 1];
                array[i + 1] = tempValue;
            }
        }

        if(sorted) break;
    }

    return array;
}

export const selectionSort = (input) => {

    const array = cloneArray(input);

    for (let i = 0; i < array.length - 1; i++) {

        let minElementIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if(array[minElementIndex] > array[j]) {
                minElementIndex = j;
            }
        }

        const tempValue = array[i];
        array[i] = array[minElementIndex];
        array[minElementIndex] = tempValue;
    }

    return array;
}

export const insertionSort = (input) => {

    const array = cloneArray(input);

    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i;

        while (j > 0 && array[j -1] > current) {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = current;
    }

    return array;
}