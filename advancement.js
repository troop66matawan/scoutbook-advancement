"use strict";
const ScoutbookRankAdvancement = require('./rankAdvancement');

class ScoutbookAdvancement {
    static supportedRanks = [
        'Scout',
        'Tenderfoot',
        'Second Class',
        'First Class',
        'Star Scout',
        'Life Scout',
        'Eagle Scout',
    ];
    constructor() {
    }
    set Scout(value){
        if (value instanceof ScoutbookRankAdvancement && value.rank === 'Scout') {
            this.scout = value;
        }
    }
    get Scout() {
        return this.scout;
    }

    set Tenderfoot(value){
        if (value instanceof ScoutbookRankAdvancement && value.rank === 'Tenderfoot') {
            this.tenderfoot = value;
        }
    }
    get Tenderfoot() {
        return this.tenderfoot;
    }
    set SecondClass(value){
        if (value instanceof ScoutbookRankAdvancement && value.rank === 'Second Class') {
            this.secondClass = value;
        }
    }
    get SecondClass() {
        return this.secondClass;
    }
    set FirstClass(value){
        if (value instanceof ScoutbookRankAdvancement && value.rank === 'First Class') {
            this.firstClass = value;
        }
    }
    get FirstClass() {
        return this.firstClass;
    }
    set StarScout(value){
        if (value instanceof ScoutbookRankAdvancement && value.rank === 'Star Scout') {
            this.starScout = value;
        }
    }
    get StarScout() {
        return this.starScout;
    }
    set LifeScout(value){
        if (value instanceof ScoutbookRankAdvancement && value.rank === 'Life Scout') {
            this.lifeScout = value;
        }
    }
    get LifeScout() {
        return this.lifeScout;
    }
    set EagleScout(value){
        if (value instanceof ScoutbookRankAdvancement && value.rank === 'Eagle Scout') {
            this.eagleScout = value;
        }
    }
    get EagleScout() {
        return this.eagleScout;
    }

}

module.exports = ScoutbookAdvancement;