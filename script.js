function calculateAge() {
    var ageInput = document.getElementById("ageInput").value;
    var resultElement = document.getElementById("result");

    if (ageInput !== "") {
        var age = parseInt(ageInput);
        if (!isNaN(age) && age > 0) {
            resultElement.innerText = "Tuổi của bạn là: " + age + " tuổi.";
        } else {
            resultElement.innerText = "Vui lòng nhập một giá trị tuổi hợp lệ.";
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