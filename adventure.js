
commands = {
    "go"      : {
                    "execute" : playermove,
                    "aliases" : [
                                  [ "go" ],
                                  [ "go", "to", "the" ],
                                  [ "move", "to", "the" ],
                                  [ "run", "to", "the" ],
                                  [ "walk", "to", "the" ],
                                  [ "walk" ],
                                  [ "run" ],
                                  [ "move" ]
                                ]
                },
    "north"   : {
                    "execute" : playermovenorth,
                    "aliases" : [
                                  [ "north" ]
                                ]
                },

    "quit"    : {
                    "execute" : stopgame,
                    "aliases" : [
                                  [ "exit" ],
                                  [ "quit" ],
                                  [ "end", "game" ],
                                  [ "stop", "playing" ],
                                  [ "stop", "game" ],
                                  [ "halt", "game" ]
                                ]
                },

    // Keep before the 'take' command so that 'take inventory' will work
    "inventory" : {
                    "execute" : showinventory,
                    "aliases" : [
                                  [ "inventory" ],
                                  [ "take", "inventory" ],
                                  [ "what", "do", "i", "have?" ],
                                  [ "what", "do", "i", "have" ],
                                  [ "whats", "in", "my", "inventory?" ],
                                  [ "whats", "in", "my", "inventory" ]
                                ]
                  },

    "examine" : {
                    "execute" : examineobject,
                    "aliases" : [
                                  [ "examine" ],
                                  [ "look" ],
                                  [ "look", "at" ],
                                ]
                },
    "take"    : { 
                    "execute" : takeobject,
                    "aliases" : [
                                  [ "get" ],
                                  [ "get", "the" ],
                                  [ "get", "a" ],
                                  [ "take" ],
                                  [ "take", "the" ],
                                  [ "take", "a" ]
                                ]
                },
    "drop"    : { 
                    "execute" : dropobject,
                    "aliases" : [
                                  [ "drop" ],
                                  [ "drop", "the" ]
                                ]
                },
    "unused"  : {
                    "execute" : neverrun,
                    "aliases" : []
                }
};

objects = {
    "lightswitch" : {
        "inroomDescription" : "a lightswitch on the wall",
        "shortDescription"  : "a lightswitch",
        "longDescription"   : "It's a standard lightswitch. ",
        "lookDescription"   : "It's a standard lightswitch.  It appears to be turned off.",
        "takeable"          : false,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "lightswitch" ],
                                [ "the", "lightswitch" ],
                                [ "the", "light" ],
                                [ "the", "lights" ],
                                [ "the", "light", "switch" ],
                                [ "light", "switch" ],
                                [ "light-switch" ],
                                [ "the", "light-switch" ],
                              ]
    },
    "qbamaze" : {
        "inroomDescription" : "an ornate Q-Ba-Maze next to the bed",
        "vinroomDescription": "an ornate Cuba Maze next to the bed",
        "shortDescription"  : "a Q-Ba-Maze",
        "vshortDescription" : "a Cuba Maze",
        "longDescription"   : "The Q-Ba-Maze looks like alot of fun.  Unfortunately, I don't " +
                              "see any marbles around!",
        "vlongDescription"  : "The Cuba Maze looks like alot of fun.  Unfortunately, I don't " +
                              "see any marbles around!",
        "lookDescription"   : "The Q-Ba-Maze is a multi-colored track that normally " +
                              "carries a silver marble through a series of stunts.  Unfortunately, " +
                              "I don't see any silver marbles around here!",
        "vlookDescription"  : "The Cube Maze is a multi-colored track that normally " +
                              "carries a silver marble through a series of stunts.  Unfortunately, " +
                              "I don't see any silver marbles around here!",
//        "takeable"          : false,
        "takeable"          : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "cubamaze" ],
                                [ "the", "cubamaze" ],
                                [ "cuba-maze" ],
                                [ "the", "cuba-maze" ],
                                [ "qbamaze" ],
                                [ "the", "qbamaze" ],
                                [ "q-ba-maze" ],
                                [ "the", "q-ba-maze" ],
                                [ "q", "ba", "maze" ],
                                [ "the", "q", "ba", "maze" ],
                                [ "qba", "maze" ],
                                [ "the", "qba", "maze" ],
                                [ "q-ba", "maze" ],
                                [ "the", "q-ba", "maze" ],
                                [ "cuba", "maze" ],
                                [ "the", "cuba", "maze" ]
                              ]
    },

    "marble" : {
        "inroomDescription" : "a shiny silver marble is sitting on the ground underneath the shelf",
        "shortDescription"  : "a silver marble",
        "longDescription"   : "The marble looks like the perfect size for a Q-Ba-Maze. ",
        "takeable"          : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "marble" ],
                                [ "the", "marble" ],
                                [ "shiny", "marble" ],
                                [ "silver", "marble" ],
                                [ "silver", "metal", "marble" ],
                                [ "the", "silver", "marble" ],
                                [ "the", "shiny", "silver", "marble" ],
                                [ "the", "shiny", "silver", "metal", "marble" ],
                                [ "shiny", "silver", "metal", "marble" ],
                                [ "the", "shiny", "marble" ],
                                [ "metal", "marble" ],
                                [ "the", "metal", "marble" ],
                                [ "shiny", "metal", "marble" ],
                                [ "the", "shiny", "metal", "marble" ]
                              ]
    },

    "lightstring" : {
        "inroomDescription" : "a string of green lights surrounding the window to the left",
        "shortDescription"  : "a string of green lights",
        "longDescription"   : "The string of green colored lights makes the entire bedroom glow " +
                              "an eerie shade of green. ",
        "takeable"          : true,
        "takencount"        : 0,
        "aliases"           : [ 
                                [ "lights" ],
                                [ "the", "lights" ],
                                [ "string", "of", "lights" ],
                                [ "the", "string", "of", "lights" ],
                                [ "string", "of", "green", "lights" ],
                                [ "christmas", "lights" ],
                                [ "the", "christmas", "lights" ],
                                [ "the", "string", "of", "christmas", "lights" ],
                                [ "the", "string", "of", "green", "christmas", "lights" ],
                                [ "green", "lights" ],
                                [ "the", "green", "lights" ],
                                [ "lightstring" ],
                                [ "the", "lightstring" ],
                                [ "the", "light", "string" ],
                                [ "light", "string" ],
                                [ "the", "string", "of", "lights" ],
                                [ "the", "string", "of", "green", "lights" ]
                              ]
    }
};

rooms = {
    "jbedroom" : { 
        "shortDescription"  : "Jackson's bedroom",
        "longDescription"   : "You are in Jackson's Bedroom. ",
        "exits"             : { 
                                "north" : { "visible" : true,  "destination" : "uphall" },
                              },
        "objects"           : [ "qbamaze" , "lightstring", "marble" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },
    "uphall" : {
        "shortDescription"  : "the upstairs hallway",
        "longDescription"   : "You are in the upstairs hallway. The light overhead casts a " +
                              "warm glow over the glossy wooden floor. ",
        "exits"             : { 
                                "north" : { "visible" : true,  "destination" : "mdbedroom" }, 
                                "south" : { "visible" : true,  "destination" : "jbedroom" }, 
                                "east"  : { "visible" : true,  "destination" : "upbath" }, 
                                "west"  : { "visible" : false,  "destination" : "upcloset" }, 
                              },
        "objects"           : [ "lightswitch" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "upcloset" : {
        "shortDescription"  : "the upstairs closet",
        // TODO: turn these into objects
        "longDescription"   : "You are in the upstairs closet. There are rows and rows of " +
                              "mommy's clothes all around. In the back there is a shelf " +
                              "which contains neatly folded shirts. ",
        "exits"             : { 
                                "east"  : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "upbath" : {
        "shortDescription"  : "the upstairs bathroom",
        "longDescription"   : "You are in the upstairs bathroom. To the left of you " +
                              "is a bathtub. To the right you see a toilet and a sink. ",
        "exits"             : { 
                                "west"  : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "mdbedroom" : {
        "shortDescription"  : "Mommie and Daddy's Bedroom",
        "longDescription"   : "You are in Mommie and Daddy's bedroom. Mommy and Daddy's " +
                              "bed is directly in front of you. ",
        "exits"             : { 
                                "south" : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [],
        "visitCount"        : 0,
        "printedlong"       : false
    },
};

directions = {
    "north" : {
        "aliases"           : [ 
                                [ "north" ], 
                                [ "to", "the", "north" ],
                                [ "to", "north" ],
                              ]
    },
    "south" : {
        "aliases"           : [
                                [ "south" ],
                                [ "to", "the", "south" ],
                                [ "to", "south" ],
                              ]
    },
    "east" : {
        "aliases"           : [ 
                                [ "east" ],
                                [ "to", "the", "east" ],
                                [ "to", "east" ],
                              ]
    },
    "west" : {
        "aliases"           : [
                                [ "west" ],
                                [ "to", "the", "west" ],
                                [ "to", "west" ],
                              ]
    },
    "up" : {
        "aliases"           : [ 
                                [ "up" ],
                                [ "upstairs" ],
                              ]
    },
    "down" : {
        "aliases"           : [ 
                                [ "down" ],
                                [ "downstairs" ],
                              ]
    },
};

player = {
    "loc"                   : "jbedroom",
    "inventory"             : [],
    "disappeared"           : [],
    "finished"              : false,
    "stopping"              : false,
    "showroominfo"          : true,
    "showobjectinfo"        : true,
    "showexitinfo"          : true,
    "showstatusinfo"        : true,
    "showresponsestring"    : true,
    "usevoice"              : false,
    "introduction"          : "Welcome to Jackson's adventure. Your mission is to " +
                              "find a rocket ship that will take you into outer space. ",
    "voiceintroduction"     : "Welcome to Jackson's adventure. Your mission is to " +
                              "find a rocket ship that will take you into outer space. ",
    "conclusion"            : "Congratulations!  You have made it to the rocket ship! " +
                              "You watch the earth disappear in the distance as the " +
                              "rocket ship takes you to Saturn. ",
    "voiceconclusion"       : "Congratulations!  You have made it to the rocket ship! " +
                              "You watch the earth disappear in the distance as the " +
                              "rocket ship takes you to Saturn. ",
    "commands"              : commands,
    "objects"               : objects,
    "rooms"                 : rooms,
    "directions"            : directions
};






function outp(str) {
    console.log(str);
}

function showobjects(player, objects, objectlist, response) {
    if (objectlist.length == 0) {
        return;
    }

    response.responsestring += "You see ";

    var current = 0;
    var first = true;
    for (var name in objectlist) {
        if (!first)
            response.responsestring += " ";
        first = false;

        if (objects[objectlist[name]].takencount == 0) {
            if (player.usevoice && objects[objectlist[name]].vinroomDescription) {
                response.responsestring += objects[objectlist[name]].vinroomDescription;
            }
            else {
                response.responsestring += objects[objectlist[name]].inroomDescription;
            }
        }
        else {
            if (player.usevoice && objects[objectslist[name]].vshortDescription) {
                response.responsestring += objects[objectlist[name]].vshortDescription;
            }
            else {
                response.responsestring += objects[objectlist[name]].shortDescription;
            }
        }

        current++;
        if (objectlist.length > 1 && current == objectlist.length - 1)
            response.responsestring += " and";
    }

    response.responsestring += ". ";
}

function showroom(player, rooms, room, response) {
    var roominfo = rooms[room];
    if (!roominfo.printedlong) {
        if (player.usevoice && roominfo.vlongDescription) {
            response.responsestring += roominfo.vlongDescription;
        }
        else {
            response.responsestring += roominfo.longDescription;
        }
        roominfo.printedlong = true;
    }
    else {
        response.responsestring += "You are in ";
        if (player.usevoice && roominfo.vshortDescription) {
            response.responsestring += roominfo.vshortDescription + ". ";
        }
        else {
            response.responsestring += roominfo.shortDescription + ". ";
        }
    }
}

function showexits(player, exitlist, response) {
    var cnt = 0;
    for (var name in exitlist) {
        if(exitlist[name].visible) {
            cnt++;
        }
    }
    if (cnt == 0) {
        response.responsestring += "You see no exits. ";
        return;
    }

    if (cnt == 1)
        response.responsestring += "There is an exit to the ";
    else
        response.responsestring += "There are exits to the ";

    var current = 0;
    
    for (var name in exitlist) {
        if(exitlist[name].visible) {
            current++;
            if (current == cnt)
                response.responsestring += name + ". ";
            else
                response.responsestring += name + ", ";
            if (cnt > 1 && current == cnt - 1) {
                response.responsestring += "and ";
            }
        }
    }

    return;
}

function neverrun(player, objects, unused, response) {
    outp("I should never be in the neverrun handler");
    process.exit(1);
}

function normalizeCommand(commands, words, idx) {
    for (var cmd in commands) {
        aliaslist = commands[cmd].aliases;
        for (var j=0 ; j < aliaslist.length; j++) {
            var alias=aliaslist[j];
            var match=true;
            for (var k=0 ; k < alias.length; k++) {
                if (!words[idx + k] || words[idx + k] !== alias[k]) {
                    match=false;
                    break;
                }
            }
            if (match) {
                var newidx = alias.length + idx;
                return { "normalized" : cmd, "newindex" : newidx };
            }
        }
    }
    return null;
}

function normalizeObject(objects, words, idx) {
    for (var obj in objects) {
        aliaslist = objects[obj].aliases;
        for (var j=0 ; j < aliaslist.length; j++) {
            var alias=aliaslist[j];
            var match=true;
            for (var k=0 ; k < alias.length; k++) {
                if (!words[idx + k] || words[idx + k] !== alias[k]) {
                    match=false;
                    break;
                }
            }
            if (match) {
                var newidx = alias.length + idx;
                return { "normalized" : obj, "newindex" : newidx };
            }
        }
    }
    return null;
}

function dropobject(player, words, idx, response) {
    var rooms = player.rooms;
    var objects = player.objects;
    var roominfo = rooms[player.loc];
    var realobj = normalizeObject(objects, words, idx);
    var idx = realobj ? player.inventory.indexOf(realobj.normalized) : -1;
    if (idx == -1) {
        response.responsestring += "I don't have that!\n";
    }
    else {
        roominfo.objects.push(realobj.normalized);
        player.inventory.splice(idx, 1);
        objects[realobj.normalized].droppedcount++;
        response.responsestring += "Dropped.\n";
    }
}

function takeobject(player, words, idx, response) {
    var rooms = player.rooms;
    var objects = player.objects;
    var roominfo = rooms[player.loc];
    var realobj = normalizeObject(objects, words, idx);
    var idx = realobj ? roominfo.objects.indexOf(realobj.normalized) : -1;
    if (idx == -1) {
        response.responsestring += "I don't see that here!\n";
    }
    else if (objects[realobj.normalized].takeable == false) {
        response.responsestring += "I can't take that!\n";
    }
    else {
        roominfo.objects.splice(idx, 1);
        player.inventory.push(realobj.normalized);
        objects[realobj.normalized].takencount++;
        response.responsestring += "Taken.\n";
    }
}

function examineobject(player, words, idx, response) {
    var objects = player.objects;
    var roominfo = rooms[player.loc];
    var realobj = normalizeObject(objects, words, idx);
    var idx = realobj ? roominfo.objects.indexOf(realobj.normalized) : -1;

    if (idx != -1) {
        if (player.usevoice && objects[realobj].vlongDescription) {
            response.responsestring += objects[realobj].vlongDescription;
        }
        else {
        }
    }
}

function showinventory(player, words, idx, response) {
    var objects = player.objects;
    if (player.inventory.length == 0) {
        response.responsestring += "You aren't carrying anything.\n";
    }
    else {
        response.responsestring += "You are carrying:\n";
        for (var idx = 0 ; idx < player.inventory.length; idx++) {
            if (player.usevoice && objects[player.inventory[idx]].vshortDescription) {
                response.responsestring += 
                    objects[player.inventory[idx]].vshortDescription + "\n";
            }
            else {
                response.responsestring += 
                    objects[player.inventory[idx]].shortDescription + "\n";
            }
        }
    }
}

function exitgame(player, rooms, objects, object, response) {
}

function normalizeDirection(directions, words, idx) {
    for (var dir in directions) {
        aliaslist = directions[dir].aliases;
        for (var j=0 ; j < aliaslist.length; j++) {
            var alias=aliaslist[j];
            var match=true;
            for (var k=0 ; k < alias.length; k++) {
                if (!words[idx + k] || words[idx + k] !== alias[k]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                var newidx = alias.length + idx;
                return { "normalized" : dir, "newindex" : newidx };
            }
        }
    }
    return null;
}


function playermove(player, words, idx, response) {
    var rooms = player.rooms;
    var objects = player.objects;
    var normalized = normalizeDirection(directions, words, idx);
    var roominfo = rooms[player.loc];
    var dir = normalized ? normalized.normalized : null;

    if (dir && roominfo.exits[dir] && roominfo.exits[dir].visible) {
        player.loc = roominfo.exits[dir].destination;
        rooms[player.loc].visitCount++;
    }
    else {
        response.responsestring += "You cannot go that direction. ";
    }
    return idx + 1;
}

function stopgame(player, words, idx, response) {
    player.stopping = true;
    return idx + 1;
}

function showstatusinfo(player, rooms, objects, response) {

    if (player.showroominfo) {
        showroom(player, rooms, player.loc, response);
    }

    if (player.showobjectinfo) {
        showobjects(player, objects, rooms[player.loc].objects, response);
    }

    if (player.showexitinfo) {
        showexits(player, rooms[player.loc].exits, response);
    }
}

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('> ');
var response = { responsestring : "" };
response.responsestring += player.usevoice ? player.voiceintroduction : player.introduction;
showstatusinfo(player, player.rooms, player.objects, response);
outp(response.responsestring);
rl.prompt();

rl.on('line', function processline(line) {
    var lc = line.toLowerCase();
    var words = lc.split(" ");
    response.responsestring = "";
    player.showstatusinfo = true;
    player.showresponsestring = true;
    var cmd = normalizeCommand(player.commands, words, 0);
    if (cmd != null)
        (player.commands[cmd.normalized].execute)(player, words, cmd.newindex, response);
    else {
        if (words[0].length > 0)
            response.responsestring += "I do not understand that command.\n";
        else {
            player.showstatusinfo = false;
            player.showresponsestring = false;
        }
    }

    if (player.stopping) {
        process.exit(0);
    }
    if (player.finished) {
        response.responsestring += player.conclusion;
        outp(response.responsestring);
    }
    else {
        if (player.showstatusinfo)
            showstatusinfo(player, player.rooms, player.objects, response);
        if (player.showresponsestring)
            outp(response.responsestring);
        rl.prompt();
    }
});


