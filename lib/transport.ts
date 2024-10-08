import type { LedgerTransportOptions, TransportMessage } from './interface/struct.ts';

export class LedgerTransport {
  protected options: LedgerTransportOptions;

  public constructor(options: LedgerTransportOptions) {
    this.options = options;
  }

  public async consume(payload: TransportMessage): Promise<void> {}
}
