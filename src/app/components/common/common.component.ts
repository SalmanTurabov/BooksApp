import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../serevices/books.service';

export interface Book {
  name: string;
  image: string;
  price: number;
  author: string;
  year: number;
  link: string;
}

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {

  public books: Book[] = [
    {
      name: 'Harry Potter and the prisoner of azkaban',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg',
      price: 658,
      author: 'Joanne Rowling',
      year: 1999,
      link: 'https://www.chitai-gorod.ru/catalog/book/755578/',
    },
    {
      name: 'Fight club',
      image: 'https://s1.livelib.ru/boocover/1000282867/200/2ae5/boocover.jpg',
      price: 525,
      author: 'Chuck Palahniuk',
      year: 1996,
      link: 'https://www.chitai-gorod.ru/catalog/book/2895858/',
    },
    {
      name: 'Crime and punishment',
      image: 'https://img4.labirint.ru/rc/cc7791be9221f2b32ac1ad9e554ff793/363x561q80/books86/858276/cover.jpg',
      price: 289,
      author: 'Fyodor Dostoevsky',
      year: 1866,
      link: 'https://www.chitai-gorod.ru/catalog/book/827648/',
    }
  ]

  constructor(private router: Router, private bookService: BooksService) {}

  ngOnInit(): void {
  }

  public async openBook (book: Book) {
    await this.router.navigate(['current']);
    this.bookService.setCurrentBook(book);
  }
}
