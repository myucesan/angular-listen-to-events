import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // Add data elements for your name, the title, year released, rating, and imdb link of your favorite movie
  name = "Joe"
  favFlop = {
    title: "Wing Commander",
    yearReleased: 1999,
    rating: "PG-13",
    imdbLink: "https://www.imdb.com/title/tt0131646/",
    soundtrack: {
      spotifyLink: "https://open.spotify.com/album/6kYCucnWN8EzKDCro12m5x?si=rR_Sb8NbQ62AYQHjN6tlXw"
    }
  }

  /*
  EXERCISE:
  1. listen to the click event on the year and rating displayed data and log out to the console
  2. bonus: change to use a single event handler, and display the text that was clicked (hint, see the innerText property)


  */

  onCheckout(event) {
    console.log('check out', event.target)
  }

  titleHover() {
    console.log('hovered the title');
  }
    
}
