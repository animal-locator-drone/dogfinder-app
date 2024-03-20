import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { id } from 'vuetify/locale';

interface State {
        detections: Detection[];
        selected_detection: Detection | null;

}

export const use_detections_store = defineStore('detections', {
        state: (): State => {
                return {
                        detections: [],
                        selected_detection: null
                }
        },

        getters: {
                detections(): Detection[] {
                        return this.detections;
                },
                selected_detection(): Detection | null {
                        return this.selected_detection;
                },
                detection_by_id(): FnDetectionById {
                        return (id: string) => {
                                return this.detections.find(
                                        detection => detection.id === id
                                ) || null;
                        }
                }
        },

        actions: {
                async fetch_detections() {
                        const response = await fetch('/detections');
                        const data = await response.json();
                        this.detections = data.detections;
                },

                async select_detection(id: string) {
                        this.selected_detection = this.detection_by_id(id);
                },

                async new_detection(detection: Detection) {
                        this.detections.push(detection);
                }
        
        }
})

interface Detection {
        id: string;
        location: [number, number];
        time: string;
        images: string[];
}

type FnDetectionById = {
        (id: string): Detection | null;
}