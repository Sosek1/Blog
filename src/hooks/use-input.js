import {useState} from 'react';
import ArticlesContext from '../store/articles-context';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [inputIsTouched, setInputIsTouched] = useState(false);
    const [inputIsLeft, setInputIsLeft] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const valueHasError = !valueIsValid && inputIsLeft;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const valueClickHandler = (value) => {
        setEnteredValue(value);
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
        valueClickHandler,
        inputTouchedHandler,
        inputLeftHandler,
        reset
    }
}

export default useInput