import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import server from '../api';

export interface MapState {
  markers?: any[];
  mapLevel?: number; //
  infowindowGroup?: any[]; //
  sort?: string | null;
  filter?: string[] | null;
  latLng?: number[]; //
  width?: number[]; //
  talentData?: {
    id: string;
    title: string;
    nickname: string;
    location: number[];
    category: string;
    ratings: number[];
    price: number;
    address: string;
    description: string;
  }[];
}

const initialState: MapState = {
  markers: [],
  mapLevel: 6,
  infowindowGroup: [],
  sort: null,
  filter: null,
  latLng: [37.489455183958114, 126.722336451675],
  width: [37.46195123771726, 37.51695659436168],
  talentData: [
    {
      id: '',
      title: '',
      nickname: '',
      location: [0, 0],
      category: '',
      ratings: [0, 0],
      price: 0,
      address: '',
      description: '',
    },
  ],
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    postData: (state, action: PayloadAction<MapState>) => {
      state.talentData = action.payload.talentData;
      console.log('리덕스내의 state.talentData::::::', state.talentData);
    },
    setMapConfig: (state, action: PayloadAction<MapState>) => {
      const { mapLevel, latLng, width } = action.payload;
      state.mapLevel = mapLevel;
      state.latLng = latLng;
      state.width = width;
    },
    setInfowindow: (state, action: PayloadAction<MapState>) => {
      state.infowindowGroup = [];
      state.infowindowGroup.push(action.payload.infowindowGroup);
    },
  },
});

export const { postData, setMapConfig, setInfowindow } = mapSlice.actions;
export default mapSlice.reducer;
