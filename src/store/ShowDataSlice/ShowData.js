import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isOpenModal: false,
  userData: false,
  jobData: false,
  jobStyleData: false,
  jobDetailData: false,
  serviceData: false,
  commentData: false,
};

export const ShowDataSlice = createSlice({
  name: "SHOW_DATA",
  initialState,
  reducers: {
    setShowUser: (state, { payload }) => {
      state.data = { ...payload };
      state.isOpenModal = true;
      state.userData = true;
      state.jobData = false;
      state.jobDetailData = false;
      state.jobStyleData = false;
      state.serviceData = false;
      state.commentData = false;
    },
    setShowJob: (state, { payload }) => {
      state.data = { ...payload };
      state.isOpenModal = true;
      state.userData = false;
      state.jobData = true;
      state.jobDetailData = false;
      state.jobStyleData = false;
      state.serviceData = false;
      state.commentData = false;
    },
    setShowJobStyle: (state, { payload }) => {
      state.data = { ...payload };
      state.isOpenModal = true;
      state.userData = false;
      state.jobData = false;
      state.jobDetailData = false;
      state.jobStyleData = true;
      state.serviceData = false;
      state.commentData = false;
    },
    setShowJobDetails: (state, { payload }) => {
      state.data = { ...payload };
      state.isOpenModal = true;
      state.userData = false;
      state.jobData = false;
      state.jobDetailData = true;
      state.jobStyleData = false;
      state.serviceData = false;
      state.commentData = false;
    },
    setShowServices: (state, { payload }) => {
      state.data = { ...payload };
      state.isOpenModal = true;
      state.userData = false;
      state.jobData = false;
      state.jobDetailData = false;
      state.jobStyleData = false;
      state.serviceData = true;
      state.commentData = false;
    },
    setShowComment: (state, { payload }) => {
      state.data = { ...payload };
      state.isOpenModal = true;
      state.userData = false;
      state.jobData = false;
      state.jobDetailData = false;
      state.jobStyleData = false;
      state.serviceData = false;
      state.commentData = true;
    },
    setCloseShow: (state, { payload }) => {
      state.data = {};
      state.isOpenModal = false;
      state.userData = false;
      state.jobData = false;
      state.jobDetailData = false;
      state.jobStyleData = false;
      state.serviceData = false;
      state.commentData = false;
    },
  },
});

export const { reducer: ShowDataReducer, actions: ShowDataActions } = ShowDataSlice;
