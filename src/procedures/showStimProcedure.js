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
        let rawIds = relevantPaths.map(path => path.split("/").at(-1));
        let ids = rawIds.map(id => id.split(".")[0].slice(0, -1));

        return [...new Set(ids)];
    }

    getTimeline() {
        let timelineVariables = [];
        let path  = "media/videos/";
        let ids = this.fetchIdentityNames(path);
        console.log(ids)

        for (let i = 0; i < ids.length; i++) {
            let path1 = path + ids[i] + "1.mp4";
            let path2 = path + ids[i] + "2.mp4";
            console.log("======")
            console.log(path1)
            console.log(path2)

            timelineVariables.push((new videoMatchingProcedure(path1, path2)).getProcedure());
        }

        timelineVariables = timelineVariables.concat(this.getDifferentPairs(ids, path));

        stats.shuffleInPlace(timelineVariables);
        console.log(timelineVariables)

        return timelineVariables;
    }

    getDifferentPairs(values, path) {
        let pairs = stats.combinations(values, 2);
        stats.shuffleInPlace(pairs);

        let id1 = pairs.map(pair => pair[0]);
        let id2 = pairs.map(pair => pair[1]);
        console.log(id1)
        console.log(id2)

        let videoObjects = [];

        for (let i = 0; i < id1.length; i++) {
            let vid1 = stats.sample(["1.mp4", "2.mp4"], 1)[0];
            let vid2 = stats.sample(["1.mp4", "2.mp4"], 1)[0];

                
            let path1 = path + id1[i] + vid1;
            let path2 = path + id2[i] + vid2;

            console.log("======")
            console.log(path1)
            console.log(path2)


            videoObjects.push((new videoMatchingProcedure(path1, path2)).getProcedure());
        }

        return videoObjects;
    }
}