const { Circle, Square } = require("./shapes");

describe("SVG", () => {
  test("should render a 300 x 200 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="" /><text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>';
    const svg = new Circle();
    svg.setThis("", "", "");
    expect(svg.render("", "")).toEqual(expectedSvg);
  });

  test("should append text element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="White">A</text></svg>';
    const svg = new Circle();
    svg.setThis("", "White", "A");
    expect(svg.render("A", "white")).toEqual(expectedSvg);
  });
});
test("should set text message and color", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new Circle();
  svg.setThis("", "#333", "SVG");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should throw if text exceeds 3 characters", () => {
  const expectedError = new Error("Text must not exceed 3 characters.");
  const svg = new Circle();
  expect(() => svg.setThis("", "#333", "HELLO")).toThrow(expectedError);
});

test("should include a shape", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new Circle();
  const square = new Square();
  square.setThis("dodgerblue", "#333", "SVG");
  expect(square.render()).toEqual(expectedSvg);
});
