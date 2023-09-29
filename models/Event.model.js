const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Databass Schema

const EventSchema = new Schema(
  {
    eventId: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true, maxlength: 10 },
    date: { type: Date, required: true },
    attend: [
      {
        customerId: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
