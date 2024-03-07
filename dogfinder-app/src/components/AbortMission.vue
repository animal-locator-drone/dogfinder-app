<template>
        <ConfirmDialog></ConfirmDialog>
        <Button 
                @click="confirm_abort()"
                label="Abort Mission"
                severity="danger"
                icon="pi pi-power-off"
                />
</template>

<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm"

const confirm = useConfirm()

const confirm_abort = () => {
        confirm.require({
                message: 'Are you sure you want to abort the mission?',
                header: 'Abort Mission',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                        console.log('Mission Aborted')
                },
                reject: () => {
                        console.log('Mission Not Aborted')
                }
        })
}

</script>