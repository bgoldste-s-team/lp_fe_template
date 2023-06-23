import React, { useState, useEffect, useRef } from 'react';

function loadScript(src, onLoad) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onLoad;
    document.body.appendChild(script);
}

export default function P5Game() {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const gameRef = useRef();

    useEffect(() => {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js', () => {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min.js', () => {
                setScriptsLoaded(true);
            });
        });
    }, []);

    useEffect(() => {
        if (scriptsLoaded) {
            const sketch = (p) => {
                let Engine = window.Matter.Engine,
                    World = window.Matter.World,
                    Bodies = window.Matter.Bodies,
                    Vertices = window.Matter.Vertices;

                let engine;
                let bodies = [];
                let ground;
                let score = 0;
                let scoreP;
                let canvas;

                const shapes = ['rectangle',
                    'square',
                    // 'triangle',
                    // 'circle', 'star'
                ];

                p.setup = function () {
                    canvas = p.createCanvas(320, 320);
                    engine = Engine.create();
                    ground = Bodies.rectangle(160, 310, 320, 20, { isStatic: true });
                    World.add(engine.world, [ground]);
                    scoreP = p.createDiv().parent(gameRef.current);
                };

                p.draw = function () {
                    p.background(51);
                    window.Matter.Engine.update(engine);
                    p.noStroke();
                    bodies.forEach(body => {
                        p.fill(body.color);
                        p.push();
                        p.translate(body.body.position.x, body.body.position.y);
                        p.rotate(body.body.angle);
                        switch (body.shape) {
                            case 'rectangle':
                            case 'square':
                                p.rectMode(p.CENTER);
                                p.rect(0, 0, body.w, body.h);
                                break;
                            case 'triangle':
                                p.triangle(-body.size / 2, body.size / 2, body.size / 2, body.size / 2, 0, -body.size / 2);
                                break;
                            case 'circle':
                                p.ellipseMode(p.RADIUS);
                                p.ellipse(0, 0, body.size);
                                break;
                            case 'star':
                                p.star(0, 0, body.size / 2, body.size, 5);
                                break;
                        }
                        p.pop();
                    });

                    scoreP.html('Score: ' + score);
                };

                p.star = function (x, y, radius1, radius2, npoints) {
                    let angle = p.TWO_PI / npoints;
                    let halfAngle = angle / 2.0;
                    p.beginShape();
                    for (let a = 0; a < p.TWO_PI; a += angle) {
                        let sx = x + p.cos(a) * radius2;
                        let sy = y + p.sin(a) * radius2;
                        p.vertex(sx, sy);
                        sx = x + p.cos(a + halfAngle) * radius1;
                        sy = y + p.sin(a + halfAngle) * radius1;
                        p.vertex(sx, sy);
                    }
                    p.endShape(p.CLOSE);
                };

                p.mousePressed = function () {
                    let shape = p.random(shapes);
                    let size = Math.random() * 40 + 10;
                    let body;
                    if (shape === 'rectangle' || shape === 'square') {
                        body = Bodies.rectangle(p.mouseX, p.mouseY, size, size);
                    } else if (shape === 'circle') {
                        body = Bodies.circle(p.mouseX, p.mouseY, size);
                    } else if (shape === 'triangle') {
                        let vertices = Vertices.fromPath('0 0 50 0 25 50');
                        body = window.Matter.Bodies.fromVertices(p.mouseX, p.mouseY, vertices);
                    } else if (shape === 'star') {
                        let vertices = Vertices.fromPath('0 0 50 0 25 50');
                        body = window.Matter.Bodies.fromVertices(p.mouseX, p.mouseY, vertices);
                    }

                    World.add(engine.world, [body]);
                    let maxHeight = Math.min(...bodies.map(body => body.body.position.y));
                    score = Math.round((320 - maxHeight) / 320 * 100);
                    bodies.push({
                        body,
                        w: size,
                        h: size,
                        shape,
                        color: p.color(Math.random() * 255, Math.random() * 255, Math.random() * 255),
                        size
                    });
                };
            };

            new window.p5(sketch, gameRef.current);
        }
    }, [scriptsLoaded]);

    return (
        <div ref={gameRef}>
            {!scriptsLoaded && <p>Loading...</p>}
        </div>
    );
}
