const inquirer = require("inquirer");
const questions = require("./lib/questions");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

function generate() {
  inquirer.prompt(questions).then((response) => {
    let shape;
    switch (response.shape_choices) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
    }

    shape.setThis(
      response.shape_color,
      response.text_color,
      response.logo_text
    );

    fs.writeFile(
      "logo.svg",
      shape.render(response.logo_text, response.text_color),
      (err) => {
        err ? console.log(err) : console.log("Generating your logo...");
      }
    );
  });
}

generate();
