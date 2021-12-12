import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDistrictComponent } from './search-district.component';

describe('SearchDistrictComponent', () => {
  let component: SearchDistrictComponent;
  let fixture: ComponentFixture<SearchDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
