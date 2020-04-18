"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class FirstClassRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('First Class', 2016, FirstClassRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};

        requirements['1a'] = new ScoutbookRequirement('1a', 'Since joining Scouts BSA, participate in 10 separate troop/patrol activities, at least six of which must be held outdoors. Of the outdoor activities, at least three must include overnight camping.     These activities do not include troop or patrol meetings. On campouts, spend the night in a tent that you pitch or other structure that you help erect, such as a lean-to, snow cave,     or tepee.');
        requirements['1b'] = new ScoutbookRequirement('1b', 'Explain each of the principles of Tread Lightly! and tell how you practiced them on a campout or outing. This outing must be different from the ones used for Tenderfoot requirement 1c and Second Class requirement 1b.');
        requirements['2a'] = new ScoutbookRequirement('2a', 'Help plan a menu for one of the above campouts that includes at least one breakfast, one lunch, and one dinner, and that requires cooking at least two of the meals. Tell how the menu includes the foods from MyPlate or the current USDA nutritional model and how it meets nutritional needs for the planned activity or campout.');
        requirements['2b'] = new ScoutbookRequirement('2b', 'Using the menu planned in First Class requirement 2a, make a list showing a budget and the food amounts needed to feed three or more youth. Secure the ingredients.');
        requirements['2c'] = new ScoutbookRequirement('2c', 'Show which pans, utensils, and other gear will be needed to cook and serve these meals.');
        requirements['2d'] = new ScoutbookRequirement('2d', 'Demonstrate the procedures to follow in the safe handling and storage of fresh meats, dairy products, eggs, vegetables, and other perishable food products. Show how to properly dispose of camp garbage, cans, plastic containers, and other rubbish.');
        requirements['2e'] = new ScoutbookRequirement('2e', 'On one campout, serve as cook. Supervise your assistant(s) in using a stove or building a cooking fire. Prepare the breakfast, lunch, and dinner planned in First Class requirement 2a.    Supervise the cleanup.');
        requirements['3a'] = new ScoutbookRequirement('3a', 'Discuss when you should and should not use lashings.');
        requirements['3b'] = new ScoutbookRequirement('3b', 'Demonstrate tying the timber hitch and clove hitch.');
        requirements['3c'] = new ScoutbookRequirement('3c', 'Demonstrate tying the square, shear, and diagonal lashings by joining two or more poles or staves together.');
        requirements['3d'] = new ScoutbookRequirement('3d', 'Use lashings to make a useful camp gadget or structure.');
        requirements['4a'] = new ScoutbookRequirement('4a', 'Using a map and compass, complete an orienteering course that covers at least one mile and requires measuring the height and/or width of designated items (tree, tower, canyon, ditch, etc.).');
        requirements['4b'] = new ScoutbookRequirement('4b', 'Demonstrate how to use a handheld GPS unit, GPS app on a smartphone, or other electronic navigation system. Use GPS to find your current location, a destination of your choice, and the route you will take to get there. Follow that route to arrive at your destination.');
        requirements['5a'] = new ScoutbookRequirement('5a', 'Identify or show evidence of at least 10 kinds of native plants found in your local area or campsite location. You may show evidence by identifying fallen leaves or fallen fruit that you find in the field, or as part of a collection you have made, or by photographs you have taken.');
        requirements['5b'] = new ScoutbookRequirement('5b', 'Identify two ways to obtain a weather forecast for an upcoming activity. Explain why weather forecasts are important when planning for an event.');
        requirements['5c'] = new ScoutbookRequirement('5c', 'Describe at least three natural indicators of impending hazardous weather, the potential dangerous events that might result from such weather conditions, and the appropriate actions to take.');
        requirements['5d'] = new ScoutbookRequirement('5d', 'Describe extreme weather conditions you might encounter in the outdoors in your local geographic area. Discuss how you would determine ahead of time the potential risk of these types of weather dangers, alternative planning considerations to avoid such risks, and how you would prepare for and respond to those weather conditions.');
        requirements['6a'] = new ScoutbookRequirement('6a', 'Successfully complete the BSA swimmer test.');
        requirements['6b'] = new ScoutbookRequirement('6b', 'Tell what precautions must be taken for a safe trip afloat.');
        requirements['6c'] = new ScoutbookRequirement('6c', 'Identify the basic parts of a canoe, kayak, or other boat. Identify the parts of a paddle or an oar.');
        requirements['6d'] = new ScoutbookRequirement('6d', 'Describe proper body positioning in a watercraft, depending on the type and size of the vessel. Explain the importance of proper body position in the boat.');
        requirements['6e'] = new ScoutbookRequirement('6e', 'With a helper and a practice victim, show a line rescue both as tender and as rescuer. (The practice victim should be approximately 30 feet from shore in deep water.)5');
        requirements['7a'] = new ScoutbookRequirement('7a', 'Demonstrate bandages for a sprained ankle and for injuries on the head, the upper arm, and the collarbone.');
        requirements['7b'] = new ScoutbookRequirement('7b', 'By yourself and with a partner, show how to:\n' +
            '• Transport a person from a smoke-filled room.\n' +
            '• Transport for at least 25 yards a person with a sprained ankle.');
        requirements['7c'] = new ScoutbookRequirement('7c', 'Tell the five most common signals of a heart attack. Explain the steps (procedures) in cardiopulmonary resuscitation (CPR).');
        requirements['7d'] = new ScoutbookRequirement('7d', 'Tell what utility services exist in your home or meeting place. Describe potential hazards associated with these utilities and tell how to respond in emergency situations.');
        requirements['7e'] = new ScoutbookRequirement('7e', 'Develop an emergency action plan for your home that includes what to do in case of fire, storm, power outage, and water outage.');
        requirements['7f'] = new ScoutbookRequirement('7f', 'Explain how to obtain potable water in an emergency.');
        requirements['8a'] = new ScoutbookRequirement('8a', 'After completing Second Class requirement 7a, be physically active at least 30 minutes each day for five days a week for four weeks. Keep track of your activities.');
        requirements['8b'] = new ScoutbookRequirement('8b', 'Share your challenges and successes in completing First Class requirement 8a. Set a goal for continuing to include physical activity as part of your daily life.');
        requirements['9a'] = new ScoutbookRequirement('9a', 'Visit and discuss with a selected individual approved by your leader (for example, an elected official, judge, attorney, civil servant, principal, or teacher) the constitutional rights and obligations of a U.S. citizen. ');
        requirements['9b'] = new ScoutbookRequirement('9b', 'Investigate an environmental issue affecting your community.     Share what you learned about that issue with your patrol or troop. Tell what, if anything, could be done by you or your community to address the concern.');
        requirements['9c'] = new ScoutbookRequirement('9c', 'On a Scouting or family outing, take note of the trash and garbage you produce. Before your next similar outing, decide how you can reduce, recycle, or repurpose what you take on that outing, and then put those plans into action. Compare your results.');
        requirements['9d'] = new ScoutbookRequirement('9d', 'Participate in three hours of service through one or more service projects approved by your Scoutmaster. The project(s) must not be the same service project(s) used for Tenderfoot requirement 7b and Second Class requirement 8e. Explain how your service to others relates to the Scout Law.');
        requirements['10'] = new ScoutbookRequirement('10', 'Tell someone who is eligible to join Scouts BSA, or an inactive Scout, about your Scouting activities. Invite this person to an outing, activity, service project, or meeting. Provide information on how to join, or encourage the inactive Scout to become active. Share your efforts with your Scoutmaster or other adult leader.');
        requirements['11'] = new ScoutbookRequirement('11', 'Demonstrate Scout spirit by living the Scout Oath and Scout Law. Tell how you have done your duty to God and how you have lived four different points of the Scout Law (different from those points used for previous ranks) in your everyday life.');
        requirements['12'] = new ScoutbookRequirement('12', 'While working toward the First Class rank, and after completing Second Class requirement 11, participate in a Scoutmaster conference.');
        requirements['13'] = new ScoutbookRequirement('13', 'Successfully complete your board of review for the First Class rank.');

        return requirements;
    };
}
module.exports = FirstClassRank2016;
