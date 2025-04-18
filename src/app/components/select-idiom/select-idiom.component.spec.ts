import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIdiomComponent } from './select-idiom.component';

describe('SelectIdiomComponent', () => {
  let component: SelectIdiomComponent;
  let fixture: ComponentFixture<SelectIdiomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectIdiomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectIdiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
