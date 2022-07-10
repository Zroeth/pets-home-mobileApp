import { Component, OnInit } from '@angular/core';


declare var SqlServer: any;

(<any>window).SqlServer

@Component({
  selector: 'app-agregar-cuentas',
  templateUrl: './agregar-cuentas.page.html',
  styleUrls: ['./agregar-cuentas.page.scss'],
})
export class AgregarCuentasPage implements OnInit {

  user={
    email:"",
    password:""
  }
  constructor() { }

  ngOnInit() {
  }
  async idk()
  {
    SqlServer.init('holauwu.database.windows.net', 'SQLSERVER', 'adminuwu', 'Salu2uwu',"Hola", result => {
      console.log(JSON.stringify(result));
    })
    
  }
}
