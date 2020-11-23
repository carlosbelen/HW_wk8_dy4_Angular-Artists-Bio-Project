import { Component, OnInit } from '@angular/core';
// ADDED: checks to see what type of display is being used and then change output accordingly
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// ?Are you a mobile device or not?
// Checking for the response from the above BreakpointObserver for mobile layout (for a True/False value):
import { Observable } from 'rxjs';
//Check the Observable and filter the results passed back to see what the True/False represents, 'shareReplay' tells it to keep doing it
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private BreakpointObserver: BreakpointObserver) { }

  // creating a Variable that will tell the application if we are inside of a mobile device
  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),shareReplay()
      )

  ngOnInit(): void {
  }

}
