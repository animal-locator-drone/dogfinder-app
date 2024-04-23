import { defineStore } from 'pinia'

interface State {
        detections: Detection[];
        selected_detection: string | "";
        loading: boolean;

}
export interface Detection {
        id: string;
        location: [number, number];
        time: string;
        images: string[];
}

export const use_detections_store = defineStore('detections', {
        state: (): State => {
                return {
                        detections: [],
                        selected_detection: "",
                        loading: true,
                }
        },

        getters: {
                get_detections(): Detection[] {
                        return this.detections;
                },
                get_selected_detection(): string | "" {
                        return this.selected_detection;
                },
                get_detection_by_id(): FnDetectionById {
                        return (id: string): Detection | null => {
                                return this.detections.find(
                                        detection => detection.id === id
                                ) || null;
                        }
                },
                get_loading(): boolean {
                        return this.loading;
                }
        },

        actions: {
                async fetch_detections() {
                        const response = await fetch('/detections');
                        const data = await response.json();
                        for (const detection of data.detections) {
                                this.new_detection(detection);
                        }
                        this.loading = false;
                },

                select_detection(id: string) {
                        this.selected_detection = id;
                },

                new_detection(detection: Detection) {
                        this.detections.push(detection);
                }
        
        }
})

type FnDetectionById = {
        (id: string): Detection | null;
}