import React, { useEffect, useRef, useState } from 'react';

const P5Game = (props) => {
    const sketchRef = useRef();
    const [p5, setP5] = useState(null);

    useEffect(() => {
        import('p5').then((p5) => {
            setP5(p5);
            let sketch = function(p) {
                let shapes = [];
                let blockColors = props.blockColors || ["red", "blue", "green", "yellow", "purple"];
                let gravity = 0.5;

                p.setup = function() {
                    p.createCanvas(p.windowWidth, p.windowHeight);
                }

                p.draw = function() {
                    p.background(220);
                    shapes.forEach(shape => {
                        p.fill(shape.color);
                        shape.velocity += gravity;
                        shape.y += shape.velocity;

                        switch(shape.type) {
                            case "rectangle":
                                p.rect(shape.x, shape.y, 50, 50);
                                break;
                            case "circle":
                                p.ellipse(shape.x, shape.y, 50, 50);
                                break;
                            case "triangle":
                                p.triangle(shape.x, shape.y - 25, shape.x - 25, shape.y + 25, shape.x + 25, shape.y + 25);
                                break;
                            case "star":
                                p.push();
                                p.translate(shape.x, shape.y);
                                p.beginShape();
                                for(let i = 0; i < 5; i++) {
                                    p.vertex(0, -20);
                                    p.rotate(p.PI / 3);
                                    p.vertex(0, -10);
                                    p.rotate(p.PI / 3);
                                }
                                p.endShape(p.CLOSE);
                                p.pop();
                                break;
                            default:
                                break;
                        }
                    });
                }

                p.mousePressed = function() {
                    let blockColor = blockColors[p.int(p.random(blockColors.length))];
                    let shapeTypes = ["rectangle", "circle", "triangle", "star"];
                    let shapeType = shapeTypes[p.int(p.random(shapeTypes.length))];

                    shapes.push({
                        x: p.mouseX,
                        y: p.mouseY,
                        color: blockColor,
                        velocity: 0,
                        type: shapeType
                    });
                }
            };

            new p5.default(sketch, sketchRef.current);
        })
    }, []);

    return <div ref={sketchRef}></div>
}

export default P5Game;
