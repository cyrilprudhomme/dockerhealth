import {Component, OnInit} from '@angular/core';
import {DockerapiService} from "../services/dockerapi.service";

interface container_info {
  Id: string,
  RepoTags: string
}

@Component({
  selector: 'app-docker',
  templateUrl: './docker.page.html',
  styleUrls: ['./docker.page.scss'],
})
export class DockerPage implements OnInit {

  containerList: any

  constructor(private dockerapiService: DockerapiService) {
    // this.containerList=this.dockerapiService.getAllContainers()
    this.containerList = this.dockerapiService.getAllContainers()
    console.log(this.containerList)
  }

  ngOnInit() {
  }

}
