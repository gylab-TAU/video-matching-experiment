import  HtmlButtonResponsePlugin from '@jspsych/plugin-html-button-response';

class videoMatchingComponent {
    static getTrial(video1, video2) {

        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: HtmlButtonResponsePlugin,
            stimulus: this.getStimulus(video1, video2),
            prompt: '<p class="prompt"> Are the people in the videos the same person? </p>',
            choices: [1, 2, 3, 4, 5, 6],
            response_ends_trial: true,
            maintain_aspect_ratio: true,
            stimulus_height: imageHeight,
            stimulus_duration: 5000,
            require_movement: true,
            step: 0.5,
            slider_start: 3.5,
            min: 1,
            max: 6,
            on_finish: function(data) {
                data.video1 = video1;
                data.video2 = video2;
            }
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
                '<video autoplay="true" loop="true" width="400" muted="true">' +
                '<source class="image" src=' + source + " " + 'type="video/mp4"' + 
                '</video>' +
            '</div>'
        );
    }
}

export default videoMatchingComponent;