import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCirurgiasComponent } from './listar-cirurgias.component';

describe('ListarCirurgiasComponent', () => {
  let component: ListarCirurgiasComponent;
  let fixture: ComponentFixture<ListarCirurgiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCirurgiasComponent]
    });
    fixture = TestBed.createComponent(ListarCirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
