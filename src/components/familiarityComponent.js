import  HtmlButtonResponsePlugin from '@jspsych/plugin-html-button-response';

class familiarityComponent {
    static getTrial(image) {
        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: HtmlButtonResponsePlugin,
            stimulus: this.getImage(image),
            choices: ['yes', 'no'],
            prompt: '<p> Do you know who this person is? </p>',
            response_ends_trial: true,
            maintain_aspect_ratio: true,
            stimulus_height: imageHeight
        };

        return trial;
    }

    static getImage(source) {
        return(
            '<div class="image">' +
            '<img src=' + source + " " +  '>' +
            '</div>'
        );
    }
}

export default familiarityComponent;