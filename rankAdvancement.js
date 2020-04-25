"use strict";

const ScoutRank2016 = require('./rankRequirements/Scout2016');
const ScoutRank2012 = require('./rankRequirements/Scout2012');
const TenderfootRank2016 = require('./rankRequirements/Tenerfoot2016');
const TenderfootRank2012 = require('./rankRequirements/Tenderfoot2012');
const SecondClassRank2016 = require('./rankRequirements/SecondClass2016');
const SecondClassRank2013 = require('./rankRequirements/SecondClass2013');
const FirstClassRank2016 = require('./rankRequirements/FirstClass2016');
const FirstClassRank2013 = require('./rankRequirements/FirstClass2013');
const StarRank2016 = require('./rankRequirements/Star2016');
const StarRank2013 = require('./rankRequirements/Star2013');
const LifeRank2016 = require('./rankRequirements/Life2016');
const LifeRank2013 = require('./rankRequirements/Life2013');
const EagleRank2016 = require('./rankRequirements/Eagle2016');

const ScoutbookBaseAdvancement = require('./baseAdvancement');

class ScoutbookRankAdvancement extends ScoutbookBaseAdvancement {
    static rankMatrix = {
        "Scout" : {
            "2012" : new ScoutRank2012(),
            "2016" : new ScoutRank2016(),
        },
        "Tenderfoot": {
            "2012" : new TenderfootRank2012(),
            "2016" : new TenderfootRank2016(),
        },
        "Second Class": {
            "2013" : new SecondClassRank2013(),
            "2016" : new SecondClassRank2016(),
        },
        "First Class" : {
            "2013" : new FirstClassRank2013(),
            "2016" : new FirstClassRank2016(),
        },
        "Star Scout": {
            "2013" : new StarRank2013(),
            "2016" : new StarRank2016(),
        },
        "Life Scout": {
            "2013" : new LifeRank2013(),
            "2016" : new LifeRank2016(),
        },
        "Eagle Scout": {
            "2014" : new EagleRank2016(), // there are no real Eagle 2014s, just version error.
            "2016" : new EagleRank2016(),
        }
    };
    constructor(rank, version) {
        super(rank, version);
        this.requirements = undefined;
        if (ScoutbookRankAdvancement.rankMatrix[rank] && ScoutbookRankAdvancement.rankMatrix[rank][version+'']) {
            this.requirements = ScoutbookRankAdvancement.rankMatrix[rank][version+''];
        } else {
            throw new Error('Unsupported Rank (' + rank + ') and Version ('+version+').');
        }
    }

    set rank(value) {
        this._type = value !== undefined ? value : '';
    }

    get rank() {
        return this._type;
    }

    get requirements() {
        return this._requirements;
    }
    set requirements(value) {
        this._requirements = value;
    }

}

module.exports = ScoutbookRankAdvancement;