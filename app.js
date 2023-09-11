const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const currentDayOfWeek = daysOfWeek[today.getDay()];


        const dayElement = document.getElementById("day");
        dayElement.textContent = `${currentDayOfWeek}`;



        function updateUTCTime() {
                const currentTimeMilliseconds = Date.now();
                const timeElement = document.getElementById("time");
                timeElement.textContent = `Current UTC Time in Milliseconds: ${currentTimeMilliseconds}`;
            }

            updateUTCTime(); 
            setInterval(updateUTCTime, 1000); 