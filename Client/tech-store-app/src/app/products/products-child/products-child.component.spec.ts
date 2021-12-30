import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsChildComponent } from './products-child.component';

describe('ProductsChildComponent', () => {
  let component: ProductsChildComponent;
  let fixture: ComponentFixture<ProductsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
