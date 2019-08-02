const path=require('path')
//console.log(path.join(__dirname,'public'));


module.exports=
{
    entry:'./src/app.js',
    output:
    {
        
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:
    {
        rules:
        [
            {
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        
            },
            {
                test:/\.s?css$/,
                use:
                [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',//feramenta que mapeia onde esta o erro
    devServer:
    {
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true //pelo que entendi,esta pegando a pgina anterior e apresentando em uma nova com novos dados
    }
}