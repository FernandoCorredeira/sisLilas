import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisLilasPage } from './sis-lilas.page';

describe('SisLilasPage', () => {
  let component: SisLilasPage;
  let fixture: ComponentFixture<SisLilasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SisLilasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
