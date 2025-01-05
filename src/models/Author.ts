import { Entity } from "./Entity";
import { db } from "../services/firebaseService";


export class Author extends Entity {
  constructor() {
    super("Authors");
  }

  async getBooks(authorName: string): Promise<any[]> {
    const snapshot = await db
      .collection("Books")
      .where("Author", "==", authorName)
      .get();

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
