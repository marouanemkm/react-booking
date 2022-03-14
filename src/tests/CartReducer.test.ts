import store from "../redux/store";

test('check initial state of cart reducer', () => {
    let state = store.getState().cart;
    expect(state.hotelName).toEqual('');
    expect(state.hotelPrice).toEqual(0);
    expect(state.showName).toEqual('');
    expect(state.showPrice).toEqual(0);
    expect(state.totalPrice).toEqual(0);
  });