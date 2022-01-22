import { Box } from "./utils/box.js";

/** @typedef {import('./state.js').tState} tState */

export class Bullet extends Box {
  /** @param {tState} state */
  constructor(state) {
    this.frame = {
      i: 0,
      x: 0,
      y: 0,
    };
    super(this.x, this.y, this.width, this.height);
  }

  /** @param {tState} state */
  draw(state) {
    const ctx = state.ctx;
  }

  /** @param {tState} state */
  update(state) {}
}
/** @param {tState} state */
export function handleUpdateBullets(state) {
  const bullets = state.bullets;

  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    if (bullet) {
      bullet.update(state);
    }
    if (bullet.bbox.bottom + bullet.bbox.height * 2 <= 0) {
      bullets.splice(i, 1);
    }
  }
}
