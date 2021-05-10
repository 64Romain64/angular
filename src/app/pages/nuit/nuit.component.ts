import { Component, OnInit } from '@angular/core';
import { GremlinsService } from 'src/app/systeme/services/gremlins.service';

@Component({
  selector: 'app-nuit',
  templateUrl: './nuit.component.html',
  styleUrls: ['./nuit.component.css']
})
export class NuitComponent implements OnInit {

  constructor(public gremlinsServ:GremlinsService) { }

  ngOnInit(): void {
  }

}
