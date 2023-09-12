function generateRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    colorText = document.getElementById('colorText');
    // colorText.style.color = "#" + randColor.toUpperCase();
    colorText.innerHTML = "Background Color : " + "#" + randColor.toUpperCase();
    document.body.style.backgroundColor = "#" + randColor.toUpperCase();
}