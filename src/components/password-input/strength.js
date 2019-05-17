const hasNumbers = value => {
    return /[0-9]/.test(value);
}

const hasSpecial = value =>{
    return (/[!@#$%^&*)(+=._-]/.test(value));
}

const hasMixed = value => {
    return (/[a-z]/.test(value) &&
           /[A-Z]/.test(value));
}

export const strengthColour = (count) => {

    let colour;
    if(count<3) colour = "red"
    if(count>3) colour = "orange"
    if(count>=5) colour = 'green'

    return colour;

}

export const strengthIndicator = (value) => {
    const matched = [];

    if (value.length > 5) matched.push('greater-than-5')
    if (value.length > 7) matched.push('greater-than-7')
    if(hasNumbers(value)) matched.push('has-numbers')
    if(hasSpecial(value)) matched.push('has-special')
    if(hasMixed(value)) matched.push('has-mixed')

    return matched.length;
}