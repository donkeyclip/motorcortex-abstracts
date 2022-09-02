import { HTMLClip, CSSEffect } from '@donkeyclip/motorcortex';

class CrossMoveRight extends HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];

    for (let i = 1; i <= this.attrs.items; i++) {
      const left = i === 1 ? this.attrs.crossSize / 2 - this.attrs.crossThickness / 2 : this.attrs.crossSize * i;
      crossList.push(`<div style="left: ${left}px;" class="cross-wrapper-item cross-wrapper-item-${i}">
          <div class="cross cross-item-${i}"></div>
        </div>`);
    }

    return `
      <div class="wrapper">
        ${crossList.join("")}
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
      }
      
      .cross {
        background: ${this.attrs.color};
        height: ${this.attrs.crossSize}px;
        width: ${this.attrs.crossThickness}px;
       
      }
      .cross-wrapper-item {
        height: ${this.attrs.crossSize}px;
        width:${this.attrs.crossSize}px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
      }

      .cross:after {
        background: ${this.attrs.color};
        content: "";
        height: ${this.attrs.crossThickness}px;
        left: -${this.attrs.crossSize / 2 - this.attrs.crossThickness / 2}px;
        position: absolute;
        top: ${this.attrs.crossSize / 2 - this.attrs.crossThickness / 2}px;
        width: ${this.attrs.crossSize}px;
      }
    `;
  }

  buildTree() {
    for (let i = 1; i <= this.attrs.items; i++) {
      const crossScale = new CSSEffect({
        animatedAttrs: {
          transform: {
            scale: 1,
            rotate: `-${Math.floor(Math.random() * 190)}deg`
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
          left: `${this.attrs.travelDistance - left}px`,
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];

    for (let i = 0; i <= this.attrs.steps; i++) {
      crossList.push(`<svg class="cross-item cross-item-${i}" style="left:${this.attrs.travelDistance / this.attrs.steps * i}px;transform: rotate(${Math.floor(Math.random() * 361)}deg)" height="${this.attrs.crossSize}px" viewBox="0 0 512 512" width="${this.attrs.crossSize}px" xmlns="http://www.w3.org/2000/svg">
           <path d="m336 512h-160v-177h-176v-160h176v-175h160v175h176v160h-176zm-120-40h80v-177h176v-80h-176v-175h-80v175h-176v80h176zm0 0"/>
        </svg>`);
    }

    return `
      <div class="wrapper">
        ${crossList.join("")}
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
      }

      .cross-item{
        fill: ${this.attrs.color};
        position:relative;
      }
    `;
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      this.array.push(0);
      crossList.push(` <div  class="cross cross-item-${i}"></div> `);
    }

    return `
      <div class="wrapper">
        ${crossList.join("")}
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        display: grid;
        grid-column-gap: ${this.attrs.crossSize / 2}px;
        grid-template-columns: repeat(${Math.round(this.attrs.items / this.attrs.rows)}, 1fr);
        grid-row-gap: ${this.attrs.crossSize}px;
        justify-items: center;
      }
      
      .cross {
        background: ${this.attrs.color};
        height: ${this.attrs.crossSize}px;
        width: ${this.attrs.crossThickness}px;
        position: relative;
      }
   
      .cross:after {
        background: ${this.attrs.color};
        content: "";
        height: ${this.attrs.crossThickness}px;
        left: -${this.attrs.crossSize / 2 - this.attrs.crossThickness / 2}px;
        position: absolute;
        top: ${this.attrs.crossSize / 2 - this.attrs.crossThickness / 2}px;
        width: ${this.attrs.crossSize}px;
      }
    `;
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < 3; i++) {
      this.array.push(0);
      const width = Math.floor(Math.random() * this.attrs.maxLineWidth);
      const height = Math.floor(Math.random() * this.attrs.height);
      crossList.push(`
        <div style="width:${width}px;" class="line-wrapper line-wrapper-item-${i}">
          <div style="width:${this.attrs.maxLineWidth}px;height:${height}px;" class="line line-item-${i}"></div>
        </div>
      `);
    }

    return `
      <div class="wrapper">
        ${crossList.join("")}
      </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height:${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
      }
      
      .line{
        background: ${this.attrs.color};
        position: relative;
      }

      .line-wrapper{
        position: relative;
        overflow: hidden;
      }
    `;
  }

  buildTree() {
    for (let i = 0; i <= 3; i++) {
      const lineTop = new CSSEffect({
        animatedAttrs: {
          height: `${this.attrs.height * 0.6}px`,
          top: `0px`
        },
        initialValues: {
          height: `0px`,
          top: `${this.attrs.height}px`
        }
      }, {
        duration: 500,
        selector: ".line-wrapper-item-" + i
      });
      this.addIncident(lineTop, 500 * i + 1);
      const lineHeigth = new CSSEffect({
        animatedAttrs: {
          height: `0px`
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < 3; i++) {
      const width1 = Math.floor(Math.random() * this.attrs.maxLineHeight);
      const width2 = Math.floor(Math.random() * this.attrs.width);
      this.array.push(0);
      crossList.push(`
        <div style="width:${width1}px;" class="line-wrapper line-wrapper-item-${i}">
          <div style="height:${this.attrs.maxLineHeight}px; width:${width2}px;" class="line line-item-${i}"></div>
        </div>
      `);
    }

    return `
      <div class="wrapper">
        ${crossList.join("")}
      </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height:${this.attrs.height}px;
        font-family: 'Poppins', sans-serif;
      }

      .line{
        background: ${this.attrs.color};
        position: relative;
      }

      .line-wrapper{
        position: relative;
        overflow: hidden;
      }
    `;
  }

  buildTree() {
    for (let i = 0; i <= 3; i++) {
      const lineTop = new CSSEffect({
        animatedAttrs: {
          width: `${this.attrs.width * 0.6}px`,
          left: `0px`
        },
        initialValues: {
          width: `0px`,
          left: `${this.attrs.width}px`
        }
      }, {
        duration: 500,
        selector: ".line-wrapper-item-" + i
      });
      this.addIncident(lineTop, 500 * i + 1);
      const lineHeigth = new CSSEffect({
        animatedAttrs: {
          width: `0px`
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      const r = this.randomIntFromInterval(this.attrs.minR - 90, this.attrs.maxR - 90);
      crossList.push(`<div style="transform: rotate(${r}deg)" class="circle circle-item-${i}"></div>`);
    }

    return `
      <div class="wrapper">
        ${crossList.join("")}
      </div>
    `;
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height:${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        justify-content: center;
        align-items: center;
      }

      .circle{
        background: ${this.attrs.border === true ? "transparent" : this.attrs.color};
        width:${this.attrs.maxCirlcleSize}px;
        height:${this.attrs.maxCirlcleSize}px;
        border-radius: 100%;
        position: absolute;
      }
  `;
  }

  buildTree() {
    for (let i = 0; i < this.attrs.items; i++) {
      const circleTop = new CSSEffect({
        animatedAttrs: {
          transform: {
            translateY: `${-this.attrs.travelDistance}px`
          }
        }
      }, {
        duration: 500,
        selector: ".circle-item-" + i
      });
      this.addIncident(circleTop, 0);
      const circleWidthUp = new CSSEffect({
        animatedAttrs: {
          width: `${this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize}px`,
          height: `${this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize}px`,
          border: this.attrs.border === true ? `${this.attrs.maxCirlcleSize / 2}px solid ${this.attrs.color}` : `${0}px solid ${this.attrs.color}`
        },
        initialValues: {
          width: "0px",
          height: "0px",
          border: this.attrs.border === true ? `${0}px solid ${this.attrs.color}` : `${0}px solid ${this.attrs.color}`
        }
      }, {
        duration: 250,
        selector: ".circle-item-" + i
      });
      this.addIncident(circleWidthUp, 0);
      const circleWidthDown = new CSSEffect({
        animatedAttrs: {
          width: `${this.attrs.border === true ? this.attrs.maxCirlcleSize : 0}px`,
          height: `${this.attrs.border === true ? this.attrs.maxCirlcleSize : 0}px`,
          border: `${0}px solid ${this.attrs.color}`
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      const r = this.randomIntFromInterval(this.attrs.maxCirlcleSize, this.attrs.width - this.attrs.maxCirlcleSize);
      crossList.push(`<div style="left: ${r}px" class="circle circle-item-${i}"></div>`);
    }

    return `
      <div class="wrapper">
        ${crossList.join("")}
      </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height:${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        justify-content: center;
        align-items: center;
      }
      .circle{
        background: ${this.attrs.border === true ? "transparent" : this.attrs.color};
        width:${this.attrs.maxCirlcleSize}px;
        height:${this.attrs.maxCirlcleSize}px;
        border-radius: 100%;
        position: absolute;

      }
    `;
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
          top: `${-this.attrs.maxCirlcleSize}px`
        },
        initialValues: {
          top: `${this.attrs.height}px`
        }
      }, {
        duration: Math.round(duration),
        selector: ".circle-item-" + i
      });
      this.addIncident(circleTop, 0);
      const circleWidthUp = new CSSEffect({
        animatedAttrs: {
          width: `${this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize}px`,
          height: `${this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize}px`,
          border: this.attrs.border === true ? `${this.attrs.maxCirlcleSize / 2}px solid ${this.attrs.color}` : `${0}px solid ${this.attrs.color}`
        },
        initialValues: {
          width: "0px",
          height: "0px",
          border: this.attrs.border === true ? `${0}px solid ${this.attrs.color}` : `${0}px solid ${this.attrs.color}`
        }
      }, {
        duration: Math.round(duration / 2),
        selector: ".circle-item-" + i
      });
      this.addIncident(circleWidthUp, 0);
      const circleWidthDown = new CSSEffect({
        animatedAttrs: {
          width: `${this.attrs.border === true ? this.attrs.maxCirlcleSize : 0}px`,
          height: `${this.attrs.border === true ? this.attrs.maxCirlcleSize : 0}px`,
          border: `${0}px solid ${this.attrs.color}`
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const dotsList = [];

    for (let i = 0; i < this.attrs.items; i++) {
      dotsList.push(` <div class="dots dots-item-${i}"></div>`);
    }

    return `
      <div class="wrapper">
        ${dotsList.join("")}
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        display: grid;
       
        grid-template-columns: repeat(${Math.round(this.attrs.items / this.attrs.rows)}, ${this.attrs.columnGap}px);
        grid-row-gap: ${this.attrs.rowGap}px;
        justify-items: center;
      }
      
      .dots {
        background: ${this.attrs.color};
        height: ${this.attrs.dotSize}px;
        width: ${this.attrs.dotSize}px;
        border-radius: 100%;
        position: relative;
      }
    `;
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
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      this.array.push(0);
      crossList.push(` <div class="cross cross-item-${i}"></div>`);
    }

    return `
      <div class="wrapper">
        <div class= "cross-wrapper cross-wrapper-0">
          ${crossList.join("")}
        </div>
        <div class= "cross-wrapper cross-wrapper-1">
          ${crossList.join("")}
        </div>
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        height: ${this.attrs.crossSize * 2 + this.attrs.crossSize / 2}px;
      }

      .cross-wrapper{
        display:flex;
        position :absolute;
        width:${this.attrs.width}px;
        justify-content: space-around;
        top:${this.attrs.crossSize + this.attrs.crossSize / 2}px;
      }

      .cross {
        background: ${this.attrs.color};
        height: ${this.attrs.crossSize}px;
        width: ${this.attrs.crossThickness}px;
        position: relative;
      }
   
      .cross:after {
        background: ${this.attrs.color};
        content: "";
        height: ${this.attrs.crossThickness}px;
        left: -${this.attrs.crossSize / 2 - this.attrs.crossThickness / 2}px;
        position: absolute;
        top: ${this.attrs.crossSize / 2 - this.attrs.crossThickness / 2}px;
        width: ${this.attrs.crossSize}px;
      }
    `;
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
var version = "1.4.0";

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
