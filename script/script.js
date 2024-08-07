// set input genders
const inputGender = document.getElementById('inputGender');
const inputHeight = document.getElementById('inputHeight');
const inputWeight = document.getElementById('inputWeight');

const maleButton = document.getElementById('maleButton');
maleButton.addEventListener('click', () => {
    inputGender.value = 'Male';
});

const femaleButton = document.getElementById('femaleButton');
femaleButton.addEventListener('click', () => {
    inputGender.value = 'Female';
});

// focus and blur in height and weight input
inputHeight.addEventListener('focus', () => {
    inputHeight.placeholder = '';
});

inputHeight.addEventListener('blur', () => {
    inputHeight.placeholder = 'input height (cm)';
});

inputWeight.addEventListener('focus', () => {
    inputWeight.placeholder = '';
});

inputWeight.addEventListener('blur', () => {
    inputWeight.placeholder = 'input weight (kg)';
});
const invalidMessageGender = document.getElementById('invalidGender');
const invalidMessageWeight = document.getElementById('invalidWeight');
const invalidMessageHeight = document.getElementById('invalidHeight');
// validate function 
function validate(gender, height, weight) {

    let countError = 0;

    // gender
    if (gender === '') {
        invalidMessageGender.style.display = 'inline';
        invalidMessageGender.innerText = 'Click the icon to choose the gender';
        countError++;
    } else {
        invalidMessageGender.style.display = 'none';
    }

    // height
    if (height === '') {
        invalidMessageHeight.style.display = 'inline';
        invalidMessageHeight.innerText = "You haven't input height";
        countError++;
    } else if (height.toString().length < 2) {
        invalidMessageHeight.style.display = 'inline';
        invalidMessageHeight.innerText = 'Input at least 2 digits number';
        countError++;
    } else if (height.toString().charAt(0) === '0') {
        invalidMessageHeight.style.display = 'inline';
        invalidMessageHeight.innerText = "The first digit should not be Zero (0)";
        countError++;
    } else {
        invalidMessageHeight.style.display = 'none';
    }

    // weight
    if (weight === '') {
        invalidMessageWeight.style.display = 'inline';
        invalidMessageWeight.innerText = "You haven't input weight";
        countError++;
    } else if (weight.toString().length < 2) {
        invalidMessageWeight.style.display = 'inline';
        invalidMessageWeight.innerText = 'Input at least 2 digits number';
        countError++;
    } else if (weight.toString().charAt(0) === '0') {
        invalidMessageWeight.style.display = 'inline';
        invalidMessageWeight.innerText = "The first digit should not be Zero (0)";
        countError++;
    } else {
        invalidMessageWeight.style.display = 'none';
    }

    return countError;
}

// calculate result content  
const submitButton = document.getElementById('submitButton');
const inputContainer = document.getElementById('inputContainer');
const resultContainer = document.getElementById('resultContainer');
submitButton.addEventListener('click', () => {
    let genderValue = inputGender.value;
    let heightValue = inputHeight.value;
    let weightValue = inputWeight.value;

    // validation check
    let errorOccurs = validate(genderValue, heightValue, weightValue);

    if (errorOccurs === 0) {

        // container switch
        inputContainer.style.display = 'none';
        resultContainer.style.display = 'flex';

        let bmi = weightValue / ((Math.pow((heightValue / 100), 2)));
        let bmiStatus;

        // calculate bmi, set bmistatus, and indicator pointer

        const indicator = document.getElementById('indicator');
        if (bmi < 18.5) {
            bmiStatus = 'Underweight';
            indicator.style.right = '190px';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiStatus = 'Normal';
            indicator.style.right = '95px';
        } else if (bmi >= 25 && bmi < 30) {
            bmiStatus = 'Overweight';
        } else if (bmi >= 30 && bmi < 35) {
            bmiStatus = 'Obese';
            indicator.style.left = '95px';
        } else {
            bmiStatus = 'Extremely Obese';
            indicator.style.left = '190px';
        }


        // set image gender result
        const genderChoosen = document.getElementById("bmiImage");
        genderChoosen.src = genderValue === 'Male' ? 'aset/male.png' : 'aset/female.png';

        // set gender span
        const spanGender = document.getElementById('genderSpan');
        spanGender.innerText = genderValue;

        // set BMI status
        const bmiCategory = document.getElementById('bmiStatus');
        bmiCategory.innerText = bmiStatus;

        // set height and weight
        const heightResult = document.getElementById('heightSpan');
        heightResult.innerText = heightValue;

        const weightResult = document.getElementById('weightSpan');
        weightResult.innerText = weightValue;

        // set BMI number 
        const bmiNumberResult = document.getElementById('bmiNumber');
        bmiNumberResult.innerText = bmi.toFixed(2);

        // set BMI indicator
        const bmiIndicator = document.getElementById('content');
        bmiIndicator.innerText = bmi.toFixed(2);
    }
});


// reset input fields 
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    inputGender.value = '';
    inputHeight.value = '';
    inputWeight.value = '';
    invalidMessageGender.style.display = 'none';
    invalidMessageHeight.style.display = 'none';
    invalidMessageWeight.style.display = 'none';
});

// input ulang data
const reInputButton = document.getElementById('reInput');
reInputButton.addEventListener('click', () => {
    inputContainer.style.display = 'flex';
    resultContainer.style.display = 'none';
    inputGender.value = '';
    inputHeight.value = '';
    inputWeight.value = '';
});
