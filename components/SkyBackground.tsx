import React from 'react';
import styles from './SkyBackground.module.css';

const SkyBackground = () => {
    return (
        <div className={styles.skyContainer}>
            <div className={styles.overlay}></div>
            <div className={styles.stars}></div>
            {/* We will rely on CSS background gradient mostly, and maybe some absolute positioned cloud SVGs if we had them.
          For this MVP, we will use a gradient and maybe a simple overlay.
      */}
        </div>
    );
};

export default SkyBackground;
