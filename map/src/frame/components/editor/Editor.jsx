import React from 'react';
import { Box } from '@mui/material';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorToolbar from './EditorToolbar';
import styles from './editor.module.css';

export default function Editor({ content, onChange, autofocus = true, editorId }) {
    const editor = useEditor({
        extensions: [StarterKit.configure({ link: { openOnClick: false } })],
        content,
        autofocus,
        onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
        editorProps: editorId ? { attributes: { id: editorId } } : undefined,
    });

    return (
        <>
            <EditorToolbar editor={editor} />
            <Box className={styles.editorContent}>
                <EditorContent editor={editor} className={styles.prosemirror} />
            </Box>
        </>
    );
}
