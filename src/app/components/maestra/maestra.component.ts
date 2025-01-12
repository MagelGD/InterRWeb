import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

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

constructor(private apiService: ApiService){}

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
  // Aquí puedes implementar la lógica de edición.
  // Por ejemplo, abrir un formulario para editar el registro.
  console.log('Editando el registro:', item);
  alert(`Editar el registro con ID: ${item.id}`);
}

eliminar(id: number): void {
  // Aquí implementamos la lógica para eliminar un registro
  if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
    console.log('Eliminando el registro con ID:', id);
    // Puedes llamar al API para eliminar el registro
    this.apiService.deleteData(id).subscribe({
      next: () => {
        alert('Registro eliminado con éxito');
        this.loadData(); // Recargar la tabla después de eliminar
      },
      error: (err) => console.error('Error al eliminar:', err),
    });
  }
}
}
