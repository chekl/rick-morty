import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('characters/fetchData', async () => {
  const url: string = 'https://rickandmortyapi.com/api/character';
  return await fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json' 
    }
  }).then(response => response.json())
  .then(data => data)
})

interface CharacterState {
  characters: any[],
  status: string,
  error: string | undefined
}

const initialState:  CharacterState = {
  characters: [],
  status: 'idle',
  error: undefined
}

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded'
        state.characters = state.characters.concat(action.payload)
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default characterSlice.reducer

export const selectAll = (state: { characters: any; }) => state.characters

export const selectById = (state: any, id: string) =>
  state.characters.find((character: { id: number; }) => character.id === +id)

export const selectStatus = (state: any) => state.status