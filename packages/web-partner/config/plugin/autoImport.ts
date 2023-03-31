/**
 * 全局自动导入方法
 *
 * vue、vue-router、pinia、@vueuse/core
 */
import AutoImport from 'unplugin-auto-import/vite';

export default function autoImport() {
    return AutoImport({
        include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/,
            /\.vue\?vue/, // .vue
        ],
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        dts: './src/auto-import.d.ts',
        eslintrc: {
            enabled: false,
        },
    });
}
