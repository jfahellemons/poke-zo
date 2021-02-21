import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pdf-menu',
  templateUrl: './pdf-menu.component.html',
  styleUrls: ['./pdf-menu.component.scss']
})
export class PdfMenuComponent implements OnInit {
  zoom = 0.7;
  @Input() set isActive(active: boolean) {
    this.zoom = active ? 1 : 0.5;
  }
  pdfSrc = '../../../../assets/pdf/menu.pdf';

  constructor() { }

  ngOnInit() {
  }

}
