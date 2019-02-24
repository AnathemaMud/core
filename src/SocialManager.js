'use strict';

const Social = require('./Social');

/**
 * Socials manager
 */
class SocialManager {
  constructor() {
    this.socials = new Map();
  }

  /**
   * @param {string} entityRef
   * @return {Social}
   */
  getSocial(entityRef) {
    return this.socials.get(entityRef);
  }

  /**
   * @param {Social} social
   */
  addSocial(social) {
    this.socials.set(social.entityReference, social);
  }

  /**
   * @param {Social} social
   */
  removeSocial(social) {
    this.socials.delete(social.entityReference);
  }
}

module.exports = SocialManager;
