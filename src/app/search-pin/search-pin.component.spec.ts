import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPinComponent } from './search-pin.component';

describe('SearchPinComponent', () => {
  let component: SearchPinComponent;
  let fixture: ComponentFixture<SearchPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
