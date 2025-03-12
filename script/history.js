document.addEventListener("DOMContentLoaded", () => {
    const historyList = document.getElementById("history-list");
    const buttons = document.querySelectorAll(".click-button");
    const clearButton = document.getElementById("clear-history");
    
    const messages = [
        "Fix Mobile Button Issue ",
        "Add Dark Mode",
        "Optimize  Home page ",
        "Add new emoji 🤲",
        "Integrate OpenAI API","Improve Job searching "
    ];
    
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert("Broad uptade successfully");
            const timestamp = new Date().toLocaleTimeString();
            const message = `${messages[index % messages.length]} - ${timestamp}`;
            const listItem = document.createElement("li");
            listItem.textContent = message;
            historyList.appendChild(listItem);
            historyList.scrollTop = historyList.scrollHeight;
            button.disabled = true;
            button.classList.add("bg-gray-400");
        });
    });

   
    clearButton.addEventListener("click", () => {
        historyList.innerHTML = "";
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove("bg-gray-400");
        });
    });
});