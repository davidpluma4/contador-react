//if ("serviceWorker" in navigator) {
if (navigator.serviceWorker) {
  //console.log("si existe");
  navigator.serviceWorker.register("./serviceWorker.js");
}
