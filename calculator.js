const output1 = document.querySelector("#main-output");
const output2 = document.querySelector("#history-output");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.currentTarget.id === "equals") {
            let expression = output1.textContent;
            output1.textContent = eval(expression);
            output2.textContent = eval(expression);
        } else if (e.currentTarget.id === "clear") {
            output1.textContent = "";
        } else if (e.currentTarget.id === "clearAll") {
            output1.textContent = "";
            output2.textContent = "";
        } else if (e.currentTarget.id === "baskspace") {
            let expression = output1.textContent;
            output1.textContent = expression.slice(0, expression.length - 1);
        } else {
            output1.textContent += e.currentTarget.value;
        }
    });
});
