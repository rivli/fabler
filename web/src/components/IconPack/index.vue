<template>
  <component :is="icon" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import account from "./account.vue";
import moon from "./moon.vue";
import sun from "./sun.vue";
import align_left from "./align_left.vue";
import align_right from "./align_right.vue";
import align_center from "./align_center.vue";
import align_justify from "./align_justify.vue";
import code_icon from "./code_icon.vue";
import text_marker from "./text-marker.vue";

import image_icon from "./image_icon.vue";
import bold_text from "./bold_text.vue";
import italic_text from "./italic_text.vue";
import list_bulleted from "./list_bulleted.vue";
import list_numbered from "./list_numbered.vue";
import quote_icon from "./quote_icon.vue";
import strikethrough from "./strikethrough.vue";
import horizontal_rule from "./horizontal_rule.vue";

export default defineComponent({
  components: {
    account,
    moon,
    sun,
    align_left,
    align_right,
    align_center,
    align_justify,
    code_icon,
    text_marker,

    image_icon,
    bold_text,
    italic_text,
    list_bulleted,
    list_numbered,
    quote_icon,
    strikethrough,
    horizontal_rule,
  },
  name: "IconPack",

  props: {
    icon: {
      type: String,
    },
  },
});
</script>
