$(document).ready(function () {
  // Document Elements
  const currentDay = $("#currentDay");
  const timeblocks = $("#timeblocks-wrapper");

  // Allow the user to enter and event when they click a timeblock
  const updateScheduler = () => {
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
      const timeBlock = $("<div>").addClass("time-block row");

      // Creating a time of day using dayjs
      const timeOfDay = $("<div>")
        .addClass("col-md-1 hour")
        .text(dayjs().set("hour", hour).format("h A"));

      // Creating a textarea
      const textarea = $("<textarea>").addClass("col-md-10 description");

      // Creating a button
      const saveBtn = $("<button>")
        .addClass("col-md-1 saveBtn")
        .html('<i class="fas fa-save"></i>');

      // Appending all columns to the time block
      timeBlock.append(timeOfDay).append(textarea).append(saveBtn);

      // Color-code time blocks based on current time
      const currentTime = dayjs().hour();

      // Checking current time against the time block time
      if (currentTime > hour) {
        timeBlock.addClass("past");
      } else if (currentTime === hour) {
        timeBlock.addClass("present");
      } else {
        timeBlock.addClass("future");
      }

      // Persist events between refreshes of a page
      // Retrieve and set task from local storage
      const storedTask = JSON.parse(localStorage.getItem(`task_${hour}`));
      if (storedTask) {
        textarea.val(storedTask);
      }

      timeblocks.append(timeBlock);
    }
  };

  updateScheduler();

  // Save the event in local sotrage when save button is clicked
  timeblocks.on("click", ".saveBtn", function () {
    // Accessing textarea value
    const textAreaVal = $(this).siblings("textarea").val();

    // Accessing hour of current row for specificity
    const hour = parseInt($(this).siblings(".hour").text());

    // Setting task to Local Storage
    localStorage.setItem(`task_${hour}`, JSON.stringify(textAreaVal));
  })

});
