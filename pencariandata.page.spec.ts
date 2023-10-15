import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PencariandataPage } from './pencariandata.page';

describe('PencariandataPage', () => {
  let component: PencariandataPage;
  let fixture: ComponentFixture<PencariandataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PencariandataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
