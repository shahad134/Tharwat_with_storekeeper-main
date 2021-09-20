import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderDetailsAcceptComponent } from './order-details -accept.component';

describe('OrderDetailsAcceptComponent', () => {
  let component: OrderDetailsAcceptComponent;
  let fixture: ComponentFixture<OrderDetailsAcceptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsAcceptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetailsAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
