import { defineStore } from 'pinia'

interface State {
        missions: Mission[];
        selected_mission_id: string | "";
        loading: boolean;

}
export interface Mission {
        id: string;
        name: string;
        path_preview: string;
}

export const use_detections_store = defineStore('detections', {
        state: (): State => {
                return {
                        missions: [],
                        selected_mission_id: "",
                        loading: true,
                }
        },

        getters: {
                get_missions(): Mission[] {
                        return this.missions
                },
                get_selected_mission_id(): string | "" {
                        return this.selected_mission_id;
                },
                get_mission_by_id(): FnMissionById {
                        return (id: string): Mission | null => {
                                return this.missions.find(
                                        mission => mission.id === id
                                ) || null;
                        }
                },
                get_loading(): boolean {
                        return this.loading;
                }
        },

        actions: {
                async fetch_missions() {
                        const response = await fetch('/missions_available');
                        const data = await response.json();
                        for (const mission of data.missions) {
                                this.new_mission(mission);
                        }
                        this.loading = false;
                },

                select_mission(id: string) {
                        this.selected_mission_id = id;
                },

                new_mission(mission: Mission) {
                        this.missions.push(mission);
                }
        
        }
})

type FnMissionById = {
        (id: string): Mission | null;
}