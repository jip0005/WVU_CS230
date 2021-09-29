export class Product{
    title:string;
    text:string;
    textLink:string;
    buttonOne:string;
    buttonTwo:string;
    imagePath:string;

    constructor({title, text, textLink, buttonOne, buttonTwo, imagePath} :
        {title:string, text:string, textLink:string, buttonOne:string, buttonTwo:string, imagePath:string}) {
            this.title = title;
            this.text = text;
            this.textLink = textLink;
            this.buttonOne = buttonOne;
            this.buttonTwo = buttonTwo;
            this.imagePath = imagePath;

    }
}