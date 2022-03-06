import * as videoMatchingComponent from "../components/videoMatchingComponent";
import * as confidenceComponent from "../components/confidenceComponent";

export class videoMatchingProcedure {
    constructor(video1, video2) {
        this.video1 = video1;
        this.video2  = video2;
    }

    getProcedure() {
        let procedure = {
            timeline: [videoMatchingComponent.default.getTrial(this.video1, this.video2)],
            randomize_order: false
        }

        return procedure;
    }
}