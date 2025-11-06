// Site uptime duration calculator
(function() {
  // Set your site's start date here (when you first launched it)
  const startDate = new Date('2025-11-01 00:00:00');

  function updateDuration() {
    const now = new Date();
    const diff = now - startDate;

    // Calculate time components
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the display
    const timeDateElement = document.getElementById('timeDate');
    const timesElement = document.getElementById('times');

    if (timeDateElement) {
      timeDateElement.innerHTML = 'Site running: ';
    }

    if (timesElement) {
      timesElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
  }

  // Update immediately and then every second
  updateDuration();
  setInterval(updateDuration, 1000);
})();
