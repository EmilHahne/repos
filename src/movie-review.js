import { DialogService } from "aurelia-dialog";
import { inject } from "aurelia-framework";
import { PageReview } from "review-page";
import {DisplayReview} from "dialogs/display-review"

@inject(DialogService, PageReview)

export class moviereview {
  ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  genres = ["Aktion", "Komedi", "Thriller", "Skräck", "Romantik"];


  
  constructor(dialogService, pageReview) {
    this.dialogService = dialogService;
    this.pageReview = pageReview;
  }

  selectedGenres = [];
  async formSubmitted(event) {
    let movieReview = {
      title: this.titleInput.value,
      name: this.nameInput.value,
      review: this.reviewInput.value,
      rating: this.selectedRating,
      genre: this.selectedGenre
    };
    let response = await this.dialogService
      .open({ viewModel: DisplayReview, model: movieReview, lock: false })
      .whenClosed();
    if (!response.wasCancelled) {
      this.pageReview.addReview(movieReview);
    }
  }
}
