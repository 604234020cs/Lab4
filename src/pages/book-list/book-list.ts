import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {


  book:Book;
 category:string;

  constructor(private Bookrest:BookRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionicViewWillEnter(){
   this.category=this.navParams.get("category");
   this.Bookrest.getbookList().subscribe(data=>{
     this.book=data.filter(book => book.category === this.category);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

}
