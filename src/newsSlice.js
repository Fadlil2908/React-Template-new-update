import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Banjir',
    date: 'July 1, 2024',
    description: 'Banjir bandang di wilayah DKI Jakarta.',
    image: '/images/image1.jpg',
    content: 'This is the detailed content of the first news item.',
  },
  {
    id: 2,
    title: 'Kebakaran Hutan',
    date: 'June 25, 2024',
    description: 'Kebakaran Hutan di daerah Kalimantan Selatan.',
    image: '/images/image2.jpg',
    content: 'This is the detailed content of the second news item.',
  },
  {
    id: 3,
    title: 'Tanah Longsor',
    date: 'June 18, 2024',
    description: 'Tanah Longsor di daerah Sulawesi Selatan.',
    image: '/images/image3.jpg',
    content: 'This is the detailed content of the third news item.',
  },
];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // Add your reducers here if needed
  },
});

export default newsSlice.reducer;

