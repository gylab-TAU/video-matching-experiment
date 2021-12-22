import  HtmlButtonResponsePlugin from '@jspsych/plugin-html-button-response';

class videoMatchingComponent {
    static getTrial(video1, video2) {
        console.log(this.getStimulus())
        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: HtmlButtonResponsePlugin,
            stimulus: this.getStimulus(video1, video2),
            choices: ['same', 'different'],
            prompt: '<p> Are the people in the videos the same person? </p>',
            response_ends_trial: true,
            maintain_aspect_ratio: true,
            stimulus_height: imageHeight
        };

        return trial;
    }

    static getStimulus(video1, video2) {
        return(
            ' <div class="video-matching-trial">' +
                this.getVideo(video1) + this.getVideo(video2) +
            '</div>'
        );
    }

    static getVideo(source) {
        return(
            '<div class="video">' +
                '<video autoplay="true" loop="true" width="250" muted="true">' +
                '<source class="image" src=' + source + " " + 'type="video/mp4"' + 
                '</video>' +
            '</div>'
        );
    }
}

export default videoMatchingComponent;