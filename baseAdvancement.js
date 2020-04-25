"use strict";
const ScoutbookAuditMark = require('./auditMark');

class ScoutbookBaseAdvancement {

    constructor(type, version) {
        if (this.constructor === ScoutbookBaseAdvancement) {
            throw new Error('ScoutbookBaseAdvancement can\'t be instantiated');
        }
        this.type = type;
        this.version = version;
        this.completionDate = undefined;
        this.isApproved = false;
        this.isAwarded = false;
    }

    set type(value) {
        this._type = value !== undefined ? value : '';
    }

    get type() {
        return this._type;
    }

    set version(value) {
        this._version = value !== undefined ? value : '';
    }

    get version() {
        return this._version;
    }

    get completionDate() {
        return this._completionDate;
    }
    set completionDate(value) {
        if (value instanceof Date) {
            this._completionDate = value;
        }
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
    get isAwarded() {
        return this._isAwarded;
    }
    set isAwarded(value) {
        if (value === true || value === false) {
            this._isAwarded = value;
        }
    }
    get markedAwarded() {
        return this._markedAwarded;
    }
    set markedAwarded(value) {
        if (value instanceof  ScoutbookAuditMark) {
            this._markedAwarded = value;
        }
    }

}

module.exports = ScoutbookBaseAdvancement;