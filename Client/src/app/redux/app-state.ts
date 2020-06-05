import { AuthModel } from '../models/Auth-model';
import { CartItemModel } from '../models/Cart-Item-model';

export class AppState {

    public user: AuthModel;
    public productsOfCart: CartItemModel[];
    // public totalPrice: number;
    // public userActive: boolean;
    // public cartOption: boolean;

    public constructor() {
        this.user = null;
        this.productsOfCart = [];
        // this.totalPrice = 0;
        // this.userActive = false;
        // this.cartOption = false;
    }
}
