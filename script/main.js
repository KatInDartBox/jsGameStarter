import { handleInitState } from "./state.js";
import { initCanvas } from "./canvas.js";
import { Player } from "./player.js";
import { initGame } from "./game.js";

window.addEventListener("load", async () => {
  const state = await handleInitState();
  initCanvas(state);

  initGame(state);
});
