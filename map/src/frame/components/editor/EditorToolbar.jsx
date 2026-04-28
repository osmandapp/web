import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, IconButton, Tooltip } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import styles from './editor.module.css';

export default function EditorToolbar({ editor }) {
    const { t } = useTranslation();
    const canUndo = editor?.can().undo() ?? false;
    const canRedo = editor?.can().redo() ?? false;

    return (
        <Box className={styles.toolbar}>
            <ToolbarBtn
                title={t('web:editor_undo')}
                icon={<UndoIcon fontSize="small" />}
                disabled={!canUndo}
                onClick={() => editor?.chain().focus().undo().run()}
            />
            <ToolbarBtn
                title={t('web:editor_redo')}
                icon={<RedoIcon fontSize="small" />}
                disabled={!canRedo}
                onClick={() => editor?.chain().focus().redo().run()}
            />

            <Divider orientation="vertical" flexItem className={styles.toolbarDivider} />

            <HeadingBtn editor={editor} level={1} label="H1" title={t('web:editor_heading_h1')} />
            <HeadingBtn editor={editor} level={2} label="H2" title={t('web:editor_heading_h2')} />
            <HeadingBtn editor={editor} level={3} label="H3" title={t('web:editor_heading_h3')} />

            <Divider orientation="vertical" flexItem className={styles.toolbarDivider} />

            <ToolbarBtn
                title={t('web:editor_bullet_list')}
                icon={<FormatListBulletedIcon fontSize="small" />}
                active={editor?.isActive('bulletList') ?? false}
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
            />
            <ToolbarBtn
                title={t('web:editor_ordered_list')}
                icon={<FormatListNumberedIcon fontSize="small" />}
                active={editor?.isActive('orderedList') ?? false}
                onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            />
            <ToolbarBtn
                title={t('web:editor_blockquote')}
                icon={<FormatQuoteIcon fontSize="small" />}
                active={editor?.isActive('blockquote') ?? false}
                onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            />

            <Divider orientation="vertical" flexItem className={styles.toolbarDivider} />

            <ToolbarBtn
                title={t('web:editor_bold')}
                icon={<FormatBoldIcon fontSize="small" />}
                active={editor?.isActive('bold') ?? false}
                onClick={() => editor?.chain().focus().toggleBold().run()}
            />
            <ToolbarBtn
                title={t('web:editor_italic')}
                icon={<FormatItalicIcon fontSize="small" />}
                active={editor?.isActive('italic') ?? false}
                onClick={() => editor?.chain().focus().toggleItalic().run()}
            />
            <ToolbarBtn
                title={t('web:editor_underline')}
                icon={<FormatUnderlinedIcon fontSize="small" />}
                active={editor?.isActive('underline') ?? false}
                onClick={() => editor?.chain().focus().toggleUnderline().run()}
            />
            <ToolbarBtn
                title={t('web:editor_strikethrough')}
                icon={<StrikethroughSIcon fontSize="small" />}
                active={editor?.isActive('strike') ?? false}
                onClick={() => editor?.chain().focus().toggleStrike().run()}
            />

            <Divider orientation="vertical" flexItem className={styles.toolbarDivider} />

            <LinkButton editor={editor} />
        </Box>
    );
}

function ToolbarBtn({ title, icon, active, onClick, disabled }) {
    return (
        <Tooltip title={title} arrow>
            <span>
                <IconButton
                    size="small"
                    disabled={disabled}
                    className={active ? styles.toolbarBtnActive : styles.toolbarBtn}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        onClick();
                    }}
                >
                    {icon}
                </IconButton>
            </span>
        </Tooltip>
    );
}

function HeadingBtn({ editor, level, label, title }) {
    return (
        <ToolbarBtn
            title={title}
            icon={<span className={styles.headingBtnLabel}>{label}</span>}
            active={editor?.isActive('heading', { level }) ?? false}
            onClick={() => editor?.chain().focus().toggleHeading({ level }).run()}
        />
    );
}

function LinkButton({ editor }) {
    const { t } = useTranslation();

    if (!editor) return null;

    const isLink = editor.isActive('link');

    function handleClick() {
        if (isLink) {
            editor.chain().focus().unsetLink().run();

            return;
        }
        const url = window.prompt(t('web:editor_link_url_prompt'));
        if (url) {
            editor.chain().focus().setLink({ href: url }).run();
        }
    }

    return (
        <ToolbarBtn
            title={isLink ? t('web:editor_remove_link') : t('web:editor_add_link')}
            icon={isLink ? <LinkOffIcon fontSize="small" /> : <LinkIcon fontSize="small" />}
            active={isLink}
            onClick={handleClick}
        />
    );
}
