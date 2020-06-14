export class Quote {

    showDescription : boolean;
    upVote : number;
    downVote : number;

  
    constructor (
      public id: number,
      public quote: string,
      public author: string,
      public user : string,
      ){
  
        this.showDescription = false;
        this.upVote = 0;
        this.downVote = 0;
  
    }
  
}
  