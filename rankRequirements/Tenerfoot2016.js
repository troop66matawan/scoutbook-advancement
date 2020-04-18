"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class TenderfootRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('Tenderfoot', 2016, TenderfootRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};
        requirements['1a'] = new ScoutbookRequirement('1a', 'Present yourself to your leader, prepared for an overnight camping trip. Show the personal and camping gear you will use. Show the right way to pack and carry it.');
        requirements['1b'] = new ScoutbookRequirement('1b', 'Spend at least one night on a patrol or troop campout. Sleep in a tent you have helped pitch.');
        requirements['1c'] = new ScoutbookRequirement('1c', 'Tell how you practiced the Outdoor Code on a campout or outing.');
        requirements['2a'] = new ScoutbookRequirement('2a', 'On the campout, assist in preparing one of the meals. Tell why it is important for each patrol member to share in meal preparation and cleanup.');
        requirements['2b'] = new ScoutbookRequirement('2b', 'While on a campout, demonstrate the appropriate method of safely cleaning items used to prepare, serve, and eat a meal.');
        requirements['2c'] = new ScoutbookRequirement('2c', 'Explain the importance of eating together as a patrol.');
        requirements['3a'] = new ScoutbookRequirement('3a', 'Demonstrate a practical use of the square knot.');
        requirements['3b'] = new ScoutbookRequirement('3b', 'Demonstrate a practical use of two half-hitches.');
        requirements['3c'] = new ScoutbookRequirement('3c', 'Demonstrate a practical use of the taut-line hitch.');
        requirements['3d'] = new ScoutbookRequirement('3d', 'Demonstrate proper care, sharpening, and use of the knife, saw, and ax. Describe when each should be used.');
        requirements['4a'] = new ScoutbookRequirement('4a', 'Show first aid for the following:\n' +
            '• Simple cuts and scrapes\n' +
            '• Blisters on the hand and foot\n' +
            '• Minor (thermal/heat) burns or scalds (superficial, or first-degree)\n' +
            '• Bites or stings of insects and ticks\n' +
            '• Venomous snakebite\n' +
            '• Nosebleed\n' +
            '• Frostbite and sunburn\n' +
            '• Choking\n');
        requirements['4b'] = new ScoutbookRequirement('4b', 'Describe common poisonous or hazardous plants; identify anythat grow in your local area or campsite location. Tell how to treat for exposure to them.');
        requirements['4c'] = new ScoutbookRequirement('4c', 'Tell what you can do while on a campout or other outdoor activity to prevent or reduce the occurrence of injuries or exposure listed in Tenderfoot requirements 4a and 4b.');
        requirements['4d'] = new ScoutbookRequirement('4d', 'Assemble a personal first-aid kit to carry with you on future campouts and hikes. Tell how each item in the kit would be used.');
        requirements['5a'] = new ScoutbookRequirement('5a', 'Explain the importance of the buddy system as it relates to your personal safety on outings and in your neighborhood.  Use the buddy system while on a troop or patrol outing.');
        requirements['5b'] = new ScoutbookRequirement('5b', 'Describe what to do if you become lost on a hike or campout.');
        requirements['5c'] = new ScoutbookRequirement('5c', 'Explain the rules of safe hiking, both on the highway and crosscountry, during the day and at night.');
        requirements['6a'] = new ScoutbookRequirement('6a', 'Record your best in the following tests:' +
            '• Pushups (Record the number done correctly in 60 seconds.)\n' +
            '• Situps or curl-ups (Record the number done correctly in 60 seconds.)\n' +
            '• Back-saver sit-and-reach (Record the distance stretched.)\n' +
            '• 1-mile walk/run (Record the time.)\n');
        requirements['6b'] = new ScoutbookRequirement('6b', 'Develop and describe a plan for improvement in each of the activities listed in Tenderfoot requirement 6a. Keep track of your activity for at least 30 days.');
        requirements['6c'] = new ScoutbookRequirement('6c', 'Show improvement (of any degree) in each activity listed in Tenderfoot requirement 6a after practicing for 30 days.' +
            '• Pushups (Record the number done correctly in60 seconds.)\n' +
            '• Situps or curl-ups (Record the number done correctly in 60 seconds.)\n' +
            '• Back-saver sit-and-reach (Record the distance stretched.)\n' +
            '• 1-mile walk/run (Record the time.)\n');
        requirements['7a'] = new ScoutbookRequirement('7a', 'Demonstrate how to display, raise, lower, and fold the U.S. flag.');
        requirements['7b'] = new ScoutbookRequirement('7b', 'Participate in a total of one hour of service in one or more service projects approved by your Scoutmaster. Explain how your service to others relates to the Scout slogan and Scout motto.');
        requirements['8'] = new ScoutbookRequirement('8', 'Describe the steps in Scouting’s Teaching EDGE method. Use the Teaching EDGE method to teach another person how to tie the square knot.');
        requirements['9'] = new ScoutbookRequirement('9', 'Demonstrate Scout spirit by living the Scout Oath and Scout Law.  Tell how you have done your duty to God and how you have lived four different points of the Scout Law in your everyday life.');
        requirements['10'] = new ScoutbookRequirement('10', 'While working toward the Tenderfoot rank, and after completing Scout rank requirement 7, participate in a Scoutmaster conference.');
        requirements['11'] = new ScoutbookRequirement('11', 'Successfully complete your board of review for the Tenderfoot rank.');
        return requirements;
    }
}

module.exports = TenderfootRank2016;
            