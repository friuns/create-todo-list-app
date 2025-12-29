exports.handler = async (event, context) => {
  // Extract query parameters from the event
  const queryParams = event.queryStringParameters || {};
  
  // Get the 'text' parameter or use a default message
  const queryText = queryParams.text || 'No query text provided';
  
  // Log the query text to the server console
  console.log('Query text received:', queryText);
  
  // Create HTML response
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Query Text Display</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 10px;
        }
        .query-text {
            background-color: #e8f5e9;
            padding: 20px;
            border-radius: 4px;
            margin: 20px 0;
            word-wrap: break-word;
            font-size: 18px;
            color: #2e7d32;
        }
        .info {
            color: #666;
            font-size: 14px;
            margin-top: 20px;
        }
        .params-list {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
        }
        .param-item {
            padding: 5px 0;
            border-bottom: 1px solid #e0e0e0;
        }
        .param-item:last-child {
            border-bottom: none;
        }
        .param-key {
            font-weight: bold;
            color: #1976d2;
        }
        .param-value {
            color: #424242;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Server-Side Query Text Display</h1>
        
        <h2>Query Text:</h2>
        <div class="query-text">${escapeHtml(queryText)}</div>
        
        ${Object.keys(queryParams).length > 0 ? `
        <h2>All Query Parameters:</h2>
        <div class="params-list">
            ${Object.entries(queryParams).map(([key, value]) => `
                <div class="param-item">
                    <span class="param-key">${escapeHtml(key)}:</span> 
                    <span class="param-value">${escapeHtml(value)}</span>
                </div>
            `).join('')}
        </div>
        ` : ''}
        
        <div class="info">
            <p><strong>How to use:</strong> Add <code>?text=your_text_here</code> to the URL to display custom text.</p>
            <p>Example: <code>/.netlify/functions/query-text?text=Hello%20World</code></p>
        </div>
    </div>
</body>
</html>
  `;
  
  // Return the response
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
};

// Helper function to escape HTML to prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.toString().replace(/[&<>"']/g, (m) => map[m]);
}
