const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

CartSchema.virtual("cartShop", {
    ref: "User",
    localField: "userId",
    foreignField: "_id",
    justOne: true
});

CartSchema.virtual("cartItems", {
    ref: "CartItem",
    localField: "_id",
    foreignField: "cartId"
});

CartSchema.virtual("order-cartId", {
    ref: "Order",
    localField: "_id",
    foreignField: "cartId"
});

const Cart = mongoose.model("Cart", CartSchema, "cart-shop");

module.exports = Cart;
