import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import {RootState} from '../../../store/Store';
import {getCategoriesRepo} from '../../../repositories/categoriesRepo';
import {categoryData, childData} from '../../../models/moreModel';

//createAsyncThunk will then generate three action creators: pending, fulfilled, and rejected.
//this is a "thunk"
export const fetchCategoryData = createAsyncThunk(
  'category/categories',
  async () => {
    const {data} = await getCategoriesRepo(); //

    return (await data).categories as categoryData[];
  },
);

export const categoryAdapter = createEntityAdapter<categoryData>();

const usersSlice = createSlice({
  name: 'category', //link to main store
  initialState: categoryAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategoryData.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
      categoryAdapter.setAll(state, action.payload);
      state.loading = false;

      // categoryAdapter.
    });

    builder.addCase(fetchCategoryData.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalUsers,
} = categoryAdapter.getSelectors((state: RootState) => state.category);

export default usersSlice.reducer;
