window.onload = () => {
    const slider = document.querySelector('.explore__slider');
    const range = document.querySelector('.slider__range-js');

    range.addEventListener('input', () => {
        console.log(`New value: ${range.value}%`);
        slider.style.setProperty('--value', range.value + '%');
    });
}
