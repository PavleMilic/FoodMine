export class FoodModel {
  id: number
  name: string;
  isFavourite: boolean;
  stars: number;
  image: string;
  price: number;
  cookTime: string;
  tags: Array<string>
  origins: Array<string>;

  constructor(id: number, name: string, isFavourite: boolean, stars: number, image: string, price: number, cookTime: string, tags: Array<string>, origins: Array<string>) {
    this.id = id;
    this.name = name;
    this.isFavourite = isFavourite;
    this.stars = stars;
    this.image = image;
    this.price = price;
    this.cookTime = cookTime;
    this.tags = tags;
    this.origins = origins;

  }
}