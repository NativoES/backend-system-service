import { ImagenPalabraModel } from "../../data";
import { Asociacion, CustomError, RegisterImagenPalabraDto, UpdateImagenPalabraDto } from "../../domain";
import { FileService } from "./file.service";

export class ImagenPalabraService {

  private fileService: FileService = new FileService();

  constructor() {}

  public async create(
  dtoBase: RegisterImagenPalabraDto,
  palabras: string[],
  files: Express.Multer.File[]
) {
  // Validación adicional
  if (palabras.length !== files.length) {
    throw CustomError.badRequest('La cantidad de palabras y archivos no coincide');
  }

  // Subida de imágenes y construcción de asociaciones
  const asociaciones: Asociacion[] = await Promise.all(
    palabras.map(async (palabra, i) => {
      const file = files[i];
      const fileName = `${Date.now()}-${file.originalname}`;
      const { Location: imagenUrl } = await this.fileService.uploadFileToS3(file, fileName);
      return { palabra, imagenUrl };
    })
  );

  // Crear documento final
  const imagenPalabra = new ImagenPalabraModel({
    titulo: dtoBase.titulo,
    descripcion: dtoBase.descripcion,
    claseId: dtoBase.claseId,
    template: dtoBase.template,
    asociaciones, // final
  });

  await imagenPalabra.save();
  return imagenPalabra;
}



  public async update(id: string, dto: UpdateImagenPalabraDto) {
    try {
      const updated = await ImagenPalabraModel.findByIdAndUpdate(id, dto, {
        new: true,
        runValidators: true
      });
      return updated;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async getAll(claseId?: string) {
    try {
      const query = claseId ? { claseId } : {};
      return await ImagenPalabraModel.find(query);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async getById(id: string) {
    try {
      return await ImagenPalabraModel.findById(id).populate("claseId");
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async delete(id: string) {
    try {
      return await ImagenPalabraModel.findByIdAndDelete(id);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
