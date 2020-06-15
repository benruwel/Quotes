import { TimePassedCountPipe } from './time-passed-count.pipe';

describe('TimePassedCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TimePassedCountPipe();
    expect(pipe).toBeTruthy();
  });
});
