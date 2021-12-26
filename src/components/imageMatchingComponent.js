import  HtmlButtonResponsePlugin from '@jspsych/plugin-html-button-response';

class imageMatchingComponent {
    static getTrial(image1, image2) {
        console.log(this.getStimulus())
        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: HtmlButtonResponsePlugin,
            stimulus: this.getStimulus(image1, image2),
            choices: ['same', 'different'],
            prompt: '<p> Are the people in the photos the same person? </p>',
            response_ends_trial: true,
            maintain_aspect_ratio: true,
            stimulus_height: imageHeight,
            stimulus_duration: 5000
        };

        return trial;
    }

    static getStimulus(image1, image2) {
        return(
            ' <div class="image-matching-trial">' +
                this.getImage(image1) + this.getImage(image2) +
            '</div>'
        );
    }

    static getImage(source) {
        return(
            '<div class="image">' +
            '<img src=' + source + " " +  '>' +
            '</div>'
        );
    }
}

export default imageMatchingComponent;