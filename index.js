const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const generateShapes = require('./lib/generateShapes.js');


const questions = [
    {
        type: 'input',
        message: 'Enter your desired text(3 characters or less).',
        name: 'text',
        validate: (value) => { 
            if (value <= 3) {
                return true;
            } else { 
                return 'Enter no more then 3 characters!';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter your desired text color(color keyword or hexadecimal number).',
        name: 'textColor',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a color to continue!';
            }
        }
    },
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'square'],
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Select a shape to continue!';
            }
        },
    }, 
    {
        type: 'input',
        message: 'Enter your desired shape color(color keyword or hexadecimal number).',
        name: 'shapeColor',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a color to continue!';
            }
        }
    } 
];

const filePath = "./logo.svg";


function writeToFile(fileName, data) {
    fs.writeFile(filePath, data, (err)=>{
        if (err) {
            console.log(err)
        }
        console.log('Generated logo.svg!');
    })
}
