import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreappComponent } from './storeapp.component';

describe('StoreappComponent', () => {
  let component: StoreappComponent;
  let fixture: ComponentFixture<StoreappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
