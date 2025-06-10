export class RegisterRelacionarPalabrasDto {
  private constructor(
    public readonly titulo: string,
    public readonly palabras: { es: string; en: string }[],
    public readonly claseId: string,
    public readonly template: string,
    public readonly descripcion?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterRelacionarPalabrasDto?] {
    const { titulo, palabras, claseId, template, descripcion } = object;

    if (!titulo || typeof titulo !== 'string') return ['El campo "titulo" es requerido y debe ser string'];
    if (!Array.isArray(palabras) || palabras.some(p => typeof p !== 'object' || !p.es || !p.en || typeof p.es !== 'string' || typeof p.en !== 'string')) {
      return ['El campo "palabras" es requerido y debe ser un array de objetos con "es" y "en" como strings'];
    }
    if (!claseId || typeof claseId !== 'string') return ['El campo "claseId" es requerido y debe ser string'];
    if (!template || typeof template !== 'string') return ['El campo "template" es requerido y debe ser string'];

    return [undefined, new RegisterRelacionarPalabrasDto(titulo, palabras, claseId, template, descripcion)];
  }
}
