let increaseCount = 24;
let decreaseCount = 6;
function updateCounters() {
    increaseCount++;
    decreaseCount--;
    document.getElementById("increaseCounter").textContent = increaseCount;
    document.getElementById("decreaseCounter").textContent = decreaseCount;
}