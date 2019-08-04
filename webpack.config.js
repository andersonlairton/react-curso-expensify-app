const path=require('path')
//console.log(path.join(__dirname,'public'));
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports=(env)=>
{
    const isProduction = env ==='production';
    const CSSExtract = new ExtractTextPlugin('styles.css')


    console.log("env",env);
    return{
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
                use:CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                        {
                            loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                    ]
                })
            }
        ]
    },
    plugins:[CSSExtract],
    devtool:isProduction?'source-map':'inline-sourse-map',//feramenta que mapeia onde esta o erro
    devServer:
    {
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true //pelo que entendi,esta pegando a pgina anterior e apresentando em uma nova com novos dados
    }}
}
