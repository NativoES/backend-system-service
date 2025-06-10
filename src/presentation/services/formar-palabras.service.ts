import { FormarPalabrasModel } from "../../data";
import { CustomError, RegisterFormarPalabrasDto, UpdateFormarPalabrasDto } from "../../domain";

export class FormarPalabrasService {
  constructor() {}

  public async create(dto: RegisterFormarPalabrasDto) {
    try {
      const formarPalabra = new FormarPalabrasModel({ ...dto });
      await formarPalabra.save();
      return formarPalabra;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async update(id: string, dto: UpdateFormarPalabrasDto) {
    try {
      const updated = await FormarPalabrasModel.findByIdAndUpdate(id, dto, {
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
      return await FormarPalabrasModel.find(query);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async getById(id: string) {
    try {
      return await FormarPalabrasModel.findById(id).populate("claseId");
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async delete(id: string) {
    try {
      return await FormarPalabrasModel.findByIdAndDelete(id);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
