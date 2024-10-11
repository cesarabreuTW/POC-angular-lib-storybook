import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebulaUiComponent } from './nebula-ui.component';

describe('NebulaUiComponent', () => {
  let component: NebulaUiComponent;
  let fixture: ComponentFixture<NebulaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NebulaUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NebulaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
