import {bubbleSort, insertionSort, selectionSort} from "./utils/SortUtils";

const App = () => {

    const array = [];

    for (let i = 0; i < 30; i++) {
        array.push(i);

        array.sort(() => Math.random() -0.5)
    }

    const arrayToString = (array) => {
        let out = '[ ';

        for (let i = 0; i < array.length - 1; i++) {
            out += array[i] + ', ';
        }

        return out + array[array.length -1] + ' ]';
    }

    const getResult = (array, callBack) => {
        const startTime = Date.now();

        const sortedArray = callBack(array);
        const resultString = arrayToString(sortedArray);

        const endTime = Date.now() - startTime;

        return resultString + '\t\t\t\t Execution time: ' + endTime + 'ms.';
    }

    return (
        <div>
            <p>Вхідний масив: {arrayToString(array)}</p>
            <p>Відсортований масив [BubbleSort]: {getResult(array, bubbleSort)}</p>
            <p>Відсортований масив [SelectionSort]: {getResult(array, selectionSort)}</p>
            <p>Відсортований масив [InsertionSort]: {getResult(array, insertionSort)}</p>
        </div>
    )
}

export default App;