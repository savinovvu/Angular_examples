import { PaDiscountPipe } from './pa-discount.pipe';

describe('PaDiscountPipe', () => {
  it('create an instance', () => {
    const pipe = new PaDiscountPipe(null, null);
    expect(pipe).toBeTruthy();
  });
});
