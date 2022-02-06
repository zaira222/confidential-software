
function generateHTML(data) {


  
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Confidential Software</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <h1>My Team</h1>
    <div class="card" style="width: 20rem;">
    <div class="card-body">
        <h2 class="card-title"></h2>
        <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> </li>
        <li class="list-group-item"></li>
        <li class="list-group-item">   </li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">  </a>
        <a href="#" class="card-link">  </a>
    </div>
    </div>
          </body>
      </html>
    `;
};

module.exports = generateHTML;