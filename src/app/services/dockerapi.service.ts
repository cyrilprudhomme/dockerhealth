import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DockerapiService {

  constructor(private http: HttpClient) {
  }

  getAllContainers() {
    'use strict';
    const {Docker} = require('node-docker-api');

    const docker = new Docker({socketPath: '/var/run/docker.sock'});

// List
    docker.container.list()
      // Inspect
      .then((containers: { status: () => any; }[]) => containers[0].status())
      .then((container: { stats: () => any; }) => container.stats())
      .then((stats: { on: (arg0: string, arg1: { (stat: any): void; (err: any): void; }) => void; }) => {
        stats.on('data', stat => console.log('Stats: ', stat.toString()))
        stats.on('error', err => console.log('Error: ', err))
      })
      .catch((error: any) => console.log(error));
  }
}
