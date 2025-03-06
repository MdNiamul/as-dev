// time section 

function updateDateAndDay() {
    const currentDate = new Date();
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[currentDate.getDay()];
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `${month} ${date}, ${year}`;
    
    
    document.getElementById("day-name").textContent = dayName;
    document.getElementById("date-day").textContent = formattedDate;
  }

 
  updateDateAndDay();
  setInterval(updateDateAndDay, 60000);