import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  topics=['Mission Hospital','ESI Hospital Durgapur','Vivekananda Hospital','MAMC Hospital','DPL Main Hospital','Palashdiha UPHC (Urban Primary Health centre)'];
  topicHasError=true;
  submitted=false;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 

 
  constructor() { }

  ngOnInit(): void {
  }
  validateTopic(value:any){
    if(value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }
  onSubmit(){
    alert("You have succesfully registerd and Please bring your valid ID on the selected Time")
  }
}
