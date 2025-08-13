import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAdvancedComponent } from './filter-advanced.component';

describe('FilterAdvancedComponent', () => {
  let component: FilterAdvancedComponent;
  let fixture: ComponentFixture<FilterAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterAdvancedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
