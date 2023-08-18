//const shapes = require('./shapes');
const { Triangle, Square, Circle } = require('./shapes.js');


function generateShapes(data) {
    
    const circleData = {
        textColor: data.textColor,
        text: data.text,
        shapeColor: data.shapeColor
    };
    
    const circle = new Circle(circleData);
    const circleSVG = circle.render();

    const triangleData = {
        textColor: data.textColor,
        text: data.text,
        shapeColor: data.shapeColor
    };

    const triangle = new Triangle(triangleData);
    const triangleSVG  = triangle.render();

    const squareData = {
        textColor: data.textColor,
        text: data.text,
        shapeColor: data.shapeColor
    };

    const square = new Square(squareData);
    const squareSVG = square.render(data);

if (data.shape === 'Circle') {
    return circleSVG;
        } else if (data.shape === 'Triangle') {
    return triangleSVG;
        } else if (data.shape === 'Square') {
    return squareSVG;
        } else throw new Error(err);
}

module.exports = generateShapes;
