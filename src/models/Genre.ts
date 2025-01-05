import { Entity } from "./Entity";
import { db } from "../services/firebaseService";


export class Genre extends Entity {
  constructor() {
    super("Genres");
  }

  async getBooksInGenre(genreName: string): Promise<any[]> {
    const snapshot = await db
      .collection("Books")
      .where("Genre", "==", genreName)
      .get();

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
