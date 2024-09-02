const forms = document.querySelector('form');
// If we write this here out of form it is going to be wrong
// const weight=parent(document.querySelector('#weight').value);

forms.addEventListener('submit', function (e) {
    e.preventDefault();// This is use to hold the value in display.

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give Me Valid Height ${height}`

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please Enter A  Valid Weight ${weight}`

    } else {
        const bmi = (weight / ((height * height) / 10000).toFixed(2));
        //show the result 
        if (bmi < 18.6) {
            return results.innerHTML = `<span>${bmi}</span>` + "\n Under Weight ";
        } else if (bmi === 18.6 && 24.6) {
            return results.innerHTML = `<span>${bmi}</span>` + "\n Normal Range ";
        } else if (bmi > 24.6) {
            return results.innerHTML = `<span>${bmi}</span>` + "\n Over Weight ";
        }
    }

});