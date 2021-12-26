import * as imageMatchingComponent from "../components/imageMatchingComponent";
import * as confidenceComponent from "../components/confidenceComponent";

export class imageMatchingProcedure {
    constructor(image1, image2) {
        this.image1 = image1;
        this.image2  = image2;
    }

    getProcedure() {
        let procedure = {
            timeline: [imageMatchingComponent.default.getTrial(this.image1, this.image2), confidenceComponent.default.getTrial()],
            randomize_order: false
        }

        return procedure;
    }
}