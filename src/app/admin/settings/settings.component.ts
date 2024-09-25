import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { AdminComponent } from '../admin.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NavigationComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  tab: any = 'General';

  items: any = [
    { title: 'General', icon: 'settings', route: '/admin/settings/general', label: 'Configuración general' },
    { title: 'Seguridad', icon: 'security', route: '/admin/settings/seguridad', label: 'Seguridad' },
    { title: 'API', icon: 'cloud_upload', route: '/admin/settings/api', label: 'Configuración de la API' },
    { title: 'Backup', icon: 'file_copy', route: '/admin/settings/backup', label: 'Copias de seguridad' },
    { title: 'BD', icon: 'bd', route: '/admin/settings/tables', label: 'Base de datos' },
    { title: 'Ayuda', icon: 'help_outline', route: '/admin/settings/ayuda', label: 'Ayuda y soporte' }
  ]

  tablas: any = [
    {
      nombre: 'tblConfig',
      descripcion: 'Tabla de configuración del sistema',
      funcion: 'Almacena la configuración general del sistema, como el nombre de la empresa, idioma, zona horaria, etc.',
      isCollapsed: true
    },
    {
      nombre: 'tblCategorias',
      descripcion: 'Tabla de categorías de productos',
      funcion: 'Contiene las categorías de los productos que ofrece la empresa.',
      isCollapsed: true
    },
    {
      nombre: 'tblProveedores',
      descripcion: 'Tabla de proveedores',
      funcion: 'Almacena información sobre los proveedores de servicios y productos.',
      isCollapsed: true
    },
    {
      nombre: 'tblProductos',
      descripcion: 'Tabla de productos',
      funcion: 'Contiene información sobre los productos que vende la empresa.',
      isCollapsed: true
    },
    {
      nombre: 'tblSubscripcion',
      descripcion: 'Tabla de suscripciones',
      funcion: 'Almacena los planes de suscripción que la empresa ofrece a sus clientes.',
      isCollapsed: true
    },
    {
      nombre: 'tblEmpresa',
      descripcion: 'Tabla de empresas',
      funcion: 'Contiene información sobre las empresas que utilizan el sistema.',
      isCollapsed: true
    },
    {
      nombre: 'tblSucursal',
      descripcion: 'Tabla de sucursales',
      funcion: 'Almacena información sobre las diferentes sucursales de la empresa.',
      isCollapsed: true
    },
    {
      nombre: 'tblArea',
      descripcion: 'Tabla de áreas',
      funcion: 'Define las diferentes áreas dentro de la empresa.',
      isCollapsed: true
    },
    {
      nombre: 'tblUsuario',
      descripcion: 'Tabla de usuarios',
      funcion: 'Contiene información sobre los usuarios del sistema.',
      isCollapsed: true
    },
    {
      nombre: 'tblFacturas',
      descripcion: 'Tabla de facturas',
      funcion: 'Almacena las facturas generadas para las empresas.',
      isCollapsed: true
    },
    {
      nombre: 'tblSolicitudes',
      descripcion: 'Tabla de solicitudes',
      funcion: 'Almacena las solicitudes realizadas por los usuarios.',
      isCollapsed: true
    },
    {
      nombre: 'tblContratos',
      descripcion: 'Tabla de contratos',
      funcion: 'Contiene información sobre los contratos establecidos con las empresas.',
      isCollapsed: true
    },
    {
      nombre: 'tblInventario',
      descripcion: 'Tabla de inventario',
      funcion: 'Almacena información sobre el inventario de productos disponibles.',
      isCollapsed: true
    },
    {
      nombre: 'tblVentas',
      descripcion: 'Tabla de ventas',
      funcion: 'Registra las ventas realizadas por la empresa.',
      isCollapsed: true
    },
    {
      nombre: 'tblDetalleVenta',
      descripcion: 'Tabla de detalles de ventas',
      funcion: 'Almacena detalles específicos sobre cada venta realizada.',
      isCollapsed: true
    },
    {
      nombre: 'tblCompras',
      descripcion: 'Tabla de compras',
      funcion: 'Registra las compras realizadas por la empresa.',
      isCollapsed: true
    },
    {
      nombre: 'tblDetalleCompra',
      descripcion: 'Tabla de detalles de compras',
      funcion: 'Almacena detalles específicos sobre cada compra realizada.',
      isCollapsed: true
    },
    {
      nombre: 'tblTransacciones',
      descripcion: 'Tabla de transacciones financieras',
      funcion: 'Registra las transacciones financieras realizadas por la empresa.',
      isCollapsed: true
    }
  ];

  toggleCollapse(index: number): void {
    this.tablas[index].isCollapsed = !this.tablas[index].isCollapsed;
}
}
