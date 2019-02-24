'use strict';

// const { GameEntity, Broadcast, Logger } = require('ranvier');
const GameEntity = require('./GameEntity');
const Broadcast = require('./Broadcast');
const Logger = require('./Logger');

// Name        abbandono
// CharNoArg   Hai deciso di lasciar perdere.
// OthersNoArg $n desiste dal proseguire oltre.
// CharFound   Abbandoni la causa di $N.
// OthersFound $n abbandona la causa di $N.
// VictFound   $n ha deciso di abbandonare la tua causa.
// CharAuto    Ti senti triste.
// OthersAuto  $n si sente triste e ignorato da tutti.
// End

/**
 */
class Social extends GameEntity {
  constructor(def) {
    console.log('construct social: ', def);

    super();
    const required = ['name', 'id', 'noarg'];
    for (const prop of required) {
      if (!(prop in def)) {
        throw new Error(`ERROR: Social does not have required property ${prop}`);
      }
    }

    this.def = def;
    this.id = def.id;
    this.name = def.name;
    this.charnoarg = def.charnoarg;
    this.othernoarg = def.othernoarg;
  }
}

module.exports = Social;
