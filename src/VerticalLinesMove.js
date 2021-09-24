import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";

const Anime = loadPlugin(AnimeDefinition);

export default class VerticalLinesMove extends HTMLClip {
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
      const lineTop = new Anime.Anime(
        {
          animatedAttrs: {
            height: `${this.attrs.height * 0.6}px`,
            top: `0px`,
          },
          initialValues: {
            height: `0px`,
            top: `${this.attrs.height}px`,
          },
        },
        {
          duration: 500,
          selector: ".line-wrapper-item-" + i,
        }
      );
      this.addIncident(lineTop, 500 * i + 1);
      const lineHeigth = new Anime.Anime(
        {
          animatedAttrs: {
            height: `0px`,
          },
        },
        {
          duration: 400,
          selector: ".line-item-" + i,
        }
      );
      this.addIncident(lineHeigth, 500 + 500 * i + 1);
    }
  }
}
