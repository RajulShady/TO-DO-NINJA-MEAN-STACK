import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  task:String;
 
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
  },
  err => {
    console.log(err);
    return false;
  });
}


onTaskSubmit(){
  const Todo = {
    task: this.task
  }
  this.authService.addTask(Todo).subscribe(data =>{
    if(data.success){
      console.log('Task Added');
    }else{
      console.log('Add again');
    }
  });
}

} 


