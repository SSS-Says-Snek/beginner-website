let num_clicks = 0;


const click_measurer = document.getElementById("click-measurer");
click_measurer.addEventListener('click', () => {
    num_clicks++;

    if (num_clicks === 1) {
        click_measurer.textContent = `You clicked me ${num_clicks} time!`;
    } else {
        click_measurer.textContent = `You clicked me ${num_clicks} times!`;
    }
});
