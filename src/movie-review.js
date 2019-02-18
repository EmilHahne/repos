export class moviereview {
  ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    formSubmitted(event){
        alert("Skickat:  " + this.titleInput.value + "  Poäng: " + this.selectedRating)
    }
}