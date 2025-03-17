import { Box, Link } from '@mui/material';
import React from 'react';

export default function PhotoLink({ size, style, link }) {
    return (
        <Box
            className={style}
            sx={{
                width: size,
                height: size,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ddd',
                backgroundColor: '#f9f9f9',
                textAlign: 'center',
                wordBreak: 'break-word',
                padding: '1px',
                boxSizing: 'border-box',
            }}
        >
            <Link
                href={link}
                sx={{
                    fontSize: '10px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    maxWidth: '90%',
                    display: 'block',
                }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {link}
            </Link>
        </Box>
    );
}
