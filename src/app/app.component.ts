import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do App Material2!';
  active:boolean=false;
  urlset:boolean=false;
  intervalUID;
  uid;
  editItemKey:string;
  editItem:string;
  todos:FirebaseListObservable<any[]>;
  constructor(public af:AngularFire){
  	this.intervalUID=setInterval(()=>{
  		this.uid=document.getElementById("uid");
  		if(this.uid.value!="not_set"){
  			this.todos=this.af.database.list('/'+this.uid.value);
  			this.active=true;
  			this.urlset=true;
  			clearInterval(this.intervalUID);
  		}
  	},1000);
  }
  submit( todo:string){
  	this.todos.push({"todo":todo,"status":"incomplete"});
  	this.active=false;
  	setTimeout(()=>{this.active=true;},0);
  }
  statusUpdater(key:string, status:string){
  	if(status=="incomplete"){
  		this.todos.update(key,{"status":"completed"});
  	}else if(status=="completed"){
	  	this.todos.update(key,{"status":"incomplete"});
  	}
  }
  deleteItem(key:string){
  	this.todos.remove(key);
  }
  edit(key:string, value:string){
  	this.editItemKey=key;
  	this.editItem=value;
  	this.active=false;
  }
  update(value:string){
  	this.todos.update(this.editItemKey,{"todo":value});  	
  	setTimeout(()=>{this.active=true;},0);
  }
}
