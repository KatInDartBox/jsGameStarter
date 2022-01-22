import { Box } from "./utils/box.js";

export class Player extends Box {
  /** @param {import('./state.js').tState} state */
  constructor(state) {
    const canvas = state.canvas;
    this.width = 0;
    this.height = 0;
    // put player on bottom center
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height;
    super(this.x, this.y, this.width, this.height);
  }

  /** @param {import('./state.js').tState} state */
  draw(state) {
    const ctx = state.ctx;
    const bbox = this.bbox;

    // draw rectangle
    ctx.strokeRect(bbox.left, bbox.top, bbox.width, bbox.height);
  }

  /** @param {import('./state.js').tState} state */
  update(state) {
    this.draw(state);
  }
}
