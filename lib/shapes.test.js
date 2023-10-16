const {Circle, Triangle, Square} = require("./shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const circle = new Circle();
    circle.setThis("green", "red", "ivy");
  const expectedSvg ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ivy</text></svg>';

      
    const actualSvg = circle.render("", "");
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    const circle = new Circle();
  circle.setThis("blue", "red", "ivy");
  const expectedSvg ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ivy</text></svg>';
    const actualSvg = circle.render("", "");
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a grey polygon element", () => {
    const triangle = new Triangle();
    triangle.setThis("grey", "black", "LOL");
    const expectedSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="grey" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOL</text></svg>`;
    const actualSvg = triangle.render("", "");
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept fillColor param", () => {
    const triangle = new Triangle();
    triangle.setThis("purple", "red", "OMG");
    const expectedSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="purple" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">OMG</text></svg>`;
    const actualSvg = triangle.render("", "");
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const square = new Square();
    square.setThis("dodgerblue", "white", "HI");
    const expectedSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">HI</text></svg>`;

    const actualSvg = square.render("", "");
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    const square = new Square();
    square.setThis("red", "green", "OOP");
    const expectedSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">OOP</text></svg>`;

    const actualSvg = square.render("", "");
    expect(actualSvg).toEqual(expectedSvg);
  });
});
