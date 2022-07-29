const Employee = require('../lib/Employee');

// function used to toggle github or school choice selected by manager.
choiceData = (choice) => {
  let selectedChoice = '';
  if ('Intern') {
    return selectedChoice.data;
  } else if ('Engineer') {
    return selectedChoice.data;
  } else {
    selectedChoice = `Office number: ${data}`;
  }
  return selectedChoice;
}

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
  <link rel="stylesheet" href="../dist/style.css">
</head>
<body>

  <header class="sticky-header">
    <h1 class="header-title">TEAM<span class="dash">&#xbb;</span><span class="dash-word">DASH</span></h1>
    <h3 class="subhead">Employee Information Dashboard</h3>
  </header>

  <div class="card-container">
    <div class="employee-card">
      <div class="card-header">
        <div class="card-header-content">
          <h1 class="employee-name">${data.name}</h1>
          <h3 class="employee-role">${data.Employee}</h3>
        </div>
      </div>
      
      <div class="employee-data">
        <ul class="data-list">
          <li class="list-item">ID: ${data.id}</li>
          <li class="list-item">Email: <a href = "mailto: ${data.email}">${data.email}</a></li>
          <li class="list-item">${data.Employee}</li>
        </ul>
      </div>
    </div>
  </div>

</body>
</html>
 `;
  generateMarkdown(data);
}

module.exports = generateMarkdown;