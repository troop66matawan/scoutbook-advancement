"use strict";

class ScoutbookRankRequirement {
    constructor(rank,version,requirements) {
        this.rank = rank;
        this.version = version;
        this.requirement = requirements;
    }

    set rank(value) {
        this._rank = value !== undefined ? value : '';
    }

    get rank() {
        return this._rank;
    }

    set version(value) {
        this._version = value !== undefined ? value : '';
    }

    get version() {
        return this._version;
    }


    set requirement(value) {
        this._requirement = value !== undefined ? value : '';
    }

    get requirement() {
        return this._requirement;
    }    
}
module.exports = ScoutbookRankRequirement;