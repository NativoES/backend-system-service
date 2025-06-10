import { CustomError } from "../../domain";
import { CompletarTextoService } from "./completar-texto.service";
import { LlenarEspaciosService } from "./llenar-espacio.service";
import { NotaTextoService } from "./nota-texto.service";
import { NotaService } from "./nota.service";
import { OrdenarTextoService } from "./ordenar-texto.service";
import { SeleccionPalabrasService } from "./seleccion-palabra.service";

interface DeletableService {
  delete: (id: string) => Promise<any>;
}

export class NativoesService {
  private readonly completarTextoService = new CompletarTextoService();
  private readonly notaService = new NotaService();
  private readonly notaTextoService = new NotaTextoService();
  private readonly ordenarTextoService = new OrdenarTextoService();
  private readonly llenarEspaciosService = new LlenarEspaciosService();
  private readonly seleccionPalabraService = new SeleccionPalabrasService();

  constructor() {}

  public async getAllExercises(id: string) {
    const [completar, notaTexto, nota, ordenarTexto, llenarEspacio, selecionarPalabra] = await Promise.all([
      this.completarTextoService.getAllCT(id),
      this.notaTextoService.getAll(id),
      this.notaService.getAll(id),
      this.ordenarTextoService.getAll(id),
      this.llenarEspaciosService.getAll(id),
      this.seleccionPalabraService.getAll(id),
    ]);

    const combined = [...completar, ...notaTexto, ...nota, ...ordenarTexto, ...llenarEspacio, ...selecionarPalabra];

    combined.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    return combined;
  }

  public async deleteById(id: string) {
    const services: DeletableService[] = [
      this.completarTextoService,
      this.notaTextoService,
      this.notaService,
      this.ordenarTextoService,
      this.llenarEspaciosService,
      this.seleccionPalabraService,
    ];

    for (const service of services) {
      try {
        const deleted = await service.delete(id);
        if (deleted) return deleted;
      } catch {}
    }

    throw CustomError.notFound(`Ejercicio con id ${id} no encontrado`);
  }
}
