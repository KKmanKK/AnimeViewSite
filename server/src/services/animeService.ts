import { db } from "../utils/db.server.js";

interface IAnimeType {
  id: number,
  name: string,
  description: string | null,
  season: string,
  release: Date,
  duration: string,
  img: string,
  frames: string,
  trailer: string,
  video: string,
  viewUserId: number | null,
  viewedUserId: number
}

interface IUserService {
  create(anime: Omit<IAnimeType, "id">): Promise<IAnimeType>;
  select(): Promise<IAnimeType[]>;
  selectById(id: number): Promise<IAnimeType | null>;
  delete(id: number): Promise<void>;
}

class AnimeService implements IUserService {
  async create(anime: Omit<IAnimeType, "id">): Promise<IAnimeType> {
    let { name, description, season, release, duration, img, frames, trailer, video, viewUserId, viewedUserId } = anime;
    return await db.anime.create({
      data: {
        name, description, season, release, duration, img, frames, trailer, video, viewUserId, viewedUserId
      },
      select: {
        id: true,
        name: true,
        description: true,
        season: true,
        release: true,
        duration: true,
        img: true,
        frames: true,
        trailer: true,
        video: true,
        viewUserId: true,
        viewedUserId: true
      }
    })
  }
  async select(): Promise<IAnimeType[]> {
    return await db.anime.findMany();
  }
  async selectById(id: number): Promise<IAnimeType | null> {
    return await db.anime.findUnique({
      where: {
        id
      }
    })
  };
  async delete() { }

}

export const animeService = new AnimeService();
