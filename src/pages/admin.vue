<script setup lang="ts">
import { useFileDialog } from "@vueuse/core"
import { ref as storageRef, listAll } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'

const storage = useFirebaseStorage()
const mountainFileRef = storageRef(storage, 'gs://tblt-e31f8.appspot.com/e-books/STUDY_OF_DEFECTS_IN_FLEXIBLE_PAVEMENT_AND_ITS_MAIN.pdf')

const {
    url,
    // gives you a percentage between 0 and 1 of the upload progress
    uploadProgress,
    uploadError,
    // firebase upload task
    uploadTask,
    upload,
} = useStorageFile(mountainFileRef)

function uploadPicture() {
    const data = files.value?.item(0)
    if (data) {
        upload(data)
    }
}

const filename = ref<string>()
const { files, open, reset } = useFileDialog()

listAll(mountainFileRef)
    .then((res) => {
        console.log("list all response", res)
        res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
            // All the items under listRef.
        });
    }).catch((error) => {
        console.error(error)
    });
</script>

<template>
    <div class="px-4">
        <div class="mx-auto max-w-container">
            <form @submit.prevent="uploadPicture">
                <!-- disable the form while uploading -->
                <fieldset :disabled="!!uploadTask">
                    <button type="button" @click="open({ accept: 'image/*', multiple: false })">
                        <template v-if="files?.length === 1">
                            Selected file: {{ files.item(0)!.name }} (Click to select another)
                        </template>
                        <template v-else> Select one picture </template>
                    </button>
                    <br />
                    <button>Upload</button>
                </fieldset>
            </form>
            <img v-if="url" :src="url" />
        </div>
    </div>
</template>