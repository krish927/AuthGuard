import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'action'];
  dataSource: any = [];
  userList: any = [];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;
  
  constructor(private as: AuthServiceService){
    this.getData();
  }

  getData(){
    this.as.getAll().subscribe(data =>{
      console.log(data);
      this.userList = data
      this.dataSource = new MatTableDataSource(this.userList)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  updateUser(id: any){
    console.log(id);
    
  }

}
