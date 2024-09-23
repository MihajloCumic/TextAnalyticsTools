import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityExtractionResultsComponent } from './entity-extraction-results.component';

describe('EntityExtractionResultsComponent', () => {
  let component: EntityExtractionResultsComponent;
  let fixture: ComponentFixture<EntityExtractionResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityExtractionResultsComponent]
    });
    fixture = TestBed.createComponent(EntityExtractionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
