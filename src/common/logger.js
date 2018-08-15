const fs = require('fs');

class Logger {

  constructor(
    defaultLevel,
    defaultConsoleOut,
    defaultWriteFile,
    instanceId
  ) {
    this.DEFAULT_LEVEL = defaultLevel;
    this.DEFAULT_CONSOLE_OUT = defaultConsoleOut;
    this.DEFAULT_WRITE_FILE = defaultWriteFile;
    this.INSTANCE_ID = instanceId;
  }

  log(severity, message, toConsole) {
    if (toConsole) {
      console.log(severity, message);
    }
    fs.writeFile(
      `../../log/${Date.now()}-${this.INSTANCE_ID}`,
      `${Date.now()}: ${message}`,
      err => {
        if (err) {
          return console.log(err);
        }
      }
    );
  }
}

module.exports = Logger;
