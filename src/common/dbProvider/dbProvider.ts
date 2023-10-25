export abstract class DBProviderBase<T = any> {
  public initialized: boolean = false;
  constructor(
    protected _config: T,
    protected _options?: object,
  ) {}

  public abstract initialize(): Promise<void>;
  public abstract cleanup(): Promise<void>;

  private waitUntilInitialized(resolver: (value?: any) => void): void {
    if (this.initialized) {
      resolver();
    } else {
      setTimeout(() => {
        this.waitUntilInitialized(resolver);
      }, 500);
    }
  }

  public onInitialized(): Promise<void> {
    return new Promise((resolver: (value?: any) => void, rejector: (reason: any) => void) => {
      this.waitUntilInitialized(resolver);
    });
  }
}
