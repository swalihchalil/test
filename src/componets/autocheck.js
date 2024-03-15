import React from 'react'
const { ESLint } = require("eslint");

export default async function  autocheck(code) {
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
        const results = await eslint.lintText(code, { filePath: 'example.jsx' });
        return results;
      } catch (error) {
        console.error('Error occurred while linting:', error);
        return null;
      }
    
  return (
    <div>
      <></>
    </div>
  )
}
