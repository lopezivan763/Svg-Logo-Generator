class Circle {
    constructor() {
        this.color = '';
        this.textColor = '';
        this.logoText = '';
    }

    setThis(color, textColor, logoText) {
        if (logoText.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.color = color;
        this.textColor = textColor;
        this.logoText = logoText;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
}

class Triangle {
    constructor() {
        this.color = '';
        this.textColor = '';
        this.logoText = '';
    }

    setThis(color, textColor, logoText) {
        if (logoText.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.color = color;
        this.textColor = textColor;
        this.logoText = logoText;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
}

class Square {
    constructor() {
        this.color = '';
        this.textColor = '';
        this.logoText = '';
    }

    setThis(color, textColor, logoText) {
        if (logoText.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.color = color;
        this.textColor = textColor;
        this.logoText = logoText;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
}

module.exports = {Circle, Triangle, Square};
