import { CSSEffect, HTMLClip } from "@donkeyclip/motorcortex";

export default class Dots extends HTMLClip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`,
      },
    ];
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
       
        grid-template-columns: repeat(${Math.round(
          this.attrs.items / this.attrs.rows
        )}, ${this.attrs.columnGap}px);
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
    const dotsOpacity = new CSSEffect(
      {
        animatedAttrs: {
          opacity: 1,
        },
        initialValues: {
          opacity: 0,
        },
      },
      {
        duration: 100 * this.attrs.timing,
        selector: ".dots",
        repeats: this.attrs.repeats,
      }
    );
    this.addIncident(dotsOpacity, 0);
  }
}
