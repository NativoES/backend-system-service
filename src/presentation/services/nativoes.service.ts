import { CompletarTextoService } from './completar-texto.service';
import { NotaTextoService } from './nota-texto.service';
import { NotaService } from './nota.service';

export class NativoesService {
  private readonly completarTextoService = new CompletarTextoService();
  private readonly notaService = new NotaService();
  private readonly notaTextoService = new NotaTextoService();
  constructor(
  ) {}

  public async getAllExercises() {
    const [completar, notaTexto, nota] = await Promise.all([
      this.completarTextoService.getAllCT(),
      this.notaTextoService.getAll(),
      this.notaService.getAll(),
    ]);

    const combined = [...completar, ...notaTexto, ...nota];

    combined.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    return combined;
  }
}
