import { HTMLClip, CSSEffect } from '@donkeyclip/motorcortex';

class CrossMoveRight extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];

    for (let i = 1; i <= this.attrs.items; i++) {
      const left = i === 1 ? this.attrs.crossSize / 2 - this.attrs.crossThickness / 2 : this.attrs.crossSize * i;
      crossList.push("<div style=\"left: ".concat(left, "px;\" class=\"cross-wrapper-item cross-wrapper-item-").concat(i, "\">\n          <div class=\"cross cross-item-").concat(i, "\"></div>\n        </div>"));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(crossList.join(""), "\n  \t  </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n      \n      .cross {\n        background: ").concat(this.attrs.color, ";\n        height: ").concat(this.attrs.crossSize, "px;\n        width: ").concat(this.attrs.crossThickness, "px;\n       \n      }\n      .cross-wrapper-item {\n        height: ").concat(this.attrs.crossSize, "px;\n        width:").concat(this.attrs.crossSize, "px;\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        align-content: center;\n      }\n\n      .cross:after {\n        background: ").concat(this.attrs.color, ";\n        content: \"\";\n        height: ").concat(this.attrs.crossThickness, "px;\n        left: -").concat(this.attrs.crossSize / 2 - this.attrs.crossThickness / 2, "px;\n        position: absolute;\n        top: ").concat(this.attrs.crossSize / 2 - this.attrs.crossThickness / 2, "px;\n        width: ").concat(this.attrs.crossSize, "px;\n      }\n    ");
  }

  buildTree() {
    for (let i = 1; i <= this.attrs.items; i++) {
      const crossScale = new CSSEffect({
        animatedAttrs: {
          transform: {
            scale: 1,
            rotate: "-".concat(Math.floor(Math.random() * 190), "deg")
          }
        },
        initialValues: {
          transform: {
            scale: 0,
            rotate: "0deg"
          }
        }
      }, {
        duration: 1000,
        selector: ".cross-item-" + (this.attrs.items - i + 1)
      });
      this.addIncident(crossScale, 500 * i - 500);
      const lastEnd = 250 * this.attrs.items + 250 * i;
      const left = this.attrs.crossSize * (i + 1);
      const crossLeft = new CSSEffect({
        animatedAttrs: {
          left: "".concat(this.attrs.travelDistance - left, "px"),
          transform: {
            rotate: "197deg"
          }
        }
      }, {
        duration: 700,
        selector: ".cross-wrapper-item-" + (this.attrs.items - i + 1),
        easing: "easeInOutQuad"
      });
      this.addIncident(crossLeft, lastEnd);
    }
  }

}

class CrossMoveRightOutline extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];

    for (let i = 0; i <= this.attrs.steps; i++) {
      crossList.push("<svg class=\"cross-item cross-item-".concat(i, "\" style=\"left:").concat(this.attrs.travelDistance / this.attrs.steps * i, "px;transform: rotate(").concat(Math.floor(Math.random() * 361), "deg)\" height=\"").concat(this.attrs.crossSize, "px\" viewBox=\"0 0 512 512\" width=\"").concat(this.attrs.crossSize, "px\" xmlns=\"http://www.w3.org/2000/svg\">\n           <path d=\"m336 512h-160v-177h-176v-160h176v-175h160v175h176v160h-176zm-120-40h80v-177h176v-80h-176v-175h-80v175h-176v80h176zm0 0\"/>\n        </svg>"));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(crossList.join(""), "\n  \t  </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n\n      .cross-item{\n        fill: ").concat(this.attrs.color, ";\n        position:relative;\n      }\n    ");
  }

  buildTree() {
    for (let i = 0; i <= this.attrs.steps; i++) {
      const crossOpacityOn = new CSSEffect({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".cross-item-" + i
      });
      this.addIncident(crossOpacityOn, 500 * i + 1);
      const crossOpacityOff = new CSSEffect({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 1,
        selector: ".cross-item-" + i
      });
      this.addIncident(crossOpacityOff, 500 * i + 1 + 500);
    }
  }

}

class CrossRandom extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      this.array.push(0);
      crossList.push(" <div  class=\"cross cross-item-".concat(i, "\"></div> "));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(crossList.join(""), "\n  \t  </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        display: grid;\n        grid-column-gap: ").concat(this.attrs.crossSize / 2, "px;\n        grid-template-columns: repeat(").concat(Math.round(this.attrs.items / this.attrs.rows), ", 1fr);\n        grid-row-gap: ").concat(this.attrs.crossSize, "px;\n        justify-items: center;\n      }\n      \n      .cross {\n        background: ").concat(this.attrs.color, ";\n        height: ").concat(this.attrs.crossSize, "px;\n        width: ").concat(this.attrs.crossThickness, "px;\n        position: relative;\n      }\n   \n      .cross:after {\n        background: ").concat(this.attrs.color, ";\n        content: \"\";\n        height: ").concat(this.attrs.crossThickness, "px;\n        left: -").concat(this.attrs.crossSize / 2 - this.attrs.crossThickness / 2, "px;\n        position: absolute;\n        top: ").concat(this.attrs.crossSize / 2 - this.attrs.crossThickness / 2, "px;\n        width: ").concat(this.attrs.crossSize, "px;\n      }\n    ");
  }

  buildTree() {
    const shuffle = array => {
      let currentIndex = array.length,
          temporaryValue,
          randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    const indexArray = Object.keys(this.array);
    const shuffledArray = shuffle(indexArray);
    shuffledArray.map((index, i) => {
      const crossScale = new CSSEffect({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".cross-item-" + index
      });
      this.addIncident(crossScale, 200 * i * (this.attrs.timing || 1));
    });
  }

}

class VerticalLinesMove extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < 3; i++) {
      this.array.push(0);
      const width = Math.floor(Math.random() * this.attrs.maxLineWidth);
      const height = Math.floor(Math.random() * this.attrs.height);
      crossList.push("\n        <div style=\"width:".concat(width, "px;\" class=\"line-wrapper line-wrapper-item-").concat(i, "\">\n          <div style=\"width:").concat(this.attrs.maxLineWidth, "px;height:").concat(height, "px;\" class=\"line line-item-").concat(i, "\"></div>\n        </div>\n      "));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(crossList.join(""), "\n      </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height:").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n      \n      .line{\n        background: ").concat(this.attrs.color, ";\n        position: relative;\n      }\n\n      .line-wrapper{\n        position: relative;\n        overflow: hidden;\n      }\n    ");
  }

  buildTree() {
    for (let i = 0; i <= 3; i++) {
      const lineTop = new CSSEffect({
        animatedAttrs: {
          height: "".concat(this.attrs.height * 0.6, "px"),
          top: "0px"
        },
        initialValues: {
          height: "0px",
          top: "".concat(this.attrs.height, "px")
        }
      }, {
        duration: 500,
        selector: ".line-wrapper-item-" + i
      });
      this.addIncident(lineTop, 500 * i + 1);
      const lineHeigth = new CSSEffect({
        animatedAttrs: {
          height: "0px"
        }
      }, {
        duration: 400,
        selector: ".line-item-" + i
      });
      this.addIncident(lineHeigth, 500 + 500 * i + 1);
    }
  }

}

class HorizontalLinesMove extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < 3; i++) {
      const width1 = Math.floor(Math.random() * this.attrs.maxLineHeight);
      const width2 = Math.floor(Math.random() * this.attrs.width);
      this.array.push(0);
      crossList.push("\n        <div style=\"width:".concat(width1, "px;\" class=\"line-wrapper line-wrapper-item-").concat(i, "\">\n          <div style=\"height:").concat(this.attrs.maxLineHeight, "px; width:").concat(width2, "px;\" class=\"line line-item-").concat(i, "\"></div>\n        </div>\n      "));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(crossList.join(""), "\n      </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height:").concat(this.attrs.height, "px;\n        font-family: 'Poppins', sans-serif;\n      }\n\n      .line{\n        background: ").concat(this.attrs.color, ";\n        position: relative;\n      }\n\n      .line-wrapper{\n        position: relative;\n        overflow: hidden;\n      }\n    ");
  }

  buildTree() {
    for (let i = 0; i <= 3; i++) {
      const lineTop = new CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.6, "px"),
          left: "0px"
        },
        initialValues: {
          width: "0px",
          left: "".concat(this.attrs.width, "px")
        }
      }, {
        duration: 500,
        selector: ".line-wrapper-item-" + i
      });
      this.addIncident(lineTop, 500 * i + 1);
      const lineHeigth = new CSSEffect({
        animatedAttrs: {
          width: "0px"
        }
      }, {
        duration: 400,
        selector: ".line-item-" + i
      });
      this.addIncident(lineHeigth, 500 + 500 * i + 1);
    }
  }

}

class CircleExplosion extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      const r = this.randomIntFromInterval(this.attrs.minR - 90, this.attrs.maxR - 90);
      crossList.push("<div style=\"transform: rotate(".concat(r, "deg)\" class=\"circle circle-item-").concat(i, "\"></div>"));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(crossList.join(""), "\n      </div>\n    ");
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height:").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .circle{\n        background: ").concat(this.attrs.border === true ? "transparent" : this.attrs.color, ";\n        width:").concat(this.attrs.maxCirlcleSize, "px;\n        height:").concat(this.attrs.maxCirlcleSize, "px;\n        border-radius: 100%;\n        position: absolute;\n      }\n  ");
  }

  buildTree() {
    for (let i = 0; i < this.attrs.items; i++) {
      const circleTop = new CSSEffect({
        animatedAttrs: {
          transform: {
            translateY: "".concat(-this.attrs.travelDistance, "px")
          }
        }
      }, {
        duration: 500,
        selector: ".circle-item-" + i
      });
      this.addIncident(circleTop, 0);
      const circleWidthUp = new CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize, "px"),
          height: "".concat(this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize, "px"),
          border: this.attrs.border === true ? "".concat(this.attrs.maxCirlcleSize / 2, "px solid ").concat(this.attrs.color) : "".concat(0, "px solid ", this.attrs.color)
        },
        initialValues: {
          width: "0px",
          height: "0px",
          border: this.attrs.border === true ? "".concat(0, "px solid ", this.attrs.color) : "".concat(0, "px solid ", this.attrs.color)
        }
      }, {
        duration: 250,
        selector: ".circle-item-" + i
      });
      this.addIncident(circleWidthUp, 0);
      const circleWidthDown = new CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.border === true ? this.attrs.maxCirlcleSize : 0, "px"),
          height: "".concat(this.attrs.border === true ? this.attrs.maxCirlcleSize : 0, "px"),
          border: "".concat(0, "px solid ", this.attrs.color)
        }
      }, {
        duration: 250,
        selector: ".circle-item-" + i
      });
      this.addIncident(circleWidthDown, 250);
    }
  }

}

class CircleBubbleUp extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      const r = this.randomIntFromInterval(this.attrs.maxCirlcleSize, this.attrs.width - this.attrs.maxCirlcleSize);
      crossList.push("<div style=\"left: ".concat(r, "px\" class=\"circle circle-item-").concat(i, "\"></div>"));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(crossList.join(""), "\n      </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height:").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        justify-content: center;\n        align-items: center;\n      }\n      .circle{\n        background: ").concat(this.attrs.border === true ? "transparent" : this.attrs.color, ";\n        width:").concat(this.attrs.maxCirlcleSize, "px;\n        height:").concat(this.attrs.maxCirlcleSize, "px;\n        border-radius: 100%;\n        position: absolute;\n\n      }\n    ");
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  buildTree() {
    for (let i = 0; i < this.attrs.items; i++) {
      const duration = this.randomIntFromInterval(350, 500);
      const circleTop = new CSSEffect({
        animatedAttrs: {
          top: "".concat(-this.attrs.maxCirlcleSize, "px")
        },
        initialValues: {
          top: "".concat(this.attrs.height, "px")
        }
      }, {
        duration: Math.round(duration),
        selector: ".circle-item-" + i
      });
      this.addIncident(circleTop, 0);
      const circleWidthUp = new CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize, "px"),
          height: "".concat(this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize, "px"),
          border: this.attrs.border === true ? "".concat(this.attrs.maxCirlcleSize / 2, "px solid ").concat(this.attrs.color) : "".concat(0, "px solid ", this.attrs.color)
        },
        initialValues: {
          width: "0px",
          height: "0px",
          border: this.attrs.border === true ? "".concat(0, "px solid ", this.attrs.color) : "".concat(0, "px solid ", this.attrs.color)
        }
      }, {
        duration: Math.round(duration / 2),
        selector: ".circle-item-" + i
      });
      this.addIncident(circleWidthUp, 0);
      const circleWidthDown = new CSSEffect({
        animatedAttrs: {
          width: "".concat(this.attrs.border === true ? this.attrs.maxCirlcleSize : 0, "px"),
          height: "".concat(this.attrs.border === true ? this.attrs.maxCirlcleSize : 0, "px"),
          border: "".concat(0, "px solid ", this.attrs.color)
        }
      }, {
        duration: Math.round(duration / 2),
        selector: ".circle-item-" + i
      });
      this.addIncident(circleWidthDown, Math.round(duration / 2));
    }
  }

}

class Dots extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const dotsList = [];

    for (let i = 0; i < this.attrs.items; i++) {
      dotsList.push(" <div class=\"dots dots-item-".concat(i, "\"></div>"));
    }

    return "\n      <div class=\"wrapper\">\n        ".concat(dotsList.join(""), "\n  \t  </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        display: grid;\n       \n        grid-template-columns: repeat(").concat(Math.round(this.attrs.items / this.attrs.rows), ", ").concat(this.attrs.columnGap, "px);\n        grid-row-gap: ").concat(this.attrs.rowGap, "px;\n        justify-items: center;\n      }\n      \n      .dots {\n        background: ").concat(this.attrs.color, ";\n        height: ").concat(this.attrs.dotSize, "px;\n        width: ").concat(this.attrs.dotSize, "px;\n        border-radius: 100%;\n        position: relative;\n      }\n    ");
  }

  buildTree() {
    const dotsOpacity = new CSSEffect({
      animatedAttrs: {
        opacity: 1
      },
      initialValues: {
        opacity: 0
      }
    }, {
      duration: 100 * this.attrs.timing,
      selector: ".dots",
      repeats: this.attrs.repeats
    });
    this.addIncident(dotsOpacity, 0);
  }

}

class CrossRowReveal extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      this.array.push(0);
      crossList.push(" <div class=\"cross cross-item-".concat(i, "\"></div>"));
    }

    return "\n      <div class=\"wrapper\">\n        <div class= \"cross-wrapper cross-wrapper-0\">\n          ".concat(crossList.join(""), "\n        </div>\n        <div class= \"cross-wrapper cross-wrapper-1\">\n          ").concat(crossList.join(""), "\n        </div>\n  \t  </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        height: ").concat(this.attrs.crossSize * 2 + this.attrs.crossSize / 2, "px;\n      }\n\n      .cross-wrapper{\n        display:flex;\n        position :absolute;\n        width:").concat(this.attrs.width, "px;\n        justify-content: space-around;\n        top:").concat(this.attrs.crossSize + this.attrs.crossSize / 2, "px;\n      }\n\n      .cross {\n        background: ").concat(this.attrs.color, ";\n        height: ").concat(this.attrs.crossSize, "px;\n        width: ").concat(this.attrs.crossThickness, "px;\n        position: relative;\n      }\n   \n      .cross:after {\n        background: ").concat(this.attrs.color, ";\n        content: \"\";\n        height: ").concat(this.attrs.crossThickness, "px;\n        left: -").concat(this.attrs.crossSize / 2 - this.attrs.crossThickness / 2, "px;\n        position: absolute;\n        top: ").concat(this.attrs.crossSize / 2 - this.attrs.crossThickness / 2, "px;\n        width: ").concat(this.attrs.crossSize, "px;\n      }\n    ");
  }

  buildTree() {
    for (let i = 0; i < this.attrs.items; i++) {
      const select = this.attrs.reverse === true ? this.attrs.items - i - 1 : i;
      const reveal = new CSSEffect({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".cross-item-" + select,
        easing: "easeOutQuad"
      });
      this.addIncident(reveal, 200 * i * (this.attrs.timing || 1));
    }

    const crossTop = new CSSEffect({
      animatedAttrs: {
        top: "0px"
      }
    }, {
      duration: 350,
      selector: ".cross-wrapper-1",
      easing: "easeOutQuad"
    });
    this.addIncident(crossTop, 200 * (this.attrs.timing || 1) * this.attrs.items);
  }

}

const CrossMoveRightValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  crossSize: {
    optional: false,
    type: "number"
  },
  crossThickness: {
    optional: false,
    type: "number"
  },
  travelDistance: {
    optional: false,
    type: "number"
  },
  items: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  }
};
const CrossMoveRightOutlineValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  crossSize: {
    optional: false,
    type: "number"
  },
  travelDistance: {
    optional: false,
    type: "number"
  },
  steps: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  }
};
const CrossRandomValidation = {
  width: {
    optional: false,
    type: "number"
  },
  crossSize: {
    optional: false,
    type: "number"
  },
  crossThickness: {
    optional: false,
    type: "number"
  },
  items: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  },
  rows: {
    optional: false,
    type: "number"
  },
  timing: {
    optional: true,
    type: "number"
  }
};
const VerticalLinesMoveValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  maxLineWidth: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  }
};
const HorizontalLinesMoveValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  maxLineHeight: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  }
};
const CircleExplosionValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  maxCirlcleSize: {
    optional: false,
    type: "number"
  },
  travelDistance: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  },
  items: {
    optional: false,
    type: "number"
  },
  minR: {
    optional: false,
    type: "number"
  },
  maxR: {
    optional: false,
    type: "number"
  },
  border: {
    optional: false,
    type: "boolean"
  }
};
const CircleBubbleUpValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  maxCirlcleSize: {
    optional: false,
    type: "number"
  },
  travelDistance: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  },
  items: {
    optional: false,
    type: "number"
  },
  border: {
    optional: false,
    type: "boolean"
  }
};
const DotsValidation = {
  width: {
    optional: false,
    type: "number"
  },
  dotSize: {
    optional: false,
    type: "number"
  },
  items: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  },
  rowGap: {
    optional: false,
    type: "number"
  },
  columnGap: {
    optional: false,
    type: "number"
  },
  rows: {
    optional: false,
    type: "number"
  },
  timing: {
    optional: false,
    type: "number"
  },
  repeats: {
    optional: false,
    type: "number"
  }
};
const CrossRowRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  crossSize: {
    optional: false,
    type: "number"
  },
  crossThickness: {
    optional: false,
    type: "number"
  },
  items: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  },
  reverse: {
    optional: false,
    type: "boolean"
  },
  timing: {
    optional: false,
    type: "number"
  }
};

var name = "@donkeyclip/motorcortex-abstracts";
var version = "1.3.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: CrossMoveRight,
    name: "CrossMoveRight",
    attributesValidationRules: { ...CrossMoveRightValidation
    }
  }, {
    exportable: CrossMoveRightOutline,
    name: "CrossMoveRightOutline",
    attributesValidationRules: { ...CrossMoveRightOutlineValidation
    }
  }, {
    exportable: CrossRandom,
    name: "CrossRandom",
    attributesValidationRules: { ...CrossRandomValidation
    }
  }, {
    exportable: VerticalLinesMove,
    name: "VerticalLinesMove",
    attributesValidationRules: { ...VerticalLinesMoveValidation
    }
  }, {
    exportable: HorizontalLinesMove,
    name: "HorizontalLinesMove",
    attributesValidationRules: { ...HorizontalLinesMoveValidation
    }
  }, {
    exportable: CircleExplosion,
    name: "CircleExplosion",
    attributesValidationRules: { ...CircleExplosionValidation
    }
  }, {
    exportable: CircleBubbleUp,
    name: "CircleBubbleUp",
    attributesValidationRules: { ...CircleBubbleUpValidation
    }
  }, {
    exportable: Dots,
    name: "Dots",
    attributesValidationRules: { ...DotsValidation
    }
  }, {
    exportable: CrossRowReveal,
    name: "CrossRowReveal",
    attributesValidationRules: { ...CrossRowRevealValidation
    }
  }]
};

export { index as default };
