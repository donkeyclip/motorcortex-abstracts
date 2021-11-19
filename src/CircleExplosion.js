import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class CircleExplosion extends HTMLClip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`,
      },
    ];
  }

  get html() {
    const crossList = [];
    this.array = [];

    for (let i = 0; i < this.attrs.items; i++) {
      const r = this.randomIntFromInterval(
        this.attrs.minR - 90,
        this.attrs.maxR - 90
      );

      crossList.push(
        `<div style="transform: rotate(${r}deg)" class="circle circle-item-${i}"></div>`
      );
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
        background: ${
          this.attrs.border === true ? "transparent" : this.attrs.color
        };
        width:${this.attrs.maxCirlcleSize}px;
        height:${this.attrs.maxCirlcleSize}px;
        border-radius: 100%;
        position: absolute;
      }
  `;
  }

  buildTree() {
    for (let i = 0; i < this.attrs.items; i++) {
      const circleTop = new CSSEffect(
        {
          animatedAttrs: {
            transform: {
              translateY: `${-this.attrs.travelDistance}px`,
            },
          },
        },
        {
          duration: 500,
          selector: ".circle-item-" + i,
        }
      );

      this.addIncident(circleTop, 0);

      const circleWidthUp = new CSSEffect(
        {
          animatedAttrs: {
            width: `${
              this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize
            }px`,
            height: `${
              this.attrs.border === true ? 0 : this.attrs.maxCirlcleSize
            }px`,
            border:
              this.attrs.border === true
                ? `${this.attrs.maxCirlcleSize / 2}px solid ${this.attrs.color}`
                : `${0}px solid ${this.attrs.color}`,
          },
          initialValues: {
            width: "0px",
            height: "0px",
            border:
              this.attrs.border === true
                ? `${0}px solid ${this.attrs.color}`
                : `${0}px solid ${this.attrs.color}`,
          },
        },
        {
          duration: 250,
          selector: ".circle-item-" + i,
        }
      );

      this.addIncident(circleWidthUp, 0);

      const circleWidthDown = new CSSEffect(
        {
          animatedAttrs: {
            width: `${
              this.attrs.border === true ? this.attrs.maxCirlcleSize : 0
            }px`,
            height: `${
              this.attrs.border === true ? this.attrs.maxCirlcleSize : 0
            }px`,
            border: `${0}px solid ${this.attrs.color}`,
          },
        },
        {
          duration: 250,
          selector: ".circle-item-" + i,
        }
      );

      this.addIncident(circleWidthDown, 250);
    }
  }
}
