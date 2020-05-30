const shuffle = require('../my_functions/shuffle.js');
//const embedsend = require('../my_functions/rtg_to_embed.js');

const group_nos = parseInt('2');
const nice = [1, 2, 3, 4, 5, 6];
shuffle(nice);
var niced = output_group(nice, group_nos, true);
//console.log(niced);

module.exports = (array, group_nos_input, sort_leftover) => {
    parseInt(group_nos_input);
    var teams;

    //console.log(group_nos_input);
    //console.log(sort_leftover);
    //console.log(embed);

    //console.log('input teams' + array);

    if (group_nos_input !== group_nos && group_nos_input !== undefined) {
        //console.log('teams before output' + array);
        teams = output_group(array, group_nos_input, sort_leftover);
    } else {
        //console.log('hi' + array);
        // console.log('teams2 ' + teams);
        teams = output_group(array, group_nos, sort_leftover);
        //console.log('teams3 ' + teams);
    }


    return teams;


};


function output_group(array, groups, sort_leftover) {
    shuffle(array);
    var string_out = [];

    ppl_per_group = Math.floor(array.length / groups); //3

    var leftover = array.length % groups;

    for (var ind = 0; ind < groups; ind++) { //create group nos
        string_out["Group " + (ind + 1)] = array.slice(ppl_per_group * ind, (ppl_per_group * (ind + 1)));
        //slice array from gs * 0 to gs*0+1 and so on. 
    }

    if (leftover !== 0 && sort_leftover === true) {

        var lef_loop_check = 0;
        for (var i = 0; i < leftover; i++) {
            lef_loop_check++;

            if (lef_loop_check > leftover) { break };
            if (i >= groups) { i = 0; }
            //i>group nos index, needs to be reset when =0
            string_out["Group " + (i + 1)].push(array[(array.length - leftover + lef_loop_check - 1)]);
        }

    }
    return string_out;
}