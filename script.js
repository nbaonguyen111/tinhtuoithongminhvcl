function calculateAge() {
    var tuoi = document.getElementById("tuoi").value;
    var resultElement = document.getElementById("result");

    if (tuoi !== "") {
        var age = parseInt(tuoi);
        if (!isNaN(age) && age > 0) {
            resultElement.innerText = "Tuổi của bạn là: " + age + " tuổi.";
        } else {
            resultElement.innerText = "Vui lòng nhập số tuổi hợp lệ.";
        }
    } else {
        resultElement.innerText = "Vui lòng nhập tuổi của bạn.";
    }
}
function createSnowflakes() {
    const snowfall = document.querySelector('.snowfall');

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 2 + 1 + 's';
        snowfall.appendChild(snowflake);
    }
}

createSnowflakes();
