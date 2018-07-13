import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testserver';
  serverCreated = false;
  serversList = ['testserver','myserver'];

  constructor() {

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serversList.push(this.serverName);
    this.serverCreationStatus = 'Server was created named '+this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
