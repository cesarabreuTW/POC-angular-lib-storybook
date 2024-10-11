import { TestBed } from '@angular/core/testing';

import { NebulaUiService } from './nebula-ui.service';

describe('NebulaUiService', () => {
  let service: NebulaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebulaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
