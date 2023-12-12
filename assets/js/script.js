$(document).ready(function () {
  // Document Elements
  const currentDay = $("#currentDay");

  // Document Variables

  // Function to update current Time
  const updateClock = () => {
    currentDay.text(dayjs());
  };

  // Updating time every second
  setInterval(updateClock, 1000);

  // Initial update on page load
  updateClock();
  
  // Standard business hours timeblocks
  // Color-code time blocks
  // Allow the user to enter and event when they click a timeblock
  // Save the event in local sotrage when save button is clicked
  // Persist events between refreshes
});
