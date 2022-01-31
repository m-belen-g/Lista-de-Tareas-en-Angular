import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de tareas!';

  tareas: any[] = []
  crearTarea(tarea: String, $event: any) {
    $event.preventDefault(); // para prevenir reloading
    this.tareas.push(
      {
        id: Date.now(), // generamos un id en base al momento actua
        texto: tarea
      }
    );
    console.log(this.tareas);
  }
  eliminarTarea(id: number) {
    console.log(id);
    this.tareas = 
      this.tareas.filter(tarea => tarea.id !== id);
  }
}


