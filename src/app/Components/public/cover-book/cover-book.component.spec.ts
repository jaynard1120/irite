import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverBookComponent } from './cover-book.component';

describe('CoverBookComponent', () => {
  let component: CoverBookComponent;
  let fixture: ComponentFixture<CoverBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
