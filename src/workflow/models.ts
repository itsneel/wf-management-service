const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({});

const inputSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  customInData: {
    type: Object,
    required: false,
  },
});

const outputSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  customOutData: {
    type: Object,
    required: false,
  },
});

const stepsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  action: actionSchema,
  input: {
    type: inputSchema,
    required: true,
  },
  output: {
    type: outputSchema,
    required: true,
  },
});

const mainSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  steps: [stepsSchema],
});

const WorkflowModel = mongoose.model('Workflow', mainSchema);

export { WorkflowModel };
