import {createProxyMiddleware} from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://antochak.github.io',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': 'https://antochak.github.io/Ton-connect/public/tonconnect-manifest.json',
  },
});
