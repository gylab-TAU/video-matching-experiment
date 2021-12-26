import * as familiarityComponent from "../components/familiarityComponent";

export class familiarityProcedure {
    constructor(images) {
        this.timeline = [];

        for (let i = 0; i < images.length; i++) {
            this.timeline.push(familiarityComponent.default.getTrial(images[i]))
        }
    }

    getProcedure() {
        let procedure = {
            timeline: this.timeline,
            randomize_order: true
        }

        return procedure;
    }
}