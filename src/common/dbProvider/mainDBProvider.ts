import mongoose from 'mongoose';
import { DBProviderBase } from './dbProvider';

export class MainDBProvider extends DBProviderBase {
  constructor(config: any, options?: object) {
    super(config, options);
    this._config = config;
    this._options = options;
  }

  public async initialize(): Promise<void> {
    await mongoose.connect(this._config.connectionString, this._options);
  }

  public async cleanup(): Promise<void> {
    await mongoose.connection.close();
  }
}
