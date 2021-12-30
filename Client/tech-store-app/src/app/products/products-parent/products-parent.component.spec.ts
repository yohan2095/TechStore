import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsParentComponent } from './products-parent.component';

describe('ProductsParentComponent', () => {
  let component: ProductsParentComponent;
  let fixture: ComponentFixture<ProductsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
