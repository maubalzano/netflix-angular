import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLinks: string[] = ["Domande frequenti","Centro assistenza","Account","Media Center","Rapporti con gli investitori","Opportunità di lavoro","Riscatta carte regalo","Acquista carte regalo","Come guardare Netflix","Condizioni di utilizzo","Privacy","Preferenze per i cookie","Informazioni sull'azienda","Contattaci","Test di velocità","Note legali","Solo su Netflix"]
  constructor() { }

  ngOnInit(): void {
  }

}
