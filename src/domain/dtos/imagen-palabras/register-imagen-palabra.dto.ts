type Asociacion = {
  palabra: string;
  imagenUrl: string;
};

export class RegisterImagenPalabraDto {
  private constructor(
    public readonly titulo: string,
    public readonly asociaciones: Asociacion[],
    public readonly claseId: string,
    public readonly template: string,
    public readonly descripcion?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterImagenPalabraDto?] {
    const { titulo, asociaciones, claseId, template, descripcion } = object;

    if (!titulo || typeof titulo !== 'string') return ['El campo "titulo" es requerido y debe ser string'];

    if (!Array.isArray(asociaciones) || asociaciones.length === 0) {
      return ['El campo "asociaciones" es requerido y debe ser un array con al menos un elemento'];
    }

    for (const a of asociaciones) {
      if (typeof a !== 'object' || !a.palabra || !a.imagenUrl) {
        return ['Cada asociación debe ser un objeto con "palabra" e "imagenUrl"'];
      }
      if (typeof a.palabra !== 'string' || typeof a.imagenUrl !== 'string') {
        return ['"palabra" e "imagenUrl" en cada asociación deben ser strings'];
      }
    }

    if (!claseId || typeof claseId !== 'string') return ['El campo "claseId" es requerido y debe ser string'];
    if (!template || typeof template !== 'string') return ['El campo "template" es requerido y debe ser string'];
    if (descripcion !== undefined && typeof descripcion !== 'string') return ['El campo "descripcion" debe ser string'];

    return [undefined, new RegisterImagenPalabraDto(titulo, asociaciones, claseId, template, descripcion)];
  }
}
