import store from "../redux/store";

test('check initial state of date reducer', () => {
    let state = store.getState().date;
    expect(state.nights).toEqual(0);
    expect(state.startDate).toEqual('');
    expect(state.endDate).toEqual('');
  });