# Frontend - Administración de Clientes (Angular)

Este proyecto es la capa de presentación para la prueba práctica de Alianza Fiduciaria. Implementa una interfaz responsive para la gestión de clientes, incluyendo listado, búsqueda por Shared Key y creación de nuevos registros.

##  Tecnologías Utilizadas
- Angular 
- TypeScript

##  Funcionalidades
- Listado de clientes con diseño responsive
- Búsqueda simple por Shared Key
- Formulario para crear nuevos clientes con validaciones
- Consumo de API REST para operaciones CRUD
- Sistema de logs en consola para trazabilidad
- Pruebas unitarias básicas en componentes y servicios

## Como ejecutar 
    ```bash
    npm install
    ng serve
Abrir en navegador: http://localhost:4200

## Pruebas

El proyecto incluye pruebas unitarias con Jasmine y está preparado para pruebas E2E con Cypress.

### Unit Test ejemplo

    ```ts
    it('debería mostrar el sharedKey del cliente', () => {
      component.cliente = { sharedKey: 'alianza-admin', name: '', email: '', phone: '' };
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('alianza-admin');
    });


## Notas
- El diseño sigue el look & feel propuesto en el documento.
- Se puede extender para incluir búsqueda avanzada y exportación CSV.
