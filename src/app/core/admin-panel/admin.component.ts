import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.adminService.logout();
  }
}
