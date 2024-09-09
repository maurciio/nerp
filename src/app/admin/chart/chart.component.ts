import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './datos';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  multi = [];
  view: [number, number] = [700, 300];

  // options
  leyenda: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Meses';
  yAxisLabel: string = 'Cantidades';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  async generarPDF() {
    // Crear el documento PDF
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'letter',
      putOnlyUsedFonts: true
    });





  
    // Agregar el título del reporte
    const fechaHoy = new Date().toLocaleDateString();
    const titulo = 'Reporte - (Fecha: ' + fechaHoy + ')';
    const fontSize = 16;
    const tituloWidth = doc.getStringUnitWidth(titulo) * fontSize / doc.internal.scaleFactor;
    const pageWidth = doc.internal.pageSize.width;
    const posX = (pageWidth - tituloWidth) / 2;
    doc.setFontSize(fontSize);
    doc.text(titulo, posX, 10); // Posicionar el título
  
    // Añadir la tabla de datos
    this.addTable(doc);
  
    // Añadir el gráfico al PDF capturando el div que contiene el gráfico
    await this.addChart(doc);  // Espera a que se complete la generación de la imagen del gráfico
  
    // Guardar el PDF después de añadir todo el contenido
    doc.save('Reporte.pdf');
  }
  
  async addChart(doc: jsPDF) {
    const chartElement = document.getElementById('chartContainer'); // Asegúrate de que el ID coincida con el contenedor de la gráfica
  
    if (chartElement) {
      // Usar html2canvas para capturar la gráfica
      const canvas = await html2canvas(chartElement);
      const imgData = canvas.toDataURL('image/png');
  
      // Añadir la imagen al PDF
      const imgWidth = 180; // Ancho de la imagen en el PDF
      const imgHeight = canvas.height * imgWidth / canvas.width; // Mantener la proporción
      doc.addImage(imgData, 'PNG', 15, 40, imgWidth, imgHeight);
    }
  }
  
  addTable(doc: jsPDF) {
    // Set up table data
    const headers = ['País', 'Año', 'Cantidad ($)'];
    const rows = this.multi.map((data: any) => [data.name, data.series[0].name, '$ ' + data.series[0].value]);

    // Configure table style
    autoTable(doc, {
      head: [headers],
      body: rows,
      startY: 20,
      columnStyles: { 0: { cellWidth: 50 }, 1: { cellWidth: 50 } /* Add more columns if needed */ },
    });
  }

}
