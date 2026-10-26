import React from 'react';
import { Box } from '@mui/material';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorToolbar from './EditorToolbar';
import styles from './editor.module.css';

const PLAIN_TEXT_OPTIONS = {
    blockquote: false,
    bold: false,
    bulletList: false,
    code: false,
    codeBlock: false,
    heading: false,
    horizontalRule: false,
    italic: false,
    link: false,
    listItem: false,
    listKeymap: false,
    orderedList: false,
    strike: false,
    underline: false,
};

export default function RichTextEditor({ content, onChange, autofocus = true, editorId, plainText = false }) {
    const editor = useEditor({
        extensions: [StarterKit.configure(plainText ? PLAIN_TEXT_OPTIONS : { link: { openOnClick: false } })],
        content,
        autofocus,
        onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
        editorProps: editorId ? { attributes: { id: editorId } } : undefined,
    });

    return (
        <>
            {!plainText && <EditorToolbar editor={editor} />}
            <Box className={styles.editorContent}>
                <EditorContent editor={editor} className={styles.prosemirror} />
            </Box>
        </>
    );
}
