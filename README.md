# MotorCortex-Abstracts

**Table of Contents**

- [MotorMortex-Abstracts](#motorcortex-abstracts)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [CrossMoveRight](#crossmoveright)
  - [CrossMoveRightOutline](#crossmoverightoutline)
  - [CrossRandom](#crossrandom)
  - [CrossRowReveal](#crossrowreveal)
  - [VerticalLinesMove](#verticallinesmove)
  - [HorizontalLinesMove](#horizontallinesmove)
  - [CircleExplosion](#circleexplosion)
  - [CircleBubbleUp](#circlebubbleup)
  - [Dots](#dots)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-abstracts/demo/index.html)

# Intro / Features

MotorCortex-Abstracts helps you add cross, line, circle, dot and bubble effects in your clip in an easy way.

This Plugin exposes nine Incidents:
- CrossMoveRight
- CrossMoveRightOutline
- CrossRandom
- CrossRowReveal
- VerticalLinesMove
- HorizontalLinesMove
- CircleExplosion
- CircleBubbleUp
- Dots

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-abstracts
# OR
$ yarn add @donkeyclip/motorcortex-abstracts
```

## Importing and Loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import AbstractsDefinition from "@donkeyclip/motorcortex-abstracts";
const Plugin = loadPlugin(AbstractsDefinition);
```

# Creating Incidents

## CrossMoveRight

```javascript
const CrossMoveRight = new Plugin.CrossMoveRight(
  {
    width: 425,
    height: 240,
    crossSize: 30,
    crossThiknes: 5,
    travelDistance: 240,
    items: 3,
    color: "#8300ff",
  },
  {
    selector: ".container1",
  }
);
```

### CrossMoveRight Attrs

| Name           |                   Are                   |                Values |
| -------------- | :-------------------------------------: | --------------------: |
| width          |            width of incident            |                   num |
| height         |           height of incident            |                   num |
| crossSize      |        height and width of cross        |                   num |
| crossThickness |          cross line thickness           |                   num |
| travelDistance |         how far cross will move         |                   num |
| items          | how many crosses will be in an incident |                   num |
| color          |          color of the crosses           | hex,rgb or color name |

## CrossMoveRightOutline

```javascript
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
```

### CrossMoveRightOutline Attrs

| Name           |                       Are                       |                Values |
| -------------- | :---------------------------------------------: | --------------------: |
| width          |                width of incident                |                   num |
| height         |               height of incident                |                   num |
| crossSize      |            height and width of cross            |                   num |
| travelDistance |             how far cross will move             |                   num |
| steps          | how many steps will cross make to reach the end |                   num |
| color          |              color of the crosses               | hex,rgb or color name |

## CrossRandom

```javascript
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
```

### CrossRandom Attrs

| Name           |              Are               |                Values |
| -------------- | :----------------------------: | --------------------: |
| width          |       width of incident        |                   num |
| crossSize      |   height and width of cross    |                   num |
| crossThickness |      cross line thickness      |                   num |
| items          |     how many cross will be     |                   num |
| color          |      color of the crosses      | hex,rgb or color name |
| rows           | how many rows of cross will be |                   num |
| timing         |  incident duration multiplier  |                   num |

## CrossRowReveal

```javascript
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
```

### CrossRowReveal Attrs

| Name           |                              Are                               |                Values |
| -------------- | :------------------------------------------------------------: | --------------------: |
| width          |                       width of incident                        |                   num |
| height         |                       height of incident                       |                   num |
| crossSize      |                   height and width of cross                    |                   num |
| crossThickness |                      cross line thickness                      |                   num |
| items          |            how many crosses will be in an incident             |                   num |
| color          |                      color of the crosses                      | hex,rgb or color name |
| reverse        | if crosses will be revealed from left to right or the opposite |               boolean |
| timing         |                  incident duration multiplier                  |                   num |

## VerticalLinesMove

```javascript
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
```

### VerticalLinesMove Attrs

| Name         |             Are             |                Values |
| ------------ | :-------------------------: | --------------------: |
| width        |      width of incident      |                   num |
| height       |     height of incident      |                   num |
| maxLineWidth | the maximum width of a line |                   num |
| color        |    color of the crosses     | hex,rgb or color name |

## HorizontalLinesMove

```javascript
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
```

### HorizontalLinesMove Attrs

| Name         |             Are             |                Values |
| ------------ | :-------------------------: | --------------------: |
| width        |      width of incident      |                   num |
| height       |     height of incident      |                   num |
| maxLineWidth | the maximum width of a line |                   num |
| color        |    color of the crosses     | hex,rgb or color name |

## CircleExplosion

```javascript
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
```

### CircleExplosion Attrs

| Name           |                      Are                      |                Values |
| -------------- | :-------------------------------------------: | --------------------: |
| width          |               width of incident               |                   num |
| height         |              height of incident               |                   num |
| maxCirlcleSize |         the maximum size of a circle          |                   num |
| travelDistance |            how far cross will move            |                   num |
| color          |             color of the crosses              | hex,rgb or color name |
| items          |           how many circles will be            |                   num |
| minR           | indicate the minimum angle of circle movement |                   num |
| maxR           | indicate the maximum angle of circle movement |                   num |
| border         |           if circle will be hollow            |               boolean |

## CircleBubbleUp

```javascript
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
```

### CircleBubbleUp Attrs

| Name           |             Are              |                Values |
| -------------- | :--------------------------: | --------------------: |
| width          |      width of incident       |                   num |
| height         |      height of incident      |                   num |
| maxCirlcleSize | the maximum size of a circle |                   num |
| travelDistance |   how far cross will move    |                   num |
| color          |     color of the crosses     | hex,rgb or color name |
| items          |   how many circles will be   |                   num |
| border         |   if circle will be hollow   |               boolean |

## Dots

```javascript
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
```

### Dots Attrs

| Name      |                 Are                  |                Values |
| --------- | :----------------------------------: | --------------------: |
| width     |          width of incident           |                   num |
| height    |          height of incident          |                   num |
| dotSize   |          the size of a dots          |                   num |
| color     |         color of the crosses         | hex,rgb or color name |
| rowGap    |  the gap between every row of dots   |                   num |
| columnGap | the gap between every column of dots |                   num |
| items     |        how many dots will be         |                   num |
| rows      |    how many rows of dots will be     |                   num |
| timing    |     incident duration multiplier     |                   num |
| repeats   | how many times dots will be flashing |                   num |

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes


# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
