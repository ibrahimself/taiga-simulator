// embed.js
(function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://thankful-glacier-034264110.4.azurestaticapps.net/';
  
  // Set styles for the iframe
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '0';
  iframe.style.right = '0';
  iframe.style.zIndex = '10000'; // Ensure it's above other content
  
  // Append the iframe to the body
  document.body.appendChild(iframe);
  
  // Optional: Add logic to handle the toggle
})();

