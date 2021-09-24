import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import AbstractsDefinition from "../dist/motorcortex-abstracts.umd";

const Plugin = loadPlugin(AbstractsDefinition);

const clip = new HTMLClip({
  css: `
    .container {
      overflow: hidden;
      width:425px;
      height:240px;
    }
    .wrapper{
      width:1280px;
      height:720px;
      display:flex;
      font-family: 'Poppins', sans-serif;
      display: grid;
      grid-row-gap:50px;
      grid-column-gap:50px;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
    .flex{
      display: flex;
      justify-content: center;
      background-color: #bfbfbf;
      height: 100%;
      width: 100%;
    }
  `,
  html: `
    <div class="flex">
      <div class="wrapper">
        <div class="container container1"></div>
        <div class="container container2"></div>
        <div class="container container3"></div>
        <div class="container container4"></div>
        <div class="container container5"></div>
        <div class="container container6"></div>
        <div class="container container7"></div>
        <div class="container container8"></div>
        <div class="container container9"></div>
      </div>
  </div>
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1728px",
    height: "872px",
  },
  id: "root",
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`,
    },
  ],
});

const CrossMoveRight = new Plugin.CrossMoveRight(
  {
    width: 425,
    height: 240,
    crossSize: 30,
    crossThickness: 5,
    travelDistance: 240,
    items: 3,
    color: "#8300ff",
  },
  {
    selector: ".container1",
  }
);

const CrossMoveRightOutline = new Plugin.CrossMoveRightOutline(
  {
    width: 425,
    height: 240,
    crossSize: 30,
    travelDistance: 240,
    steps: 5,
    color: "#8300ff",
  },
  {
    selector: ".container2",
  }
);

const CrossRandom = new Plugin.CrossRandom(
  {
    width: 425,
    crossSize: 30,
    crossThickness: 5,
    items: 12,
    color: "#8300ff",
    rows: 3,
    timing: 0.5,
  },
  {
    selector: ".container3",
  }
);

const VerticalLinesMove = new Plugin.VerticalLinesMove(
  {
    width: 425,
    height: 240,
    maxLineWidth: 250,
    color: "#8300ff",
  },
  {
    selector: ".container4",
  }
);

const CircleExplosion = new Plugin.CircleExplosion(
  {
    width: 425,
    height: 240,
    maxCirlcleSize: 30,
    travelDistance: 200,
    color: "#8300ff",
    items: 5,
    minR: 0,
    maxR: 180,
    border: true,
  },
  {
    selector: ".container5",
  }
);

const CircleBubbleUp = new Plugin.CircleBubbleUp(
  {
    width: 425,
    height: 240,
    maxCirlcleSize: 30,
    travelDistance: 200,
    color: "#8300ff",
    items: 5,
    border: true,
  },
  {
    selector: ".container6",
  }
);

const HorizontalLinesMove = new Plugin.HorizontalLinesMove(
  {
    width: 425,
    height: 240,
    maxLineHeight: 50,
    color: "#8300ff",
  },
  {
    selector: ".container7",
  }
);

const Dots = new Plugin.Dots(
  {
    width: 425,
    dotSize: 10,
    items: 28,
    color: "#8300ff",
    rowGap: 30,
    columnGap: 50,
    rows: 7,
    timing: 1.5,
    repeats: 3,
  },
  {
    selector: ".container8",
  }
);

const CrossRowReveal = new Plugin.CrossRowReveal(
  {
    width: 425,
    crossSize: 30,
    crossThickness: 5,
    items: 8,
    color: "#8300ff",
    reverse: false,
    timing: 1,
  },
  {
    selector: ".container9",
  }
);

clip.addIncident(CrossMoveRight, 0);
clip.addIncident(CrossMoveRightOutline, 0);
clip.addIncident(CrossRandom, 0);
clip.addIncident(VerticalLinesMove, 0);
clip.addIncident(CircleExplosion, 0);
clip.addIncident(CircleBubbleUp, 0);
clip.addIncident(HorizontalLinesMove, 0);
clip.addIncident(Dots, 0);
clip.addIncident(CrossRowReveal, 0);

new Player({ clip });
