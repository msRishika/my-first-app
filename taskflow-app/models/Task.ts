import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// IMPORTANT: prevent model overwrite in Next.js hot reload
export default mongoose.models.Task || mongoose.model("Task", TaskSchema);