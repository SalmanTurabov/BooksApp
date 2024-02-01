import { Injectable } from '@angular/core';
import { Book } from '../components/common/common.component';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private currentBook: Book | null = null;

  constructor() {}

  /**
     * setCurrentBook
book: Book     */
  public setCurrentBook(book: Book) {
    this.currentBook = book;
  }

  public getCurrentBook(): Book | null {
    return this.currentBook;
  }
}
