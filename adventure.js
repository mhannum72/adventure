
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
                                  [ "north" ],
                                ]
                },

    "south"   : {
                    "execute" : playermovesouth,
                    "aliases" : [
                                  [ "south" ],
                                ]
                },
    "east"    : {
                    "execute" : playermoveeast,
                    "aliases" : [
                                  [ "east" ],
                                ]
                },
    "west"    : {
                    "execute" : playermovewest,
                    "aliases" : [
                                  [ "west" ],
                                ]
                },
    "up"      : {
                    "execute" : playermoveup,
                    "aliases" : [
                                  [ "up" ],
                                ]
                },
    "down"    : {
                    "execute" : playermovedown,
                    "aliases" : [
                                  [ "down" ],
                                ]
                },


    "quit"    : {
                    "execute" : stopgame,
                    "aliases" : [
                                  [ "end", "game" ],
                                  [ "stop", "playing" ],
                                  [ "stop", "game" ],
                                  [ "halt", "game" ],
                                  [ "exit" ],
                                  [ "quit" ],

                                ]
                },

    // Keep before the 'take' command so that 'take inventory' will work
    "inventory" : {
                    "execute" : showinventory,
                    "aliases" : [
                                  [ "whats", "in", "my", "inventory" ],
                                  [ "whats", "in", "my", "inventory?" ],
                                  [ "what", "do", "i", "have" ],
                                  [ "what", "do", "i", "have?" ],
                                  [ "take", "inventory" ],
                                  [ "inventory" ],
                                ]
                  },

    "examine" : {
                    "execute" : examineobject,
                    "aliases" : [
                                  [ "look", "at", "the" ],
                                  [ "look", "at" ],
                                  [ "examine", "the" ],
                                  [ "examine" ],
                                  [ "look" ],
                                ]
                },
    "take"    : { 
                    "execute" : takeobject,
                    "aliases" : [
                                  [ "pick", "up", "the" ],
                                  [ "get", "the" ],
                                  [ "pick", "up" ],
                                  [ "grab", "the" ],
                                  [ "get", "a" ],
                                  [ "take", "the" ],
                                  [ "take", "a" ],
                                  [ "take" ],
                                  [ "get" ],
                                ]
                },
    "drop"    : { 
                    "execute" : dropobject,
                    "aliases" : [
                                  [ "drop", "the" ],
                                  [ "drop" ],
                                ]
                },
        /*
    "unused"  : {
                    "execute" : neverrun,
                    "aliases" : []
                }
                */
};

objects = {
    "coathanger" : {
        "inroomDescription" : "a wire coat hanger",
        "shortDescription"  : "a coat hanger",
        "longDescription"   : "A wire coat hanger hangs on the closet-rod close to the wall.",
        "lookDescription"   : "Its a wire coat hanger.  There is a tube of cardboard covering the bottom.",
        "takeable"          : true,
        "visible"           : false,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "wire", "coat","hanger" ],
                                [ "the", "coat","hanger" ],
                                [ "the", "wire","hanger" ],
                                [ "wire", "coat","hanger" ],
                                [ "the", "clothes","hanger" ],
                                [ "the", "hanger" ],
                                [ "coat","hanger" ],
                                [ "wire","hanger" ],
                                [ "clothes","hanger" ],
                                [ "hanger" ],
                              ]
    },

    "plasticwrap" : {
        "inroomDescription" : "plastic wrap covering one of mommy's dresses",
        "shortDescription"  : "plastic wrap",
        "longDescription"   : "It's shiny plastic wrap. It covers one of mommy's dresses.",
        "lookDescription"   : "The plastic wrap covers one of mommy's dresses. It looks very sturdy.",
        "canttaketext"      : "You can't take that- it's protecting mommy's dress!",
        "takeable"          : false,
        "visible"           : false,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "dress", "cover" ],
                                [ "the", "plastic", "wrap" ],
                                [ "dress", "cover" ],
                                [ "the", "plastic" ],
                                [ "plastic", "wrap" ],
                                [ "plastic" ],
                              ]
    },
    "mommysclothes" : {
        "inroomDescription" : "mommy's clothes neatly hanging in rows",
        "shortDescription"  : "mommy's clothes",
        "longDescription"   : "Mommy's work clothes are neatly hanging on coat hangers.",
        "lookDescription"   : "Mommy's work clothes are neatly hanging on hangers. ",
        "canttaketext"      : "You can't take that!  It belongs to Mommy!",
        "takeable"          : false,
        "visible"           : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "mommy's", "work", "clothes" ],
                                [ "mommies", "work", "clothes" ],
                                [ "mommys", "work", "clothes" ],
                                [ "mommy's", "clothes" ],
                                [ "mommies", "clothes" ],
                                [ "mommys", "clothes" ],
                                [ "clothes" ],
                              ]
    },

    "lightswitch" : {
        "inroomDescription" : "a lightswitch on the wall",
        "shortDescription"  : "a lightswitch",
        "longDescription"   : "It's a standard lightswitch.",
        "lookDescription"   : "It's a standard lightswitch.  It appears to be turned off.",
        "takeable"          : false, 
        "visible"           : false,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "light", "switch" ],
                                [ "at", "the", "switch" ],
                                [ "the", "lightswitch" ],
                                [ "the", "light" ],
                                [ "the", "lights" ],
                                [ "the", "switch" ],
                                [ "light", "switch" ],
                                [ "the", "light-switch" ],
                                [ "light-switch" ],
                                [ "lightswitch" ],
                                [ "switch" ],
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
        "canttaketext"      : "You can't take that!  It belongs where it is!",
        "takeable"          : false,
        "visible"           : true,
//        "takeable"          : true,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "q", "ba", "maze" ],
                                [ "the", "q-ba", "maze" ],
                                [ "the", "cuba", "maze" ],
                                [ "the", "qba", "maze" ],
                                [ "q", "ba", "maze" ],
                                [ "the", "cuba-maze" ],
                                [ "the", "q-ba-maze" ],
                                [ "the", "cubamaze" ],
                                [ "the", "qbamaze" ],
                                [ "qba", "maze" ],
                                [ "q-ba", "maze" ],
                                [ "cuba", "maze" ],
                                [ "cubamaze" ],
                                [ "cuba-maze" ],
                                [ "qbamaze" ],
                                [ "q-ba-maze" ],
                              ]
    },

    "marble" : {
        "inroomDescription" : "a shiny silver marble is sitting on the ground underneath the shelf",
        "shortDescription"  : "a silver marble",
        "longDescription"   : "The marble looks like the perfect size for a Q-Ba-Maze.",
        "lookDescription"   : "It's a shiny silver marble that looks to be the perfect size for " +
                              "a Q-Ba-Maze.",
        "takeable"          : false,
        "visible"           : false,
        "takencount"        : 0,
        "droppedcount"      : 0,
        "aliases"           : [ 
                                [ "the", "shiny", "silver", "metal", "marble" ],
                                [ "shiny", "silver", "metal", "marble" ],
                                [ "the", "shiny", "silver", "marble" ],
                                [ "the", "shiny", "metal", "marble" ],
                                [ "silver", "metal", "marble" ],
                                [ "shiny", "metal", "marble" ],
                                [ "the", "silver", "marble" ],
                                [ "the", "shiny", "marble" ],
                                [ "the", "metal", "marble" ],
                                [ "silver", "marble" ],
                                [ "shiny", "marble" ],
                                [ "metal", "marble" ],
                                [ "the", "marble" ],
                                [ "marble" ],
                              ]
    },

    "lightstring" : {
        "inroomDescription" : "a string of green lights surrounding the window to the left",
        "inroomLongDescription" : "It's a string of green lights surrounding the window to the left. " +
                              "It makes the entire bedroom glow an eerie shade of green.",
        "shortDescription"  : "a string of green lights",
        "longDescription"   : "The string of green colored lights.",
        "lookDescription"   : "It's a string of green colored lights makes the entire bedroom glow " +
                              "an eerie shade of green.",
        "takeable"          : true,
        "visible"           : true,
        "takencount"        : 0,
        "aliases"           : [ 
                                [ "the", "string", "of", "green", "christmas", "lights" ],
                                [ "the", "string", "of", "christmas", "lights" ],
                                [ "the", "string", "of", "green", "lights" ],
                                [ "string", "of", "green", "lights" ],
                                [ "the", "string", "of", "lights" ],
                                [ "the", "christmas", "lights" ],
                                [ "the", "light", "string" ],
                                [ "the", "green", "lights" ],
                                [ "string", "of", "lights" ],
                                [ "christmas", "lights" ],
                                [ "the", "lightstring" ],
                                [ "green", "lights" ],
                                [ "light", "string" ],
                                [ "the", "lights" ],
                                [ "lightstring" ],
                                [ "lights" ],
                              ]
    }
};

// Longdescriptions are punctuated.  short descriptions are not 
rooms = {
    "jbedroom" : { 
        "shortDescription"  : "Jackson's bedroom",
        "longDescription"   : "You are in Jackson's Bedroom.",
        "exits"             : { 
                                "north" : { "visible" : true,  "destination" : "uphall" },
                              },
        "objects"           : [ "qbamaze" , "lightstring" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },
    "uphall" : {
        "shortDescription"  : "the upstairs hallway",
        "longDescription"   : "You are in the upstairs hallway. The light overhead casts a " +
                              "warm glow over the glossy wooden floor.",
        "exits"             : { 
                                "north" : { "visible" : true,  "destination" : "mdbedroom" }, 
                                "south" : { "visible" : true,  "destination" : "jbedroom" }, 
                                "east"  : { "visible" : false,  "destination" : "upbath" }, 
                                "west"  : { "visible" : true,  "destination" : "upcloset" }, 
                              },
        "objects"           : [ "lightswitch" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "upcloset" : {
        "shortDescription"  : "the upstairs closet",
        "longDescription"   : "You are in the upstairs closet.",
        "exits"             : { 
                                "east"  : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [ "mommysclothes", "plasticwrap", "coathanger" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "upbath" : {
        "shortDescription"  : "the upstairs bathroom",
        "longDescription"   : "You are in the upstairs bathroom.",
        "exits"             : { 
                                "west"  : { "visible" : true,  "destination" : "uphall" }, 
                              },
        "objects"           : [ "bathtub", "toilet" ],
        "visitCount"        : 0,
        "printedlong"       : false
    },

    "mdbedroom" : {
        "shortDescription"  : "Mommie and Daddy's Bedroom",
        "longDescription"   : "You are in Mommie and Daddy's bedroom. Mommy and Daddy's " +
                              "bed is directly in front of you.",
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
                                [ "to", "the", "north" ],
                                [ "to", "north" ],
                                [ "north" ], 
                              ]
    },
    "south" : {
        "aliases"           : [
                                [ "to", "the", "south" ],
                                [ "to", "south" ],
                                [ "south" ],
                              ]
    },
    "east" : {
        "aliases"           : [ 
                                [ "to", "the", "east" ],
                                [ "to", "east" ],
                                [ "east" ],
                              ]
    },
    "west" : {
        "aliases"           : [
                                [ "to", "the", "west" ],
                                [ "to", "west" ],
                                [ "west" ],
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

    var count = 0;
    var current = 0;
    var first = true;

    for (var name in objectlist) {
        if (objects[objectlist[name]].visible)
            count++;
    }

    if (count == 0) {
        return;
    }

    response.responsestring += "You see ";

    for (var name in objectlist) {
        if (objects[objectlist[name]].visible) {

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
                if (player.usevoice && objects[objectlist[name]].vshortDescription) {
                    response.responsestring += objects[objectlist[name]].vshortDescription;
                }
                else {
                    response.responsestring += objects[objectlist[name]].shortDescription;
                }
            }

            current++;
            if (count > 1 && current == count - 1)
                response.responsestring += " and";
        }
    }

    response.responsestring += ". ";

}

function showroom(player, rooms, room, response) {
    var roominfo = rooms[room];
    if (!roominfo.printedlong) {
        if (player.usevoice && roominfo.vlongDescription) {
            response.responsestring += roominfo.vlongDescription + " ";
        }
        else {
            response.responsestring += roominfo.longDescription + " ";
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
        if(objects[realobj.normalized].canttaketext) {
            response.responsestring += objects[realobj.normalized].canttaketext + "\n";
        }
        else
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
    var idx; //= realobj ? roominfo.objects.indexOf(realobj.normalized) : -1;

    if (!realobj) {
        response.responsestring += "I don't see that here.\n";
        return idx;
    }

    idx = roominfo.objects.indexOf(realobj.normalized);
    if (idx == -1) {
        idx = player.inventory.indexOf(realobj.normalized);
    }
    if (idx == -1) {
        response.responsestring += "I don't see that here.\n";
        return idx;
    }

    if (objects[realobj.normalized].takencount == 0 &&
            objects[realobj.normalized].inroomLongDescription != null) {
            if (player.usevoice && objects[realobj.normalized].vinroomLongDescription) {
                response.responsestring += objects[realobj.normalized].vinroomLongDescription + "\n";
            }
            else {
                response.responsestring += objects[realobj.normalized].inroomLongDescription + "\n";
            }
    }

    else if (player.usevoice && objects[realobj].vlongDescription) {
        response.responsestring += objects[realobj.normalized].vlookDescription + "\n";
    }
    else {
        response.responsestring += objects[realobj.normalized].lookDescription + "\n";
    }
    return idx;
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

function playermoveint(player, words, idx, dir, response) {
    var rooms = player.rooms;
    var objects = player.objects;
    var roominfo = rooms[player.loc];

    if (dir && roominfo.exits[dir] && roominfo.exits[dir].visible) {
        player.loc = roominfo.exits[dir].destination;
        rooms[player.loc].visitCount++;
    }
    else {
        response.responsestring += "You cannot go that direction. ";
    }
    return idx + 1;
}


function playermove(player, words, idx, response) {
    var normalized = normalizeDirection(directions, words, idx);
    var dir = normalized ? normalized.normalized : null;
    return playermoveint(player, words, idx, dir, response);

}

function playermovenorth(player, words, idx, response) {
    return playermoveint(player, words, idx, "north", response);
}

function playermovesouth(player, words, idx, response) {
    return playermoveint(player, words, idx, "south", response);
}

function playermoveeast(player, words, idx, response) {
    return playermoveint(player, words, idx, "east", response);
}

function playermovewest(player, words, idx, response) {
    return playermoveint(player, words, idx, "west", response);
}

function playermoveup(player, words, idx, response) {
    return playermoveint(player, words, idx, "up", response);
}

function playermovedown(player, words, idx, response) {
    return playermoveint(player, words, idx, "down", response);
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


