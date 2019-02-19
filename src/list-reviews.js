import {PageReview} from "review-page";
import {inject} from "aurelia-framework";

@inject(PageReview)
export class ListReviews{
    constructor(pageReview){
        this.pageReview = pageReview;
    }
    activate(){
        this.reviews = this.pageReview.getAllReviews();
    }
}