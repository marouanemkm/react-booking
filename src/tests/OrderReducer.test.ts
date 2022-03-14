import store from "../redux/store";

test('check initial state order reducer', () => {
    let state = store.getState().order;
    expect(state.email).toEqual('');
    expect(state.firstName).toEqual('');
    expect(state.lastName).toEqual('');
    expect(state.adress).toEqual('');
  });