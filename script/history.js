document.addEventListener("DOMContentLoaded", () => {
    const historyList = document.getElementById("history-list");
    const buttons = document.querySelectorAll(".click-button");
    const clearButton = document.getElementById("clear-history");
    
    const messages = [
        "You have completed the task Fix Mobile Button Issue ",
        "You have completed the task Add Dark Mode",
        "You have completed the task Optimize Home page",
        "You have completed the task Add new emoji 🤲",
        "You have completed the task Integrate OpenAI API",
        "You have completed the task Improve Job searching "
    ];
    
    let completedTasks = 0;
    
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert("Broad update successfully");
            const timestamp = new Date().toLocaleTimeString();
            const message = `${messages[index % messages.length]} - ${timestamp}`;
            const listItem = document.createElement("li");
            listItem.textContent = message;
            historyList.appendChild(listItem);
            historyList.scrollTop = historyList.scrollHeight;
            button.disabled = true;
            button.classList.add("bg-gray-400");
            
            completedTasks++;
            if (completedTasks === buttons.length) {
                alert("Congrats!!! You have completed all the current tasks");
            }
        });
    });

    clearButton.addEventListener("click", () => {
        historyList.innerHTML = "";
        completedTasks = 0;
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove("bg-gray-400");
        });
    });
});
