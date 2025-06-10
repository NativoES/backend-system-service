export class UpdateRelacionarPalabrasDto {
  private constructor(
    public readonly titulo?: string,
    public readonly palabras?: { es: string; en: string }[],
    public readonly claseId?: string,
    public readonly descripcion?: string,
    public readonly template?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, UpdateRelacionarPalabrasDto?] {
    const allowedFields = ['titulo', 'palabras', 'claseId', 'descripcion', 'template'];
    const invalidFields = Object.keys(object).filter(key => !allowedFields.includes(key));
    if (invalidFields.length > 0) {
      return [`Campos no válidos: ${invalidFields.join(', ')}`];
    }

    const { titulo, palabras, claseId, descripcion, template } = object;

    if (titulo !== undefined && typeof titulo !== 'string') return ['"titulo" debe ser string'];
    if (palabras !== undefined) {
      if (!Array.isArray(palabras) || palabras.some(p => typeof p !== 'object' || !p.es || !p.en || typeof p.es !== 'string' || typeof p.en !== 'string')) {
        return ['"palabras" debe ser un array de objetos con "es" y "en" como strings'];
      }
    }
    if (claseId !== undefined && typeof claseId !== 'string') return ['"claseId" debe ser string'];
    if (descripcion !== undefined && typeof descripcion !== 'string') return ['"descripcion" debe ser string'];
    if (template !== undefined && typeof template !== 'string') return ['"template" debe ser string'];

    return [undefined, new UpdateRelacionarPalabrasDto(titulo, palabras, claseId, descripcion, template)];
  }
}
