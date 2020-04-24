"use strict";
const ScoutbookAuditMark = require('./auditMark');

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

    get markedCompleted() {
        return this._markedCompleted;
    }
    set markedCompleted(value) {
        if (value instanceof  ScoutbookAuditMark) {
            this._markedCompleted = value;
        }
    }

    get isApproved() {
        return this._isApproved;
    }
    set isApproved(value) {
        if (value === true || value === false) {
            this._isApproved = value;
        }
    }
    get markedApproved() {
        return this._markedApproved;
    }
    set markedApproved(value) {
        if (value instanceof  ScoutbookAuditMark) {
            this._markedApproved = value;
        }
    }

    set requirementText(value) {
        this._requirementText = value !== undefined ? value : '';
    }

    get requirementText() {
        return this._requirementText;
    }
}
module.exports = ScoutbookRequirement;