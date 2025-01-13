import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-maestra',
  templateUrl: './maestra.component.html',
  styleUrls: ['./maestra.component.css']
})
export class MaestraComponent implements OnInit {
  displayedColumns: string[] = ['Numero Documento', 'Primer Nombre', 'Primer Apellido', 'acciones'];
  data = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private apiService: ApiService, private dialog: MatDialog){}

ngOnInit(): void {
  this.loadData();
}

loadData(): void{
  this.apiService.getData().subscribe({
    next: (Response) => {
      console.log('respuesta de la api', Response);
      this.data.data = Response;
    }, 
    error: (err) => console.error('Error fetching data:', err),
  });
}

editar(item: any): void {

  const dialogRef = this.dialog.open(EditarComponent, {
    width: '800px',
    data: { isEdit: true, item }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      
      this.editar(result.student);
    }
  });
}

eliminar(item: any): void {
  if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
    console.log('Eliminando el registro con ID:', item.numeroDocumento);
    item.estado = false;
    this.apiService.deleteData(item).subscribe({
      next: () => {
        alert('Registro Eliminado con éxito');
        this.loadData(); 
      },
      error: (err) => console.error('Error al eliminar:', err),
    });
  }
}

openCreateStudentModal(): void{
  
  const dialogRef = this.dialog.open(EditarComponent, {
    width: '800px',
    data: { isEdit: false }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.loadData();
    }
  });
}
}
