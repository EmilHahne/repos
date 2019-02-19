export class PageReview
{
    _reviews = [];

    addReview(review) {
        this._reviews.push(review);
    }

    getAllReviews() {
        return this._reviews;
    }

    getReviewByTitle(title) {
        return this._reviews.find(x => x.title === title);
    }
}