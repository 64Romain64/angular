import { Component, OnInit } from '@angular/core';
import { GremlinsService } from 'src/app/systeme/services/gremlins.service';

@Component({
  selector: 'app-edition-gremlin',
  templateUrl: './edition-gremlin.component.html',
  styleUrls: ['./edition-gremlin.component.css']
})
export class EditionGremlinComponent implements OnInit {

  constructor(public gremlinServ:GremlinsService) { }

  ngOnInit(): void {
  }

}
