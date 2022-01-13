import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailResponse } from 'src/app/shared/models/productDetails.model';

@Component({
  selector: 'netflix-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {

  @Input() info!: DetailResponse;
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

}
