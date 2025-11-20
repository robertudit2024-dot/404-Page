function updateTime() {
  const now = new Date();

  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    hour12: false
  };
  
  const formatted = now.toLocaleString('en-US', options);
  document.getElementById('time').textContent = formatted;
}

setInterval(updateTime, 1000);
updateTime();



