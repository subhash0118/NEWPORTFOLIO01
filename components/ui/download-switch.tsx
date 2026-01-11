"use client"

import React, { useState } from 'react';
import styles from './download-switch.module.css';

interface DownloadSwitchProps {
    onDownload?: () => void;
    resumeLink?: string;
}

export const DownloadSwitch = ({ onDownload, resumeLink }: DownloadSwitchProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        if (e.target.checked) {
            if (onDownload) {
                onDownload();
            } else if (resumeLink) {
                // Simulate download or open link after animation
                setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = resumeLink;
                    link.download = "Resume.pdf"; // Suggest a filename
                    link.target = "_blank";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 3500); // 3.5s matches 3.5s animation delay
            }
        }
    };

    return (
        <div className={styles.container}>
            <label className={styles.label}>
                <input
                    type="checkbox"
                    className={styles.input}
                    checked={isChecked}
                    onChange={handleChange}
                />
                <span className={styles.circle}>
                    <svg className={styles.icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
                    </svg>
                    <div className={styles.square} />
                </span>
                <p className={styles.title}>Download</p>
                <p className={styles.title}>Opened</p>
            </label>
        </div>
    );
}
