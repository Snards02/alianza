import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
  let service: ClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],
    providers: [ClientesService]
});
    service = TestBed.inject(ClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
