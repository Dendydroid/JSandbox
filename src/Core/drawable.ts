import { IException } from "../Interfaces/iexception";
import { COLORS } from "./colors";

export class DrawableMessage implements IException {
  private debugData: { err: any, message: string } = { err: null, message: "" };

  getDebugData(): object {
    return this.debugData;
  }

  throw(err: object, message: string, terminate: boolean = false): void {
    this.debugData = {
      err,
      message
    };

    this.drawException(terminate);
  }

  private drawException(terminate: boolean = false) {
    
    if (terminate) {
      console.log(COLORS.FgRed, this.debugData.message);
      console.dir(COLORS.FgRed, `\n\r Error message: '${this.debugData.err.message}'`);
    } else {
      console.log(COLORS.FgYellow, this.debugData.message);
      console.dir(COLORS.FgMagenta, `\n\r Error message: '${this.debugData.err.message}'`);
    }

    console.log(COLORS.Reset);

    if (terminate) {
      throw this.debugData.err;
      process.exit(0);
    }
  }

  static drawDebug(message: string, debug_data: object) {
    console.log(COLORS.FgCyan,message);
    console.log(COLORS.FgCyan, `DATA:`, debug_data);
    console.log(COLORS.Reset);
  }

  static throwException(message:string, err: any = null, terminate: boolean = false) {
    let exception = new DrawableMessage();
    exception.throw(err, message, terminate);
  }
}
