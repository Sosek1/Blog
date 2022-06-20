import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);
    const [inputIsLeft, setInputIsLeft] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const valueHasError = !valueIsValid && inputIsLeft;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputTouchedHandler = () => {
        setInputIsTouched(true);
    }

    const inputLeftHandler = () => {
        setInputIsLeft(true);
    }

    const reset = () => {
        setEnteredValue('');
        setInputIsTouched(false);
        setInputIsLeft(false);
    }

    return {
        value: enteredValue,
        isTouched: inputIsTouched,
        isLeft: inputIsLeft,
        isValid: valueIsValid,
        hasError: valueHasError,
        valueChangeHandler,
        inputTouchedHandler,
        inputLeftHandler,
        reset
    }
}

export default useInput