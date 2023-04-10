import { Schema, model, models } from "mongoose";

const contentSchema = new Schema({
    text: String,
});

const Test = models.Content || model("Content", contentSchema);

export default Test