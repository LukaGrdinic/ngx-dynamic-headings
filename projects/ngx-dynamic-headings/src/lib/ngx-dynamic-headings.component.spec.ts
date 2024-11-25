import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicHeadingsComponent } from './ngx-dynamic-headings.component';

describe('NgxDynamicHeadingsComponent', () => {
  let component: NgxDynamicHeadingsComponent;
  let fixture: ComponentFixture<NgxDynamicHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDynamicHeadingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
