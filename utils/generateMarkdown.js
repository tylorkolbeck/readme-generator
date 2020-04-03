// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  let markdownString = `
# ${data.title}

`

  return [data.title, markdownString]
}

module.exports = generateMarkdown
