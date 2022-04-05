<template>
  <div class="about">
    <w-button class="px4" @click="dialog.show = true"> Open dialog </w-button>

    <w-dialog
      v-model="dialog.show"
      title="Terms and conditions"
      persistent
      :width="550"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore
      delectus, quisquam ipsa laudantium esse consequatur itaque similique et
      eligendi eum voluptas odit dolor labore eveniet at vel sequi nostrum.<br /><br />
      Voluptates, aut distinctio esse quia doloribus commodi minima inventore
      neque sequi dolores perspiciatis fugiat. Fuga, reprehenderit sequi
      veritatis iure magnam excepturi aliquid dolore quo amet deserunt
      asperiores placeat maxime perferendis.

      <template #actions>
        <div class="spacer" />
        <w-button class="mr2" @click="dialog.show = false" bg-color="error">
          I disagree
        </w-button>
        <w-button @click="dialog.show = false" bg-color="success">
          I agree
        </w-button>
      </template>
    </w-dialog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    dialog: { show: false },
  }),
  components: {},
};
</script>
