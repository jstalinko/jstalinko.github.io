<template>
    <div class="border-2 border-black shadow p-3 ">
        <div v-if="editor" class="p-1 flex justify-between">
            <button type="button" @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }" class="">
                <i class="mdi mdi-format-bold"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                <i class="mdi mdi-format-italic"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
                <i class="mdi mdi-format-strikethrough-variant"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleCode().run()"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }">
                <i class="mdi mdi-code-tags"></i>
            </button>
            <button type="button" @click="editor.chain().focus().unsetAllMarks().run()">
                <i class="mdi mdi-format-clear"></i>
            </button>
            <button type="button" @click="editor.chain().focus().clearNodes().run()">
                <i class="mdi mdi-format-clear-all"></i>
            </button>
            <button @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }">
                <i class="mdi mdi-format-paragraph"></i>

            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                <i class="mdi mdi-format-header-1"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                <i class="mdi mdi-format-header-2"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                <i class="mdi mdi-format-header-3"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                <i class="mdi mdi-format-header-4"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                <i class="mdi mdi-format-header-5"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                <i class="mdi mdi-format-header-6"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }">
                <i class="mdi mdi-format-list-bulleted"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }">
                <i class="mdi mdi-format-list-numbered"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }">
                <i class="mdi mdi-code-braces"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }">
                <i class="mdi mdi-format-quote-open"></i>
            </button>
            <button type="button" @click="editor.chain().focus().setHorizontalRule().run()">
                <i class="mdi mdi-horizontal-rule"></i>
            </button>
            <button type="button" @click="editor.chain().focus().setHardBreak().run()">
                <i class="mdi mdi-format-line-spacing"></i>
            </button>
            <button type="button" @click="editor.chain().focus().undo().run()"
                :disabled="!editor.can().chain().focus().undo().run()">
                <i class="mdi mdi-undo"></i>
            </button>
            <button type="button" @click="editor.chain().focus().redo().run()"
                :disabled="!editor.can().chain().focus().redo().run()">
                <i class="mdi mdi-redo"></i>

            </button>
        </div>
        <TiptapEditorContent :editor="editor" />
    </div>
</template>

<script setup>
const editor = useEditor({
    content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
    extensions: [TiptapStarterKit],
    width: "100%",
    height: "400px",

});


onBeforeUnmount(() => {
    unref(editor).destroy();
});
</script>