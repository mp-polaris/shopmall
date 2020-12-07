module.export = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'utils': '@/utils',
                'views': '@/views',
            }
        }
    }
}