import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  styles: [`
    .online {
      color: blue;
    }
  `],
  templateUrl: './server.component.html'
})

export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = 'online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
