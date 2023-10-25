const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({});

const inputSchema = new mongoose.Schema({
  customInData: {
    type: Object,
    required: false,
  },
});

const outputSchema = new mongoose.Schema({
  customOutData: {
    type: Object,
    required: false,
  },
});

const stepsSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: true,
  },
  steps: [stepsSchema],
});

const WorkflowModel = mongoose.model('Workflow', mainSchema);

export { WorkflowModel };
