export interface Action {}

export interface Input<T> {
  id: string;
  customInData: T;
}

export interface Output<T> {
  id: string;
  customOutData: T;
}

export interface Step<T, X> {
  id: string;
  order: number;
  action: Action;
  input: Input<T>;
  output: Output<X>;
}

export interface Workflow {
  id: string;
  name: string;
  steps: Step<any, any>[];
}
