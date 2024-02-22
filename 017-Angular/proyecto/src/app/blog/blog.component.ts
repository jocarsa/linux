import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
    jsonData: any;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.datosService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }
}
