interface _MockFunction<F> {
  (...args: any[]): F;
  new (...args: any[]): F;
  then<T>(fn: () => T): Promise<T>;
  catch(): Promise<void>;
  finally(fn: () => void): Promise<void>;
}

type MockFunction = _MockFunction<MockFunction> & {
  readonly [key: string | symbol]: MockFunction;
};

declare const mock: MockFunction;

export = mock;
