import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExamplessComponent } from './map-exampless.component';

describe('MapExamplessComponent', () => {
  let component: MapExamplessComponent;
  let fixture: ComponentFixture<MapExamplessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapExamplessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapExamplessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
