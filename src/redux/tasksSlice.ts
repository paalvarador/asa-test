import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskItem {
  id: number;
  description: string;
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as TaskItem[],
  reducers: {
    addItem: (state, action: PayloadAction<{ description: string }>) => {
      const newItem = {
        id: Date.now(),
        description: action.payload.description,
      };
      state.push(newItem);
    },
  },
});

export const { addItem } = tasksSlice.actions;
export default tasksSlice.reducer;
export type { TaskItem };
