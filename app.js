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

/* ----------- how to use inquirer  ----------------- */
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(answers => console.log(answers));

const inquirer = require('inquirer');
/* ---- Profile questions --------*/
const promptUser = () => {
return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
]);
};
/* ------ project questions --------*/
const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
});
/* promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers)); */