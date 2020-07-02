/* -----  how to read and print from command line --------*/
    /*const profileDataArgs = process.argv.slice(2, process.argv.length);
    console.log(profileDataArgs);
    const printProfileData = (profileDataArr) => {
        profileDataArr.forEach(profileItem => console.log(profileItem));
    };
    printProfileData(profileDataArgs);*/

/* -----  how to generate webpage using 'fs' --------*/
    // const fs = require('fs');
    // const generatePage = require('./src/page-template.js');
    // const profileDataArgs = process.argv.slice(2, process.argv.length); // variable that holds the user command-line arguments
    // const [name, github] = profileDataArgs;

    // fs.writeFile('index.html', generatePage(name, github), err => {
    //     if (err) throw err;
    
    //     console.log('Portfolio complete! Check out index.html to see the output!');
    // });

const inquirer =require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));