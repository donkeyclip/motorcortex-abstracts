import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
export default class CrossMoveRightOutline extends HTMLClip {
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
    for (let i = 0; i <= this.attrs.steps; i++) {
      crossList.push(
        `<svg class="cross-item cross-item-${i}" style="left:${
          (this.attrs.travelDistance / this.attrs.steps) * i
        }px;transform: rotate(${Math.floor(Math.random() * 361)}deg)" height="${
          this.attrs.crossSize
        }px" viewBox="0 0 512 512" width="${
          this.attrs.crossSize
        }px" xmlns="http://www.w3.org/2000/svg">
           <path d="m336 512h-160v-177h-176v-160h176v-175h160v175h176v160h-176zm-120-40h80v-177h176v-80h-176v-175h-80v175h-176v80h176zm0 0"/>
        </svg>`
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

      .cross-item{
        fill: ${this.attrs.color};
        position:relative;
      }
    `;
  }

  buildTree() {
    for (let i = 0; i <= this.attrs.steps; i++) {
      const crossOpacityOn = new CSSEffect(
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
          selector: ".cross-item-" + i,
        }
      );

      this.addIncident(crossOpacityOn, 500 * i + 1);

      const crossOpacityOff = new CSSEffect(
        {
          animatedAttrs: {
            opacity: 0,
          },
          initialValues: {
            opacity: 1,
          },
        },
        {
          duration: 1,
          selector: ".cross-item-" + i,
        }
      );

      this.addIncident(crossOpacityOff, 500 * i + 1 + 500);
    }
  }
}
