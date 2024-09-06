import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from '../../data-access/flight.service';
import { DummyFlightService } from '../../data-access/dummy-flight.service';
import { By } from '@angular/platform-browser';

describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let ctrl: HttpTestingController;

  function setInput(selector: string, value: string): void {
    const input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearchComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    ctrl = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have any flights loaded initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should load flights when user entered from and to', () => {
    component.from.set('Graz');
    component.to.set('Hamburg');
    component.search();
    const req = ctrl.expectOne('https://demo.angulararchitects.io/api/flight?from=Graz&to=Hamburg');
    req.flush([
      {
        id: 22,
        from: 'here',
        to: 'there',
        date: '',
        delayed: false,
      },
      {
        id: 23,
        from: 'here',
        to: 'there',
        date: '',
        delayed: false,
      },
      {
        id: 23,
        from: 'here',
        to: 'there',
        date: '',
        delayed: false,
      },
    ]);

    expect(component.flights.length).toBe(3);
    ctrl.verify();
  });

  it('should *not* load flights when user did not enter from and to', () => {
    component.from.set('');
    component.to.set('');
    component.search();

    expect(component.flights.length).toBe(0);
    ctrl.verify();
  });

  it('should have a disabled search button w/o params', fakeAsync(async () => {
    tick();
    // Set values
    setInput('input[name=from]', '');
    setInput('input[name=to]', '');
    // Trigger change detection
    fixture.detectChanges();
    // Get disabled
    const disabled = fixture.debugElement.query(By.css('button')).nativeElement.disabled;
     expect(disabled).toBeTruthy();
  }));
});
