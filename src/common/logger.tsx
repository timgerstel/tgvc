import * as fs from "fs";

export class Logger {
  DEFAULT_LEVEL: string | number; //default log level
  DEFAULT_CONSOLE_OUT: boolean; //default print to console
  DEFAULT_WRITE_FILE: boolean; //default write to log file
  INSTANCE_ID: string; //identifier to determine which logger is being called

  constructor(
    defaultLevel: string | number,
    defaultConsoleOut: boolean,
    defaultWriteFile: boolean,
    instanceId: string
  ) {
    this.DEFAULT_LEVEL = defaultLevel;
    this.DEFAULT_CONSOLE_OUT = defaultConsoleOut;
    this.DEFAULT_WRITE_FILE = defaultWriteFile;
    this.INSTANCE_ID = instanceId;
  }

  log(severity: string | number, message: string, toConsole?: boolean): void {
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
