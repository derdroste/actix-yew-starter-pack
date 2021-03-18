import init, { run_app } from '../public/pkg/yew_wasm_pack_minimal.js';
async function main() {
   await init('../public/pkg/yew_wasm_pack_minimal_bg.wasm');
   run_app();
}
main()