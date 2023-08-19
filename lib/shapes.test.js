const generateShapes = require('./generateShapes.js');
const { Triangle, Square, Circle } = require('./shapes.js');


describe('generateShapes', () => {
    describe('render', () => {
        it('should generate a 300x200 SVG triangle using user input', () => {

            const testData = {
                textColor: 'blue',
                text: 'DEV',
                shapeColor: 'gold'
            };

            const triangle = new Triangle(testData);
            const renderedTriangle = triangle.render();
            const expectedTriangle = `<svg version="1.1"
            width="300px" height="200px"
            xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="150,20 60,170 240,170" fill="gold" />
    
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">DEV</text>
        
        </svg>`

        expect(renderedTriangle.replace(/\s+/g, '')).toMatch(expectedTriangle.replace(/\s+/g, ''));
        });
    });
});

describe('generateShapes', () => {
    describe('render', () => {
        it('should generate a 300x200 square img using user input', () => {

            const testData = {
                textColor: 'white',
                text: 'SEO',
                shapeColor: 'green'
            };

            const square = new Square(testData);
            const renderedSquare = square.render();
            const expectedSquare = `<svg version="1.1"
            width="300px" height="200px"
            xmlns="http://www.w3.org/2000/svg">
            
            <rect width="150" height="150" x="75" y="25" fill="green" />
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SEO</text>
            
            </svg>`

            expect(renderedSquare.replace(/\s+/g, '')).toMatch(expectedSquare.replace(/\s+/g, ''));
        });
    });
});


describe('generateShapes', () => {
    describe('render', () => {
        it('should generate a 300x200 circle img using user input', () => {

            const testData = {
                textColor: 'red',
                text: 'SVG',
                shapeColor: 'black'
            };

            const circle = new Circle(testData);
            const renderedCircle = circle.render();

            const expectedCircle = `<svg version="1.1"
            width="300px" height="200px"
            xmlns="http://www.w3.org/2000/svg">
        
            <circle cx="150" cy="100" r="70" fill="black" />
        
            <text x="150" y="120" font-size="50" text-anchor="middle" fill="red">SVG</text>
        
            </svg>`;

            expect(renderedCircle.replace(/\s+/g, '')).toMatch(expectedCircle.replace(/\s+/g, ''));
        });
    });
});




