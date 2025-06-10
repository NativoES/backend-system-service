import { AudioModel } from "../../data";
import { CustomError, RegisterAudioDto, UpdateAudioDto } from "../../domain";

export class AudioService {
  constructor() {}

  public async create(dto: RegisterAudioDto) {
    try {
      const audio = new AudioModel({ ...dto });
      await audio.save();
      return audio;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async update(id: string, dto: UpdateAudioDto) {
    try {
      const updated = await AudioModel.findByIdAndUpdate(id, dto, {
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
      return await AudioModel.find(query);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async getById(id: string) {
    try {
      return await AudioModel.findById(id).populate("claseId");
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async delete(id: string) {
    try {
      return await AudioModel.findByIdAndDelete(id);
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
