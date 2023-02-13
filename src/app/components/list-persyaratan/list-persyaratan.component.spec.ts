import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersyaratanComponent } from './list-persyaratan.component';

describe('ListPersyaratanComponent', () => {
  let component: ListPersyaratanComponent;
  let fixture: ComponentFixture<ListPersyaratanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersyaratanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPersyaratanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
