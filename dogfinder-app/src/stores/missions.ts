import { defineStore } from 'pinia'
import axios from 'axios';


interface State {
        missions: Mission[];
        selected_mission_id: string | "";
        loading: boolean;
        loading_mission_status: boolean;

}
export interface Mission {
        id: string;
        name: string;
        path_preview: string;
}

export const use_missions_store = defineStore('missions', {
        state: (): State => {
                return {
                        missions: [],
                        selected_mission_id: "",
                        loading: true,
                        loading_mission_status: false,
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

                async select_mission(id: string) {
                        this.loading_mission_status = true;
                        const mission_status = await axios.post(
                                '/select_mission',
                                { id }
                        );
                        if (mission_status.data.status === "Mission Started") {
                                this.loading_mission_status = false;
                        } else {
                                console.error("Mission not started");
                                throw new Error("Mission not started");
                        }
                },


                new_mission(mission: Mission) {
                        this.missions.push(mission);
                }
        
        }
})

type FnMissionById = {
        (id: string): Mission | null;
}