// function that generates the html markdown
generateMarkdown = (data) => {
 const { name, id, email, role } = data;
 return `
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Dash</title>
  <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
  
</body>
</html>
 
 `;
}

module.exports = generateMarkdown;