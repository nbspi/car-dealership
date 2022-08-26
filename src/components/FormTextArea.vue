<template>
    <div class="mb-3">
        <b-form-group :label="label" id="label" class="ml-2">
        </b-form-group>
        <b-form-textarea id="textarea" placeholder="Enter comments here">
        </b-form-textarea>
    </div>
</template>

<script>
    export default {
        name: "FormTextArea",
        props: {
            label: String
        }
    }
</script>