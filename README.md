# Query Text Server App

A server-side application that prints out query text parameters, deployed on Netlify.

## Features

- **Serverless Function**: Built with Netlify Functions
- **Query Parameter Handling**: Extracts and displays text from URL query parameters
- **Server-Side Logging**: Logs query text to server console
- **Interactive UI**: Includes a web interface to test the functionality
- **Security**: HTML escaping to prevent XSS attacks

## Project Structure

```
.
├── netlify.toml                    # Netlify configuration
├── package.json                    # Node.js dependencies
├── public/
│   └── index.html                  # Landing page with interactive form
└── netlify/
    └── functions/
        └── query-text.js          # Serverless function handler
```

## How It Works

The application consists of:

1. **Landing Page** (`public/index.html`): A user-friendly interface where you can enter text and submit it to the serverless function
2. **Serverless Function** (`netlify/functions/query-text.js`): Processes HTTP requests, extracts query parameters, logs them server-side, and returns an HTML response

## Usage

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:8888`

### Testing the Function

You can test the serverless function in several ways:

1. **Via the Web Interface**: 
   - Navigate to the homepage
   - Enter text in the input field
   - Click "Submit Query"

2. **Direct URL Access**:
   ```
   http://localhost:8888/.netlify/functions/query-text?text=Hello%20World
   ```

3. **Multiple Parameters**:
   ```
   http://localhost:8888/.netlify/functions/query-text?text=Test&param1=value1&param2=value2
   ```

### Deployment to Netlify

1. **Via Netlify CLI**:
   ```bash
   npm run deploy
   ```

2. **Via Git Integration**:
   - Connect your repository to Netlify
   - Netlify will automatically deploy on every push to the main branch

3. **Manual Deployment**:
   - Drag and drop the project folder to Netlify's web interface

## API Reference

### Endpoint

`GET /.netlify/functions/query-text`

### Query Parameters

| Parameter | Type   | Required | Description                           |
|-----------|--------|----------|---------------------------------------|
| text      | string | No       | The text to display (default: "No query text provided") |
| *         | string | No       | Any additional parameters will also be displayed |

### Response

Returns an HTML page displaying:
- The value of the `text` parameter
- All query parameters in a formatted list
- Usage instructions

### Example Response

**Request**: `/.netlify/functions/query-text?text=Hello&author=John`

**Response**: HTML page showing:
- Query Text: "Hello"
- All Query Parameters:
  - text: Hello
  - author: John

## Server-Side Logging

The function logs all received query text to the server console:

```javascript
console.log('Query text received:', queryText);
```

You can view these logs in:
- **Local Development**: Terminal where `npm run dev` is running
- **Netlify Deployment**: Netlify Functions logs in the dashboard

## Security

The application includes HTML escaping to prevent XSS (Cross-Site Scripting) attacks. All user input is sanitized before being displayed.

## Technologies Used

- **Netlify Functions**: Serverless function hosting
- **Node.js**: Runtime environment
- **HTML/CSS/JavaScript**: Frontend interface

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!
