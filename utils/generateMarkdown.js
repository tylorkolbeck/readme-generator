// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  console.log(data)
  return `
  ## Project Name
  ${data.title} 
  
  ## Owner 
  
  [![License](https://img.shields.io/static/v1?label=License&message=${
    data.license
  }&color=blue)](https://opensource.org/licenses/Apache-2.0)

  ![GitHub Logo](${data.avatar}) 

  Name: ${data.username}

  Email: ${data.email ? data.email : "N/A"}

  ## Description
  ${data.description}
  
  ## Getting Started

  To start the app.

  \`\`\`
  ${data.usage}
  \`\`\`
  
  To install dependencies.
  
  \`\`\`
  ${data.install}
  \`\`\`
  
  ## Running the tests
  
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Deployment
  
  ${data.deployment}

  ## Contributers
  ${data.contributers
    .split(";")
    .map((cont) => {
      return `- ${cont}\n`
    })
    .join("")
    .trim()}
  
  ## License
  
  This project is licensed under the ${data.license} License
  
  ## Acknowledgments
  
  * Hat tip to anyone whose code was used
  * Inspiration
  * etc
`
}

module.exports = generateMarkdown
