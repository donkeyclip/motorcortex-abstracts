import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";

const Anime = loadPlugin(AnimeDefinition);

export default class CrossRowReveal extends HTMLClip {
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

      const reveal = new Anime.Anime(
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
          selector: ".cross-item-" + select,
          easing: "easeOutQuad",
        }
      );

      this.addIncident(reveal, 200 * i * (this.attrs.timing || 1));
    }

    const crossTop = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0px",
        },
      },
      {
        duration: 350,
        selector: ".cross-wrapper-1",
        easing: "easeOutQuad",
      }
    );
    this.addIncident(
      crossTop,
      200 * (this.attrs.timing || 1) * this.attrs.items
    );
  }
}
