<template>
        <div class="w-full h-full">
                <video 

                        autoplay controls muted loop width="100%" height="100%">
                        <source :src="'/video'"
                                type="video/mp4">
                        Your browser does not support the video tag.
                </video>
        </div>
</template>