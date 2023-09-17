import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    let articles: Article[] = [];

    let article1: Article = {
      id: 1,
      title: "Title article",
      subtitle: "Subtitle article",
      imageUrl: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Michaël Cloots",
      publishDate: "26/9/2023"
    };

    let article2: Article = {
      id: 2,
      title: "Title article 2",
      subtitle: "Subtitle article 2",
      imageUrl: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134",
      imageCaption: "caption image 2",
      content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: "Florian Smeyers",
      publishDate: "5/9/2023"
    };

    articles.push(article1);
    articles.push(article2);


    //nooit een array aanpassen in een foreach loop want daardoor verandert de lengte van de array tijdens de foreach operatie en vormt problemen / foreach wordt te vaak of te weinig uitgevoerd

    // articles.forEach((el, index) => {
    //   if (!this.isPublishDateWithinOneWeek(el.publishDate)){
    //     articles.splice(index, 1);
    //   }
    // });

    for (let i = articles.length - 1; i >= 0; i--){
      if (!this.isPublishDateWithinOneWeek(articles[i].publishDate)) {
        articles.splice(i, 1);
      }
    }

    console.log(articles);

    return articles;
  }

  isPublishDateWithinOneWeek(dateString: string): boolean {

    // //parse date string into date
    // const publishDate = new Date(dateString);

    //get individual parts of the date
    const dateParts = dateString.split('/');

    //convert array of date parts into ints usable to construct a date later
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Subtract 1 to make it 0-based
    const year = parseInt(dateParts[2], 10);

    //construct the date object based on split string
    const publishDate = new Date(year, month, day);

    //get the current date
    const currentDate = new Date();

    //calculate date one week earlier
    const oneWeekEarlier = new Date();
    oneWeekEarlier.setDate(currentDate.getDate() - 7);

    //calculate date one week later
    const oneWeekLater = new Date();
    oneWeekLater.setDate(currentDate.getDate() + 7);

    console.log(dateParts);
    console.log(currentDate);
    console.log(publishDate);
    console.log(oneWeekEarlier);
    console.log(oneWeekLater);
    // console.log(day);
    // console.log(month);
    // console.log(year);

    //compare publish date with the current date
    return(
      publishDate >= oneWeekEarlier && publishDate <= oneWeekLater
    );
  }
}
