<template>
  <bubble-menu
    class="bubble-menu"
    :tippy-options="{ duration: 100 }"
    :editor="editor"
    v-if="editor"
  >
    <div class="button-group">
      <IconPack
        class="btn"
        icon="bold_text"
        @click="
          editor
            .chain()
            .focus()
            .toggleBold()
            .run()
        "
        :class="{ 'is-active': editor.isActive('bold') }"
        title="Жирный"
      />
      <IconPack
        class="btn"
        icon="italic_text"
        @click="
          editor
            .chain()
            .focus()
            .toggleItalic()
            .run()
        "
        :class="{ 'is-active': editor.isActive('italic') }"
        title="Курсив"
      />
      <IconPack
        class="btn"
        icon="strikethrough"
        @click="
          editor
            .chain()
            .focus()
            .toggleStrike()
            .run()
        "
        :class="{ 'is-active': editor.isActive('strike') }"
        title="Перечеркнутый"
      />

      <IconPack
        class="btn"
        icon="code_icon"
        @click="
          editor
            .chain()
            .focus()
            .toggleCode()
            .run()
        "
        :class="{ 'is-active': editor.isActive('code') }"
        title="Однострочный код"
      />
      <IconPack
        class="btn"
        icon="text_marker"
        @click="
          editor
            .chain()
            .focus()
            .toggleHighlight()
            .run()
        "
        :class="{ 'is-active': editor.isActive({ textAlign: 'highlight' }) }"
      />
    </div>

    <div class="button-group">
      <IconPack
        class="btn"
        icon="align_left"
        @click="
          editor
            .chain()
            .focus()
            .setTextAlign('left')
            .run()
        "
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      />
      <IconPack
        class="btn"
        icon="align_center"
        @click="
          editor
            .chain()
            .focus()
            .setTextAlign('center')
            .run()
        "
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      />
      <IconPack
        class="btn"
        icon="align_right"
        @click="
          editor
            .chain()
            .focus()
            .setTextAlign('right')
            .run()
        "
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      />
      <IconPack
        class="btn"
        icon="align_justify"
        @click="
          editor
            .chain()
            .focus()
            .setTextAlign('justify')
            .run()
        "
        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      />
    </div>
  </bubble-menu>

  <floating-menu
    class="floating-menu"
    :tippy-options="{ duration: 100 }"
    :editor="editor"
    v-if="editor"
  >
    <div class="button-group">
      <button
        @click="
          editor
            .chain()
            .focus()
            .setParagraph()
            .run()
        "
        :class="{ 'is-active': editor.isActive('paragraph') }"
        title="Параграф"
      >
        Параграф
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        title="H1"
      >
        H1
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 2 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        title="H2"
      >
        H2
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 3 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        title="H3"
      >
        H3
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 4 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        title="H4"
      >
        H4
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 5 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        title="H5"
      >
        H5
      </button>
      <button
        @click="
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 6 })
            .run()
        "
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        title="H6"
      >
        H6
      </button>
    </div>

    <div class="button-group">
      <IconPack class="btn" icon="image_icon" @click="addImage" />
      <IconPack
        class="btn"
        icon="list_bulleted"
        @click="
          editor
            .chain()
            .focus()
            .toggleBulletList()
            .run()
        "
        :class="{ 'is-active': editor.isActive('bulletList') }"
        title="Список"
      />
      <IconPack
        class="btn"
        icon="list_numbered"
        @click="
          editor
            .chain()
            .focus()
            .toggleOrderedList()
            .run()
        "
        :class="{ 'is-active': editor.isActive('orderedList') }"
        title="Нумерованный список"
      />
      <IconPack
        class="btn"
        icon="code_icon"
        @click="
          editor
            .chain()
            .focus()
            .toggleCodeBlock()
            .run()
        "
        :class="{ 'is-active': editor.isActive('codeBlock') }"
        title="Код"
      />
      <IconPack
        class="btn"
        icon="quote_icon"
        @click="
          editor
            .chain()
            .focus()
            .toggleBlockquote()
            .run()
        "
        :class="{ 'is-active': editor.isActive('blockquote') }"
        title="Цитата"
      />
      <IconPack
        class="btn"
        icon="horizontal_rule"
        @click="
          editor
            .chain()
            .focus()
            .setHorizontalRule()
            .run()
        "
        title="Разделитель"
      />
    </div>
  </floating-menu>

  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  methods: {
    addImage() {
      const url = window.prompt("URL");

      if (url) {
        this.editor
          .chain()
          .focus()
          .setImage({ src: url })
          .run();
      }
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.modelValue,
      extensions: [
        StarterKit,
        Image,
        TextAlign.configure({
          types: ["heading", "paragraph", "image"],
        }),
        Highlight,
        Placeholder.configure({
          placeholder: "Текст...",
        }),
      ],
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  .is-empty::before {
    content: attr(data-placeholder);
    float: left;
    color: #5a5a5a;
    pointer-events: none;
    height: 0;
  }
}
</style>

<style lang="scss" scoped>
.bubble-menu,
.floating-menu {
  display: flex;
}
.button-group {
  display: flex;
  border-radius: 10px;
  margin-right: 10px;
  button,
  .btn {
    border: 0;
    border-radius: 0;
    background-color: rgb(184, 184, 184);
    padding: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: #4b4b4b;
    height: 34px;

    &.is-active {
      background-color: rgb(48, 48, 48);
      color: #fff;
    }
  }
  button:hover,
  .btn:hover {
    background-color: rgb(109, 108, 108);
    color: #fff;
  }

  button:first-of-type,
  .btn:first-of-type {
    border-radius: 10px 0 0 10px;
    padding-left: 10px;
  }

  button:last-of-type,
  .btn:last-of-type {
    border-radius: 0 10px 10px 0;
    padding-right: 10px;
  }
}
</style>
