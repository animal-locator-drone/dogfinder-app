import { reactive } from "vue";
import { io } from "socket.io-client";
import {use_detections_store} from './stores/detections'

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: []
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("new_detection", (data) => {
       
        const detections_store = use_detections_store()

        detections_store.new_detection(data)
        console.log(data);
});