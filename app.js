const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);
    const spotifyPlayer = document.querySelector('#spotifyPlayer');
    const result = document.querySelector('#result');
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / (height * 0.0001 * height)).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmi} </span>`
        if (bmi > 25) {
            spotifyPlayer.setAttribute('style', 'display:block');
        }
    }
})