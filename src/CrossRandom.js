import { CSSEffect, HTMLClip } from "@donkeyclip/motorcortex";

export default class CrossRandom extends HTMLClip {
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
        grid-template-columns: repeat(${Math.round(
          this.attrs.items / this.attrs.rows
        )}, 1fr);
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
    const shuffle = (array) => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };

    const indexArray = Object.keys(this.array);
    const shuffledArray = shuffle(indexArray);

    shuffledArray.map((index, i) => {
      const crossScale = new CSSEffect(
        {
          animatedAttrs: {
            opacity: 1,
          },
          initialValues: {
            opacity: 0,
          },
        },
        {
          duration: 1,
          selector: ".cross-item-" + index,
        }
      );

      this.addIncident(crossScale, 200 * i * (this.attrs.timing || 1));
    });
  }
}
