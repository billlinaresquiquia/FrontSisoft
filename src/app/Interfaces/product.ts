export interface Product {
      id: number; // Identificador del producto
      nombre: string; // Nombre del producto
      precio: number; // Precio del producto
      descripcion: string; // Descripción del producto
      imagen: string; // Ruta de la imagen del producto
      imagen2: string; // Ruta de la imagen del producto
      descuento: number; // Descuento del producto
      categoriaId: number; // Identificador de la categoría del producto
      valoracion: number | null; // Valoración del producto (puede ser nula)
      cantidad: number; // Agrega esta propiedad
}

      