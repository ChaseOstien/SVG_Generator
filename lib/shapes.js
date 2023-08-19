class Shape {
    constructor(data) {
        this.data = data;
    }
    render() {

    }
}

class Circle extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<svg version="1.1"
        width="300px" height="200px"
        xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="150" cy="100" r="70" fill="${this.data.shapeColor}" />
        
        <text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>
        
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<svg version="1.1"
        width="300px" height="200px"
        xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,20 60,170 240,170" fill="${this.data.shapeColor}" />

    <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>

    </svg>`;
    }
}

class Square extends Shape {
    constructor(data) {
        super(data);
    }
    render() {
        return `<svg version="1.1"
        width="300px" height="200px"
        xmlns="http://www.w3.org/2000/svg">
        
        <rect width="150" height="150" x="75" y="25" fill="${this.data.shapeColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>
        
        </svg>`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };