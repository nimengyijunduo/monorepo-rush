import { defineConfig, presetAttributify, presetUno, presetTagify } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
    shortcuts: {
        'btn-primary': 'bg-bleuDeFrance text-white rounded-1 text-base py-3 text-center',
    },
    theme: {
        colors: {
            brand: '#2489f2', // 品牌色
            success: '#2bb353', // 成功 - 绿色
            error: '#ed521f', // 错误 - 红色
            waring: '#f0a128', // 警告 - 黄色
            firstLevel: '#86909c', // 文本一级 - 灰色
        },

        // font: {
        //     fontSize: Object.fromEntries(Array.from({ length: 32 }, (_, i) => [`${( i+ 1) * 4}rpx`, [`${( i+ 1) * 4}rpx`, `${(i + 1) * 2}px`]])),
        // },
    },
    presets: [
        presetUno(),
        presetRemToPx(),
        presetAttributify({
            prefix: 'qys-',
            prefixedOnly: true,
        }),
        presetTagify({
            prefix: 'qys-',
        }),
    ],
});
