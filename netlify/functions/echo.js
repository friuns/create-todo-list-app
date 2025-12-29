exports.handler = async (event, context) => {
  const queryParams = event.queryStringParameters || {};
  const text = queryParams.text || 'No text provided';
  console.log('Query text:', text);
  return {
    statusCode: 200,
    body: JSON.stringify({ queryText: text }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};