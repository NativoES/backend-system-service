type Asociacion = {
  palabra: string;
  imagenUrl: string;
};

export class UpdateImagenPalabraDto {
  private constructor(
    public readonly titulo?: string,
    public readonly asociaciones?: Asociacion[],
    public readonly claseId?: string,
    public readonly template?: string,
    public readonly descripcion?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateImagenPalabraDto?] {
    const allowedFields = ['titulo', 'asociaciones', 'claseId', 'template', 'descripcion'];
    const invalidFields = Object.keys(object).filter(key => !allowedFields.includes(key));
    if (invalidFields.length > 0) {
      return [`Campos no válidos: ${invalidFields.join(', ')}`];
    }

    const { titulo, asociaciones, claseId, template, descripcion } = object;

    if (titulo !== undefined && typeof titulo !== 'string') return ['"titulo" debe ser string'];

    if (asociaciones !== undefined) {
      if (!Array.isArray(asociaciones)) {
        return ['"asociaciones" debe ser un array'];
      }
      for (const a of asociaciones) {
        if (typeof a !== 'object' || !a.palabra || !a.imagenUrl) {
          return ['Cada asociación debe ser un objeto con "palabra" e "imagenUrl"'];
        }
        if (typeof a.palabra !== 'string' || typeof a.imagenUrl !== 'string') {
          return ['"palabra" e "imagenUrl" en cada asociación deben ser strings'];
        }
      }
    }

    if (claseId !== undefined && typeof claseId !== 'string') return ['"claseId" debe ser string'];
    if (template !== undefined && typeof template !== 'string') return ['"template" debe ser string'];
    if (descripcion !== undefined && typeof descripcion !== 'string') return ['"descripcion" debe ser string'];

    return [undefined, new UpdateImagenPalabraDto(titulo, asociaciones, claseId, template, descripcion)];
  }
}
