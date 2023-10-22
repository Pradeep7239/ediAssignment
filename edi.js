let isLocked = false;

function copyCode() {
  const codeTextarea = document.getElementById('codeTextarea');
  codeTextarea.select();
  document.execCommand('copy');
}

function saveCode() {
  const codeTextarea = document.getElementById('codeTextarea');
  // Implement your save logic here
  alert('Code saved!');
}

function toggleLock() {
  const codeTextarea = document.getElementById('codeTextarea');
  isLocked = !isLocked;
  codeTextarea.readOnly = isLocked;
}
