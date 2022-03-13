interface Datas {
    id: number,
    name: string,
    price: number,
    image: string
}

interface OrderState {
    email: string,
    firstName: string,
    lastName: string,
    adress: string,
}

interface DateState {
    nights: number,
    startDate: any,
    endDate: any,
}

interface CartState {
    hotelName: string,
    hotelPrice: number,
    showName: string,
    showPrice: number,
    totalPrice: number,
}

export type {
    Datas,
    OrderState,
    DateState,
    CartState
}