

import moongoose from "mongoose";

const schema = new moongoose.Schema({
  shippingInfo: {
    hNo: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  orderItems: {
    cheeseBurger: {
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
    vegCheeseBurger: {
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
    burgerWithFries: {
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  },
  user: {
    type: moongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["COD", "Online"],
    default: "COD",
  },
  paymentInfo: {
    type: moongoose.Schema.ObjectId,
    ref: "Payment",
    // required: true,
  },
  paidAt: Date,
  itemPrice: {
    type: Number,
    default: 0,
  },
  taxPrice: {
    type: Number,
    default: 0,
  },
  shippingCharges: {
    type: Number,
    default: 0,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  orderStatus: {
    type: String,
    enum: ["Preparing", "Shipped", "Delivered"],
    default: "Preparing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Order = moongoose.model("Order", schema);
