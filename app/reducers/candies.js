//getting candies data from server

//ACTION TYPES
const GOT_CANDIES_FROM_SERVER = 'GOT_CANDIES_FROM_SERVER';

//ACTION CREATORS
const gotCandies = candies => ({ type: GOT_CANDIES_FROM_SERVER, candies });

//THUNK
export const getCandies = () => {
  return async (dispatch, _, { axios }) => {
    const { data } = await axios.get('/api/candies');
    //path depends on how you name path in api index for .get
    console.log(data);
    dispatch(gotCandies(data));
  };
};

//REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return action.candies;
    default:
      return state;
  }
};

export default reducer;
