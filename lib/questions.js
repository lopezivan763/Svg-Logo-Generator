// * Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter a text for logo(up to 3 characters):',
        name: 'logo_text',
    },
    {
        type: 'input',
        message: 'Select a text color:',
        name: 'text_color',
    },
    {
        type: 'list',
        message: "Which shape do you want?",
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape_choices',
    },
    {
        type: 'input',
        message: "Enter a shape color:",
        name: 'shape_color',
    }
    ];

    module.exports = questions;


