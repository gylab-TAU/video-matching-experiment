import HtmlSliderResponse from '@jspsych/plugin-html-slider-response';

class confidenceComponent {
    static getTrial() {
        let trial = {
            type: HtmlSliderResponse,
            stimulus: "<p> How sure are you? </p>",
            require_movement: true,
            labels: [1, 2, 3, 4, 5]
        };

        return trial;
    }
}

export default confidenceComponent;