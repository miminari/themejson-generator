figma.showUI(__html__);
figma.ui.resize(500, 500);

// 現在のファイルの塗りのスタイルを取得
const styles = figma.getLocalPaintStyles();

if (figma.editorType === "figma") {
  figma.ui.onmessage = (message) => {
    console.log(message);
    let currentData;
    figma.ui.postMessage({ type: "render", body: currentData });
  }
}