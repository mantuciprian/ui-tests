import { CarsPipePipe } from './cars-pipe.pipe';

describe('CarsPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CarsPipePipe();
    expect(pipe).toBeTruthy();
  });
});
