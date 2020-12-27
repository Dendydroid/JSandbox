import fs from 'fs';
import path from 'path';
import { DrawableMessage } from './Core/drawable';
import { ERROR_MESSAGES } from './Core/error_messages';
require('dotenv').config();


export class EngineConfig {
  static get() {
    let config_path = path.join(__dirname, process.env.ENGINE_CONFIG_PATH);
    let config: any = {};

    try {
      config = fs.readFileSync(config_path);
    } catch (error) {
      DrawableMessage.throwException(`${ERROR_MESSAGES.CONFIG_LOAD_FAIL}`, error, true);
    }

    if (process.env.DEBUG_MODE) {
      DrawableMessage.drawDebug(`Loading engine configuration...`, { src: config_path });
    }

    return JSON.parse(config);
  }
}