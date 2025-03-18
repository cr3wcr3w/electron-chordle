const { contextBridge, ipcRenderer } = require("electron");

// ipcRenderer.send/on for fire-and-forget messages.
// ipcRenderer.invoke/handle for request-response communication.
// ipcRenderer.on/emit for real-time events.
// ipcRenderer.once for one-time messages.
// ipcRenderer.removeListener to clean up event listeners.
contextBridge.exposeInMainWorld("electron", {
  helloWorld: () => {
    console.log("hello world");
  },
});
