import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersyaratanComponent } from './persyaratan.component';

describe('PersyaratanComponent', () => {
  let component: PersyaratanComponent;
  let fixture: ComponentFixture<PersyaratanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersyaratanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersyaratanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
