import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video: ElementRef;
  @ViewChild('elm') elm: ElementRef;
  menuOpen = false;
  scrollEvent: Observable<any>;

  constructor() {
    this.scrollEvent = fromEvent(window, 'scroll');
    this.scrollEvent.subscribe(() => {
      if (
        this.elm.nativeElement.parentElement.getBoundingClientRect().top < 0
      ) {
        this.elm.nativeElement.classList.add('fixed');
      } else {
        this.elm.nativeElement.classList.remove('fixed');
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.video.nativeElement.muted = true;
  }
}
