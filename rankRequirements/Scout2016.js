"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class ScoutRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('Scout', 2016, ScoutRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};
        requirements['1a'] = new ScoutbookRequirement('1a', 'Repeat from memory the Scout Oath, Scout Law, Scout motto, and Scout slogan. In your own words, explain their meaning. ');
        requirements['1b'] = new ScoutbookRequirement('1b', 'Explain what Scout spirit is. Describe some ways you have shown Scout spirit by practicing the Scout Oath, Scout Law, Scout motto, and Scout slogan.');
        requirements['1c'] = new ScoutbookRequirement('1c', 'Demonstrate the Scout sign, salute, and handshake. Explain when they should be used.');
        requirements['1d'] = new ScoutbookRequirement('1d', 'Describe the First Class Scout badge and tell what each part stands for. Explain the significance of the First Class Scout badge.');
        requirements['1e'] = new ScoutbookRequirement('1e', 'Repeat from memory the Outdoor Code. In your own words, explain what the Outdoor Code means to you.');
        requirements['1f'] = new ScoutbookRequirement('1f', 'Repeat from memory the Pledge of Allegiance. In your own words, explain its meaning.');
        requirements['2'] = new ScoutbookRequirement('2', 'After attending at least one Scout troop meeting, do the following:');
        requirements['2a'] = new ScoutbookRequirement('2a', 'Describe how the Scouts in the troop provide its leadership.');
        requirements['2b'] = new ScoutbookRequirement('2b', 'Describe the four steps of Scout advancement.');
        requirements['2c'] = new ScoutbookRequirement('2c', 'Describe what the Scouts BSA ranks are and how they are earned.');
        requirements['2d'] = new ScoutbookRequirement('2d', 'Describe what merit badges are and how they are earned.');
        requirements['3a'] = new ScoutbookRequirement('3a', 'Explain the patrol method. Describe the types of patrols that are used in your troop.');
        requirements['3b'] = new ScoutbookRequirement('3b', 'Become familiar with your patrol name, emblem, flag, and yell. Explain how these items create patrol spirit.');
        requirements['4a'] = new ScoutbookRequirement('4a', 'Show how to tie a square knot, two half-hitches, and a taut-line hitch. Explain how each knot is used.');
        requirements['4b'] = new ScoutbookRequirement('4b', 'Show the proper care of a rope by learning how to whip and fuse the ends of different kinds of rope.');
        requirements['5'] = new ScoutbookRequirement('5', 'Tell what you need to know about pocketknife safety.');
        requirements['6'] = new ScoutbookRequirement('6', 'With your parent or guardian, complete the exercises in the pamphlet How to Protect Your Children From Child Abuse: A Parent’s Guide and earn the Cyber Chip Award for your grade.');
        requirements['7'] = new ScoutbookRequirement('7', 'Since joining the troop and while working on the Scout rank, participate in a Scoutmaster conference.');
        return requirements;
    }
}

module.exports = ScoutRank2016;