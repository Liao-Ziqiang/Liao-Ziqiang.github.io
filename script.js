document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('sendButton');
  const messageInput = document.getElementById('messageInput');
  const responseContainer = document.getElementById('responseContainer');

  sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
      sendMessageToOpenAI(message);
    } else {
      alert('Please enter a message.');
    }
  });
});

async function sendMessageToOpenAI(userMessage) {
  const apiKey = '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'; // Replace with your actual API key

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": ""
          },
          {
            "role": "user",
            "content": userMessage
          }
        ]
      })
    });

    if (response.ok) {
      const data = await response.json();
      displayResponse(data.choices[0].message.content); // Display the response from the API
    } else {
      throw new Error('Failed to fetch from OpenAI API');
    }
  } catch (error) {
    console.error('Error:', error);
    displayResponse('Error: Could not get a response.');
  }
}

function displayResponse(message) {
  const responseContainer = document.getElementById('responseContainer');
  responseContainer.textContent = message; // Update the text of the response container
}