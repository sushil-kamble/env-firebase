# Env Firebase

Convert a Firebase SDK configuration snippet into environment variable entries for React, Vue, or plain setups. Paste your config, choose a framework, and copy the generated `.env` variables or initializer code.

## Getting Started

1. Open `index.html` in your browser.
2. Paste your Firebase config into the first textarea.
3. Select your target framework (React, Vue, or normal).
4. Copy the generated output or initializer code.

## Example Firebase Config

```js
const firebaseConfig = {
  apiKey: "AIzaSyA-EXAMPLEKEY123",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};
```

Use the above snippet to experiment with the tool. Replace the placeholder values with your real Firebase project settings when you're ready.

## Notes

- The project uses Tailwind CSS via CDN and supports light/dark themes.
- No build step or package manager is required; everything runs in the browser.
