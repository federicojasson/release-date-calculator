const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let window;

function bootstrap() {
  window = new BrowserWindow({
    width: 800,
    height: 600
  });

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file',
    slashes: true
  }));

  window.webContents.openDevTools();

  window.on('closed', () => {
    window = null;
  });
}

app.on('ready', bootstrap);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    bootstrap();
  }
});
