"use strict";

class ScoutbookRequirement {
    constructor(id,text) {
        this.id = id;
        this.requirementText = text;
        this.completionDate = undefined;
    }

    set id(value) {
        this._id = value !== undefined ? value : '';
    }

    get id() {
        return this._id;
    }

    set completionDate(value) {
        this._completionDate = value !== undefined ? value : '';
    }

    get completionDate() {
        return this._completionDate;
    }


    set requirementText(value) {
        this._requirementText = value !== undefined ? value : '';
    }

    get requirementText() {
        return this._requirementText;
    }
}
module.exports = ScoutbookRequirement;