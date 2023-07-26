"use strict";
(() => {
var exports = {};
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 9829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/P5Game.js


function loadScript(src, onLoad) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = onLoad;
    document.body.appendChild(script);
}
let game = {
    player: null,
    dogs: [],
    papers: [],
    score: 0,
    gameOver: false
};
function GameComponent() {
    const gameRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js", ()=>{
            loadScript("https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.14.2/matter.min.js", ()=>{
                let game = {
                    player: null,
                    dogs: [],
                    papers: [],
                    score: 0,
                    gameOver: false
                };
                const sketch = (p)=>{
                    p.setup = ()=>{
                        p.createCanvas(800, 600);
                        game.player = new Player(p, p.width / 4, p.height / 2);
                    };
                    p.draw = ()=>{
                        p.background(0);
                        // Translate everything by the negative of player's position
                        const camX = -game.player.pos.x + p.width / 2;
                        p.translate(camX, 0);
                        if (game.gameOver) {
                            p.text("Game Over", p.width / 2, p.height / 2);
                            p.noLoop();
                            return;
                        }
                        game.player.show();
                        game.player.update();
                        game.player.applyForce(p.createVector(0, 0.2)); // Adding gravity
                        // Spawn a new dog every 100 frames
                        if (p.frameCount % 100 === 0) {
                            game.dogs.push(new Dog(p, game.player.pos.x + p.width));
                        }
                        for(let i = game.dogs.length - 1; i >= 0; i--){
                            const dog = game.dogs[i];
                            dog.show();
                            dog.update();
                            if (dog.hitsPlayer(game.player)) {
                                game.gameOver = true;
                            }
                            if (dog.offscreen(game.player)) {
                                game.dogs.splice(i, 1);
                            }
                        }
                        for(let i = game.papers.length - 1; i >= 0; i--){
                            const paper = game.papers[i];
                            paper.show();
                            paper.update();
                            for(let j = game.dogs.length - 1; j >= 0; j--){
                                if (paper.hitsDog(game.dogs[j])) {
                                    game.papers.splice(i, 1);
                                    game.dogs.splice(j, 1);
                                    break;
                                }
                            }
                            if (paper.offscreen(game.player)) {
                                game.papers.splice(i, 1);
                            }
                        }
                        game.score = p.frameCount;
                        p.text("Score: " + game.score, p.width / 2 - 50, 30);
                    };
                    p.keyPressed = ()=>{
                        if (p.key === " ") {
                            game.papers.push(new Paper(p, game.player.pos.x, game.player.pos.y));
                        }
                    };
                };
                new window.p5(sketch, gameRef.current);
            });
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: gameRef
    });
}
class Player {
    constructor(p, x, y){
        this.p = p;
        this.pos = p.createVector(x, y);
        this.vel = p.createVector(1, 0); // Initially moving to the right
        this.acc = p.createVector(0, 0);
        this.r = 30; // Assume a radius for the player
    }
    applyForce(force) {
        this.acc.add(force);
    }
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // Clear acceleration for next frame
        this.acc.mult(0);
    }
    show() {
        this.p.fill(0, 255, 0); // Set color to green
        this.p.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
}
class Dog {
    constructor(p, x){
        this.p = p;
        // Dog spawns at a random height on the right edge of the screen
        this.pos = p.createVector(x, p.random(p.height));
        // Dog moves to the left at a random speed
        this.vel = p.createVector(-p.random(1, 3), 0);
        this.r = 20; // Assume a radius for a rectangular dog
    }
    hitsPlayer(player) {
        let d = this.pos.dist(player.pos);
        return d < player.r + this.r;
    }
    update() {
        this.pos.add(this.vel);
    }
    show() {
        this.p.fill(255, 0, 0); // Set color to red
        this.p.rectMode(this.p.CENTER);
        this.p.rect(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
    offscreen(player) {
        return this.pos.x < player.pos.x - this.p.width / 2;
    }
}
class Paper {
    constructor(p, x, y){
        this.p = p;
        this.pos = p.createVector(x, y);
        // Paper moves to the right at a fixed speed
        this.vel = p.createVector(2, 0);
        this.w = 5; // Assume a width for a rectangular paper
        this.h = 10; // Assume a height for a rectangular paper
    }
    hitsDog(dog) {
        let d = this.pos.dist(dog.pos);
        return d < this.w + dog.r;
    }
    update() {
        this.pos.add(this.vel);
    }
    show() {
        this.p.fill(255); // Set color to white
        this.p.rectMode(this.p.CENTER);
        this.p.rect(this.pos.x, this.pos.y, this.w, this.h);
    }
    offscreen(player) {
        return this.pos.x > player.pos.x + this.p.width / 2;
    }
}
/* harmony default export */ const P5Game = (GameComponent);

// EXTERNAL MODULE: ./src/components/Layout.js + 2 modules
var Layout = __webpack_require__(7376);
;// CONCATENATED MODULE: ./src/pages/quiz.js



function Home({ site  }) {
    return(// <Layout site={site}>
    /*#__PURE__*/ jsx_runtime_.jsx(P5Game, {}));
}
async function getStaticProps({ params  }) {
    const siteId = "30";
    const baseUrl = "http://127.0.0.1:8000";
    console.log(siteId, baseUrl);
    const response = await fetch(`${baseUrl}/api/sites/public/`);
    const sites = await response.json();
    console.log(sites);
    const site = await sites.filter((s)=>s.id === parseInt(siteId))[0];
    return {
        props: {
            site
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,172,664,298,656,376], () => (__webpack_exec__(9829)));
module.exports = __webpack_exports__;

})();