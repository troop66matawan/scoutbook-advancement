"use strict";

class ScoutbookAuditMark {

    constructor(who,when) {
        this.markedBy = who;
        this.markedDate = when;
    }

    set markedBy(value) {
        if (value instanceof String) {
            this._markedBy = value;
        }
    }
    get markedBy() {
        return this._markedBy;
    }

    set markedDate(value) {
        if (value instanceof Date) {
            this._markedDate = value;
        }
    }
    get markedDate() {
        return this._markedDate;
    }

}
module.exports = ScoutbookAuditMark;