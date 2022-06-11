import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    answers: [
      {
        type: String,
        required: true,
        isRight: { type: Boolean }
      }
    ],
    mark: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "single"
    }
  },
  { timestamps: true }
);

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      // minlength: 3,
      maxlength: 320,
      required: true
    },
    slug: {
      type: String,
      lowercase: true
    },
    content: {
      type: {},
      minlength: 200
    },
    video: {},
    free_preview: {
      type: Boolean,
      default: false
    },
    questions: [questionSchema]
  },
  { timestamps: true }
);

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true
    },
    slug: {
      type: String,
      lowercase: true
    },
    description: {
      type: {},
      minlength: 200,
      required: true
    },
    price: {
      type: Number,
      default: 9.99
    },
    image: {},
    category: String,
    published: {
      type: Boolean,
      default: false
    },
    paid: {
      type: Boolean,
      default: true
    },
    instructor: {
      type: ObjectId,
      ref: "User",
      required: true
    },
    lessons: [lessonSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
