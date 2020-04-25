"use strict";

const ScoutbookBaseAdvancement = require('./baseAdvancement');

class ScoutbookMeritBadgeAdvancement extends ScoutbookBaseAdvancement {

    constructor(meritBadge, version) {
        super(meritBadge, version);
    }

    set meritBadge(value) {
        this._type = value !== undefined ? value : '';
    }

    get meritBadge() {
        return this._type;
    }
}

module.exports = ScoutbookMeritBadgeAdvancement;