const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height`;
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight`;
    }else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2)
        let bmiStatus;
        if(bmi < 18.6){
            bmiStatus= '<span style="background-color :red;">Under weight </span>'
        }else if(bmi >= 18.6 && bmi<= 24.9 ){
            bmiStatus= '<span style="background-color :green;">Normal weight </span>'
        }else{
            bmiStatus= '<span style="background-color :yellow;">Over weight </span>'
        }
        results.innerHTML = `<span>${bmi} ${bmiStatus}</span>`;
    }

});