const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  workflow: {
    type: String,
    required: true,
  },
  permissions: {
    type: Map,
    of: String,
  },
});

const PermissionModel = mongoose.model('Permission', schema);

export { PermissionModel };
