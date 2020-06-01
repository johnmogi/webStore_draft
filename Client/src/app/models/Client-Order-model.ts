export class ClientOrderModel {
    public constructor(
    public orderID?: Number,
    public clientID?: Number,
    public cartID?: String,
    public subTotal?: String,
    public shippingCity?: String,
    public shippingStreet?: String,
    public orderTime?: String,
    public paymentDigits?: String
    ) {
    }
    }