if (typeof module !== 'undefined' && module.exports) {
  const crypto = require('crypto');
  const randomBytes = crypto && crypto.randomBytes;

  module.exports = require('./gen')(randomBytes);
} else {
  module.exports = require('./browser');
}
