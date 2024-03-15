// server.js

const express = require('express');
const { ESLint } = require('eslint');

const app = express();
const port = 3000;

app.use(express.json());
const demi  = `
export function Index({ fileInfo }) {
    return (
      <div>
        {/* page content */}
      </div>
    );
  }
  
  export default Index;
  
  export async function getServerSideProps(context) {
    const fs = require('fs');
    let fileInfo = fs.readFileSync('path/to/sample.txt');
  
    return {
      props: {
        fileInfo,
      },
    };
  }
`
const eslint = new ESLint({
    overrideConfig: {
      extends: ['plugin:react/recommended'],
      rules: {
        quotes: ['error', 'double'], // Enforce double quotes for strings
        // Add any other custom rules here if needed
      }
    }
  });
const results =  eslint.lintText(demi, { filePath: 'example.jsx' });
console.log("result",results);

async function lintReactCode(code) {
  const eslint = new ESLint({
    overrideConfig: {
      extends: ['plugin:react/recommended'],
      rules: {
        quotes: ['error', 'double'], // Enforce double quotes for strings
        // Add any other custom rules here if needed
      }
    }
  });

  try {
    const results = await eslint.lintText(demi, { filePath: 'example.jsx' });
    return results;
  } catch (error) {
    console.error('Error occurred while linting:', error);
    return null;
  }
}

app.post('/lint', async (req, res) => {
  const { code } = req.body;
  console.log("*******" , code);
  
  if (!code) {
    res.status(400).json({ error: 'Please provide code to lint' });
    return;
  }

  const lintingResults = await lintReactCode(code);
  res.json(lintingResults);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
