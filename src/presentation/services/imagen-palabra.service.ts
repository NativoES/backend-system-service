import { ImagenPalabraModel } from "../../data";
import { CustomError, RegisterImagenPalabraDto, UpdateImagenPalabraDto } from "../../domain";

export class ImagenPalabraService {
  constructor() {}

  public async create(dto: RegisterImagenPalabraDto) {
    try {
      const imagenPalabra = new ImagenPalabraModel({ ...dto });
      await imagenPalabra.save();
      return imagenPalabra;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
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
