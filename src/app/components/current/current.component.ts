import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../serevices/books.service';
import { Book } from "../common/common.component";

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrl: './current.component.scss'
})
export class CurrentComponent implements OnInit {

  public book: Book | null = null;


  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.book = this.booksService.getCurrentBook();
  }

  public goToStore() {
    window.open(this.book?.link, '_blank')
  }

}
