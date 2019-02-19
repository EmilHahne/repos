import {DialogService} from "aurelia-dialog"
import {inject} from "aurelia-framework"
import {DisplayReview} from "dialogs/display-review"

@inject(DialogService)

export class moviereview {
  ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  genres = ["Aktion", "Komedi", "Thriller", "Skräck", "Romantik"];

  constructor(dialogService){
  this.dialogService = dialogService;
  }
  

    selectedGenres = [];
    async formSubmitted(event){
        //alert("Skickat:  " + this.titleInput.value + "  Poäng: " + this.selectedRating + "  Genre: " + this.selectedGenre)
        let response = await this.dialogService.open({ viewModel: DisplayReview, model: "Title:" + this.titleInput.value + "  Poäng:" + this.selectedRating + "  Genre:" + this.selectedGenre, lock: false }).whenClosed();
        if (!response.wasCancelled) {
          console.log('good - ', response.output);
        } else {
          console.log('bad');
        }
        console.log(response.output);
      }
}