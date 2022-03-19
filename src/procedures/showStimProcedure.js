import { videoMatchingProcedure } from './videoMatchingStimProcedure';
import * as stats from 'simple-statistics';

export class showStimProcedure {
    constructor(assetPaths) {
        this.assetPaths = assetPaths;
    }

    getProcedure() {
        let procedure = {
            timeline: this.getTimeline(),
            randomize_order: true    
        }

        return procedure;
    }

    fetchIdentityNames(basePath) {
        let relevantPaths = this.assetPaths.filter(path => path.includes(basePath));
        let rawIds = relevantPaths.map(path => path.split("/").at(-2));

        return [...new Set(rawIds)];
    }

    getTimeline() {
        let timelineVariables = [];
        let sameBasePath  = "media/videos/same/";
        let menBasePath = "media/videos/different/men/";
        let womenBasePath = "media/videos/different/women/";
        let sameIds = this.fetchIdentityNames(sameBasePath);
        let differentIdMen = this.fetchIdentityNames(menBasePath);
        let differentIdWomen = this.fetchIdentityNames(womenBasePath);

        for (let i = 0; i < sameIds.length; i++) {
            let path1 = sameBasePath + sameIds[i] + "/1.mp4";
            let path2 = sameBasePath + sameIds[i] + "/2.mp4";

            timelineVariables.push((new videoMatchingProcedure(path1, path2)).getProcedure());
        }

        timelineVariables = timelineVariables.concat(this.getDifferentPairs(differentIdMen, menBasePath));
        timelineVariables = timelineVariables.concat(this.getDifferentPairs(differentIdWomen, womenBasePath));

        stats.shuffleInPlace(timelineVariables);

        return timelineVariables;
    }

    getDifferentPairs(values, basePath) {
        let pairs = stats.combinations(values, 2);
        stats.shuffleInPlace(pairs);

        let id1 = pairs.map(pair => pair[0]);
        let id2 = pairs.map(pair => pair[1]);

        let videoObjects = [];

        for (let i = 0; i < id1.length; i++) {
            let vid1 = stats.sample(["1.mp4", "2.mp4"], 1)[0];
            let vid2 = stats.sample(["1.mp4", "2.mp4"], 1)[0];

                
            let path1 = basePath + id1[i] + "/" + vid1;
            let path2 = basePath + id2[i] + "/" + vid2;

            videoObjects.push((new videoMatchingProcedure(path1, path2)).getProcedure());
        }

        return videoObjects;
    }
}