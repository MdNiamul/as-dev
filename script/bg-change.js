function changeBackground() {
    const colors = ["#f9a8d4", "#facc15", "#a3e635", "#67e8f9", "#c084fc"];  
    const randomColor = colors[Math.floor(Math.random() * colors.length)];  
   
    document.querySelector("body").style.backgroundColor = randomColor;
    // document.querySelector("body").classList.remove("bg-gray-200");
}

