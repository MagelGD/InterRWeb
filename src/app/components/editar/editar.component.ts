import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  
  constructor( 
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ApiService: ApiService
  ) {
    if(data.item == null){

      this.data.item = {primerNombre: '', segundoNombre: '', primerApellido: '', segundoApellido: '', carnet: '', numeroDocumento: 0, creditos:0, fechaCreacion:  new Date().toISOString(), fechaModificacion: null, idEstudiante: 0, estado: true }

    }
    console.log(data);
   }
 

  save(): void {
    if(this.data.isEdit){

    }else{
      console.log('datos enviados', this.data.item);
      this.ApiService.createEstudiante(this.data.item).subscribe({
        next: (reponse) => {
          console.log('Estudiante creado: ', Response);
          this.dialogRef.close(this.data);
        },
        error: (err) =>{

        }
      });
    }
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
