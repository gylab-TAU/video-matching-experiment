import * as familiarityComponent from "../components/familiarityComponent";

export class familiarityProcedure {
    constructor(images) {
        this.images = images;
    }

    getProcedure() {
        let procedure = {
            timeline: [familiarityComponent.default.getTrial()],
            randomize_order: true,
            timeline_variables: this.getTimelineVariables(),
            randomize_order: true
        }

        console.log(procedure)

        return procedure;
    }

    getTimelineVariables() {
        let timelineVariables = [];

        for (let i = 0; i < this.images.length; i++) {
            let path = this.images[i];

            let element =
                '<div class="image">' +
                '<img src=' + path + " " +  '>' +
                '</div>';

            let elementObject = {stim: element};

            timelineVariables.push(elementObject);
        }

        console.log(timelineVariables)

        return timelineVariables;
    }
}