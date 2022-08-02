const Employee = require('../lib/Employee');

// function that generates the html markdown
generateMarkdown = (employeeArray) => {
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
${employeeArray.map(employee => {
    const { name, email, role, id } = employee;
    return `
    <div class="employee-card">
      <div class="card-header">
        <div class="card-header-content">
          <h1 class="employee-name">${employee.getName()}</h1>
          ${role === 'Manager' ? `<h3 class="employee-role"><ion-icon name="cafe" class="coffee"></ion-icon>${employee.getRole()}</h3>` : ''}
          ${role === 'Engineer' ? `<h3 class="employee-role"><ion-icon name="glasses" class="glasses"></ion-icon>${employee.getRole()}</h3>` : ''}
          ${role === 'Intern' ? `<h3 class="employee-role"><ion-icon name="school" class="school"></ion-icon>${employee.getRole()}</h3>` : ''}
        </div>
      </div>
      <div class="employee-data">
        <ul class="data-list">
          <li class="list-item"><strong>ID:</strong> ${employee.getId()}</li>
          <li class="list-item"><strong>Email:</strong><a href = "mailto: ${employee.getEmail()}"> ${employee.getEmail()}</a></li>
          ${role === 'Manager' ? `<li class="list-item"><strong>Office Number:</strong> ${employee.officeNumber}</li>` : ''}
          ${role === 'Engineer' ? `<li class="list-item"><strong>Github:</strong> <a href ="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>` : ''}
          ${role === 'Intern' ? `<li class="list-item"><strong>School:</strong> ${employee.getSchool()}</li>` : ''}
        </ul>
      </div>
    </div>
    `;
  }).join('')
    }
  </div>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>
 `;
  generateMarkdown(data);
}

module.exports = generateMarkdown;