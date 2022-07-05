import { TestBed } from '@angular/core/testing';

import { HttperorInterceptor } from './httperor.interceptor';

describe('HttperorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttperorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttperorInterceptor = TestBed.inject(HttperorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
