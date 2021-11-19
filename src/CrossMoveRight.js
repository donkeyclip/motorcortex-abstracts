import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class CrossMoveRight extends HTMLClip {
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
    for (let i = 1; i <= this.attrs.items; i++) {
      const left =
        i === 1
          ? this.attrs.crossSize / 2 - this.attrs.crossThickness / 2
          : this.attrs.crossSize * i;

      crossList.push(
        `<div style="left: ${left}px;" class="cross-wrapper-item cross-wrapper-item-${i}">
          <div class="cross cross-item-${i}"></div>
        </div>`
      );
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
      const crossScale = new CSSEffect(
        {
          animatedAttrs: {
            transform: {
              scale: 1,
              rotate: `-${Math.floor(Math.random() * 190)}deg`,
            },
          },
          initialValues: {
            transform: {
              scale: 0,
              rotate: "0deg",
            },
          },
        },
        {
          duration: 1000,
          selector: ".cross-item-" + (this.attrs.items - i + 1),
        }
      );

      this.addIncident(crossScale, 500 * i - 500);

      const lastEnd = 250 * this.attrs.items + 250 * i;
      const left = this.attrs.crossSize * (i + 1);
      const crossLeft = new CSSEffect(
        {
          animatedAttrs: {
            left: `${this.attrs.travelDistance - left}px`,
            transform: {
              rotate: "197deg",
            },
          },
        },
        {
          duration: 700,
          selector: ".cross-wrapper-item-" + (this.attrs.items - i + 1),
          easing: "easeInOutQuad",
        }
      );

      this.addIncident(crossLeft, lastEnd);
    }
  }
}
