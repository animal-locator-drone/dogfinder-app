<template>
        <ConfirmDialog></ConfirmDialog>
        <Button @click="confirm_abort()" label="Abort Mission" severity="danger" icon="pi pi-power-off" />
</template>

<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm"

import axios from 'axios';

const confirm = useConfirm()


const confirm_abort = () => {

        confirm.require({
                message: 'Are you sure you want to abort the mission? You will start over from the very beginning.',
                header: 'Abort Mission?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                        axios.post('/abort_mission', {})
                                .then(function (response) {
                                        console.log(response);
                                })
                                .catch(function (error) {
                                        console.log(error);
                                });

                },
                reject: () => {
                        console.log('Mission Not Aborted')
                }
        })
}

</script>