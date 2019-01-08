import { Book } from './../../models/book.models';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {


  books:Book;
  category:string;

  constructor(private bookrest:BookRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionicViewWillEnter(){
   this.category=this.navParams.get("category");
   console.log(this.category);
   this.bookrest.getbookList().subscribe(data=>{
     this.books=data.filter(book => book.category === this.category);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

}
