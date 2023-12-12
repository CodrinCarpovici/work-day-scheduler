$(document).ready(function () {
  // Document Elements
  const currentDay = $("#currentDay");
  const timeblocks = $("#timeblocks-wrapper");

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
  // Using a for loop to generate the standard hours timeblocks
  for (let hour = 9; hour < 18; hour++) {
    // Creating a time block
    const timeBlock = $('<div>').addClass("time-block row");

    // Creating a time of day using dayjs
    const timeOfDay = $('<div>').addClass('col-md-1 hour').text(dayjs().set("hour", hour).format("h A"));

    // Creating a textarea
    const textarea = $('<textarea>').addClass("col-md-10 description");
    
    timeBlock.
        append(timeOfDay).
        append(textarea);

    timeblocks.append(timeBlock);
  }
  // Color-code time blocks
  // Allow the user to enter and event when they click a timeblock
  // Save the event in local sotrage when save button is clicked
  // Persist events between refreshes
});
