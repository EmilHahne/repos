import{dialogController} from "aurelia-dialog";
import{inject} from "aurelia-framework";
import { DialogController } from "../../node_modules/aurelia-dialog/dist/commonjs/aurelia-dialog";

@inject(DialogController)
export class DisplayReview{
    constructor(dialogController){
        this.controller = dialogController;
    }
    activate(model){
        this.movieTitle = model;
    }
}