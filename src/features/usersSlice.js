import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const base_url = "https://65209f55906e276284c4950c.mockapi.io/users"

// Create action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch(base_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
        return(rejectWithValue(error))
    }
})
// This block of code will return a promise, either (pending, fulfilled or rejected) for that we have to add extraReducer in createSlice

// Read action
export const readUsers = createAsyncThunk("readUsers", async (args, { rejectWithValue }) => {
    const response = await fetch(base_url)
    
    try {
        const result = response.json()
        return result
    } catch (error) {
        return(rejectWithValue(error))
    }
}) 

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.users.push(action.payload)
        }),
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload.message
        }),
            
        builder.addCase(readUsers.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(readUsers.fulfilled, (state,action) => {
            state.isLoading = false
            state.users = action.payload
        }),
        builder.addCase(readUsers.rejected, (state,action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users.users

export const selectIsLoading = (state) => state.users.isLoading

export const selectError = (state) => state.users.error

export default usersSlice.reducer