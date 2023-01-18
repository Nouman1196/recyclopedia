export const SeachPageValidation = ({ name, postCode, multiField }) => {
    console.log(multiField);
    if (name.length < 2 && multiField) {
        return {
            valid: false,
            errors: name.length < 2 ? "1" : null
        }
    }
    else if (postCode === '') {
        return {
            valid: false,
            errors: postCode === '' ? "2" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}
export const AddItemValidation = ({ name, barCode, composition }) => {
    if (name === '') {
        return {
            valid: false,
            errors: name === '' ? '1' : null
        }
    }
   else if (name.length < 2 ) {
        return {
            valid: false,
            errors: name.length < 2 ? "2" : null
        }
    }
    else if (barCode === '') {
        return {
            valid: false,
            errors: barCode === '' ? "3" : null
        }
    }
    else if (composition === '') {
        return {
            valid: false,
            errors: composition === '' ? "4" : null
        }
    }
    else {
        return { valid: true, errors: null }
    }
}

