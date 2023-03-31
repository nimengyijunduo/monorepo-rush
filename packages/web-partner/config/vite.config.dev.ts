import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

const topDomain: 'net' | 'me' | 'cn' | 'com' = 'me';

export default mergeConfig(
    {
        mode: 'development',
        server: {
            host: '0.0.0.0',
            strictPort: true,
            open: true,
            fs: {
                strict: true, // 限制为工作区 root 路径以外的文件的访问
            },
            proxy: {
                '/api': {
                    target: `${Object.is(topDomain, 'net') ? 'http' : 'https'}://ossapi.qiyuesuo.${topDomain}`,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        plugins: [
            eslint({
                cache: false,
                include: [
                    'src/**/*.js',
                    'src/**/*.ts',
                    'src/**/*.vue',
                    'src/**/*.tsx',
                    'src/*.js',
                    'src/*.ts',
                    'src/*.vue',
                ],
                exclude: ['node_modules'],
            }),
        ],
    },
    baseConfig
);
